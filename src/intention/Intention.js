import {
	authHeaderBuilder,
	HTTPRequest,
	applicationJsonHeader
} from "../http";
import { getApiBaseUrl, getApiVersion } from "../utils";

export class Intention {
	constructor(secretKey) {
		this.secretKey = secretKey;
		this.request = new HTTPRequest(this.secretKey);
	}

	_getApiBaseUrl() {
		return getApiBaseUrl();
	}

	_getApiVersion() {
		return getApiVersion();
	}

	_getFullUrl(route) {
		const url = `${this._getApiBaseUrl()}/${this._getApiVersion()}/${route}/`;
		return url;
	}

	_getBasicOptions(data) {
		return {
			url: this._getFullUrl("intention"),
			body: JSON.stringify(data),
			headers: {
				...applicationJsonHeader(),
				...authHeaderBuilder(this.secretKey)
			}
		};
	}

	create(data) {
		const options = {
			method: "POST",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}
}