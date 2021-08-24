import { getApiBaseUrl, getApiVersion } from "../utils";
import { requesAgenttHeadersBuilder } from "./_requesAgenttHeadersBuilder";
import { requester } from "./_requester";

export class HTTPRequest {
	constructor(secretKey) {
		this.secretKey = secretKey;
	}

	_getApiBaseUrl() {
		return getApiBaseUrl();
	}

	_getApiVersion() {
		return getApiVersion();
	}

	_getFullUrl() {
		const url = `${this._getApiBaseUrl()}/${this._getApiVersion()}/intention/`;
		return url;
	}

	request(options) {
		console.log("Calling next API from Inside Node SDK");
		const { url } = options;
		options.headers = {
			...options.headers,
			...requesAgenttHeadersBuilder()
		};
		return requester(url, options);
	}
}