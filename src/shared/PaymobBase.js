import { applicationJsonHeader, authHeaderBuilder, HTTPRequest } from "../http";
import { getApiBaseUrl, getApiVersion } from "../utils";
const globals = require("../global");

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
		return globals.get("baseUrl") ? globals.get("baseUrl") : getApiBaseUrl();
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

	/**
	 * Create request.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof PaymobBase
	 */
	create(data) {
		const options = {
			method: "post",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	/**
	 * Update request.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof PaymobBase
	 */
	update(data) {
		const options = {
			method: "put",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	/**
	 * Delete request.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof PaymobBase
	 */
	delete(data) {
		const options = {
			method: "delete",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	/**
	 * Patch request.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof PaymobBase
	 */
	patch(data) {
		const options = {
			method: "patch",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

}