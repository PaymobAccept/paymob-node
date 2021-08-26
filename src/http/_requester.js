import fetch from "node-fetch";
import { paymobLogger } from "../utils";
import { requestIdLogger } from "./_requestIdLogger";

/**
 * http requester utils 
 * @name requester
 * @param {String} url
 * @param {Object} options
 * @return {Promise}
*/
export const requester = async (url, options) => {
	return new Promise(function (resolve, reject) {
		const callback = async () => {
			try {
				const response = await fetch(url, options);
				const headers = await response.headers;
				const data = await response.json();
				requestIdLogger(headers.get("http_x_request_id"));
				if(response.ok) {
					paymobLogger(`Request to paymob completed successfully, Response data: ${JSON.stringify(data)}`);
				} else {
					paymobLogger(`Oh ah! Error while requesting paymob: ${JSON.stringify(data)}`, "error");
				}
				resolve(data);
			} catch (error) {
				paymobLogger(`Oh ah! Error while requesting paymob: ${JSON.stringify(error)}`, "error");
				reject(error);
			}
		};
		callback();
	});
};