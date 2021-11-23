import { PaymobBase } from "../shared/PaymobBase";

/**
 * Customer operations (create, update, patch, delete, retrieve, list)
 * @class Customer
 */
export default class Customer extends PaymobBase {
	/**
	 * Creates an instance of Customer.
	 * @param {*} secretKey
	 * @memberof PaymobFactory
	 */
	constructor(secretKey) {
		super(secretKey, "customer");
		this.secretKey = secretKey;
	}

	/**
	 * retrieve customer.
	 * @return {Promise} 
	 * @memberof Customer
	 */
	retrieve(payload) {
		if(!payload || !payload.id) {
			return Promise.reject("Customer id is required");
		}

		const options = {
			method: "get",
			...this._getBasicOptionsForGetRequests(),
			url: `${this._getFullUrl("customer")}${payload.id}`
		};
		return this.request.request(options);
	}

	/**
	 * list customers.
	 * @return {Promise} 
	 * @memberof Customer
	 */
	list() {
		const options = {
			method: "get",
			...this._getBasicOptionsForGetRequests()
		};
		return this.request.request(options);
	}
}