import { paymobLogger } from "../utils";
import { requesAgenttHeadersBuilder } from "./_requesAgenttHeadersBuilder";
import { requester } from "./_requester";

/**
 * Wanna a request!, it's HTTPRequest class.
 * @class HTTPRequest
 */
export class HTTPRequest {
	/**
	 * Creates an instance of Intention.
	 * @param {*} secretKey
	 * @memberof HTTPRequest
	 */
	constructor(secretKey) {
		this.secretKey = secretKey;
	}

	/**
	 * request maker.
	 * @param {Object} options
	 * @return {Promise} 
	 * @memberof HTTPRequest
	 */
	request(options) {
		paymobLogger(`Sending request to paymob, Request info: ${JSON.stringify(options)}`, "info");
		const { url } = options;
		options.headers = {
			...options.headers,
			...requesAgenttHeadersBuilder()
		};
		return requester(url, options);
	}
}