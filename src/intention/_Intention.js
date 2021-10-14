import { PaymobBase } from "../shared/PaymobBase";

/**
 * Intention operations (create, update, patch, delete, retrieve, list)
 * @class Intention
 */
export class Intention extends PaymobBase {
	/**
	 * Creates an instance of Intention.
	 * @param {*} secretKey
	 * @memberof PaymobFactory
	 */
	constructor(secretKey) {
		super(secretKey, "intention");
		this.secretKey = secretKey;
	}

	/**
	 * retrieve intention.
	 * @return {Promise} 
	 * @memberof Intention
	 */
	retrieve(payload) {
		if(!payload || !payload.reference) {
			return Promise.reject("Reference is required");
		}

		const options = {
			method: "get",
			...this._getBasicOptionsForGetRequests(),
			url: `${this._getFullUrl("intention")}${payload.reference}`
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