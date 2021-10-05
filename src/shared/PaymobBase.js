import { applicationJsonHeader, authHeaderBuilder, HTTPRequest } from "../http";
import { getApiBaseUrl, getApiVersion } from "../utils";

/**
 * Creates an instance of PaymobBase. to be extendable.
 * @param {*} secretKey
 * @memberof PaymobBase
 */

export class PaymobBase {
	constructor(secretKey, paymentRefrence) {
		this.secretKey = secretKey;
		this.paymentRefrence = paymentRefrence;
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
			url: this._getFullUrl(this.paymentRefrence),
			body: data ? JSON.stringify(data) : {},
			headers: {
				...applicationJsonHeader(),
				...authHeaderBuilder(this.secretKey)
			}
		};
	}

	_getBasicOptionsForGetRequests() {
		return {
			url: this._getFullUrl(this.paymentRefrence),
			headers: {
				...applicationJsonHeader(),
				...authHeaderBuilder(this.secretKey)
			}
		};
	}
}