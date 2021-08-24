import fetch from "node-fetch";
import { requestIdLogger } from "./_requestIdLogger";

export const requester = async (url, options) => {
	return new Promise(function (resolve, reject) {
		const callback = async () => {
			try {
				const response = await fetch(url, options);
				const headers = await response.headers;
				const data = await response.json();
				requestIdLogger(headers.get("http_x_request_id"));
				resolve(data);
			} catch (error) {
				console.error(error);
				reject(error);
			}
		};
		callback();
	});
};