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
			body: data ? JSON.stringify(data) : {},
			headers: {
				...applicationJsonHeader(),
				...authHeaderBuilder(this.secretKey)
			}
		};
	}

	_getBasicOptionsForGetRequests() {
		return {
			url: this._getFullUrl("intention"),
			headers: {
				...applicationJsonHeader(),
				...authHeaderBuilder(this.secretKey)
			}
		};
	}

	create(data) {
		const options = {
			method: "post",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	update(data) {
		const options = {
			method: "put",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	patch(data) {
		const options = {
			method: "patch",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	delete(data) {
		const options = {
			method: "delete",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}

	retrieve() {
		const options = {
			method: "get",
			...this._getBasicOptionsForGetRequests()
		};
		return this.request.request(options);
	}

	list() {
		const options = {
			method: "get",
			...this._getBasicOptionsForGetRequests()
		};
		return this.request.request(options);
	}
}