import {
	authHeaderBuilder,
	HTTPRequest,
	applicationJsonHeader
} from "../http";
import { getApiBaseUrl, getApiVersion } from "../utils";

/**
 * Intention operations (create, update, patch, delete, retrieve, list)
 * @class Intention
 */
export class Intention {
	/**
	 * Creates an instance of Intention.
	 * @param {*} secretKey
	 * @memberof PaymobFactory
	 */
	constructor(secretKey) {
		this.secretKey = secretKey;
		this.request = new HTTPRequest(this.secretKey);
	}

	/** @private */
	_getApiBaseUrl() {
		return getApiBaseUrl();
	}

	/** @private */
	_getApiVersion() {
		return getApiVersion();
	}

	/** @private */
	_getFullUrl(route) {
		const url = `${this._getApiBaseUrl()}/${this._getApiVersion()}/${route}/`;
		return url;
	}

	/** @private */
	_getBasicOptions(data) {
		return {
			url: this._getFullUrl("intention"),
			body: data ? JSON.stringify(data) : {},
			headers: {
				...applicationJsonHeader(),
				...authHeaderBuilder(this.secretKey)
			}
		};
	}

	/** @private */
	_getBasicOptionsForGetRequests() {
		return {
			url: this._getFullUrl("intention"),
			headers: {
				...applicationJsonHeader(),
				...authHeaderBuilder(this.secretKey)
			}
		};
	}

	/**
	 * create intention.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof Intention
	 */
	create(data) {
		const options = {
			method: "post",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	/**
	 * update intention.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof Intention
	 */
	update(data) {
		const options = {
			method: "put",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	/**
	 * patch intention.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof Intention
	 */
	patch(data) {
		const options = {
			method: "patch",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	/**
	 * delete intention.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof Intention
	 */
	delete(data) {
		const options = {
			method: "delete",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	/**
	 * retrieve intention.
	 * @return {Promise} 
	 * @memberof Intention
	 */
	retrieve() {
		const options = {
			method: "get",
			...this._getBasicOptionsForGetRequests()
		};
		return this.request.request(options);
	}

	/**
	 * list intention.
	 * @return {Promise} 
	 * @memberof Intention
	 */
	list() {
		const options = {
			method: "get",
			...this._getBasicOptionsForGetRequests()
		};
		return this.request.request(options);
	}
}