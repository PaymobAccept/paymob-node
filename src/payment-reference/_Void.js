import { PaymobBase } from "../shared";

/**
 * Creates an instance of Void.
 * @param {*} secretKey
 * @memberof PaymobBase
 */
    
export class Void extends PaymobBase {
	constructor(secretKey) {
		super(secretKey, "payment-reference/void");
	}

	/**
	 * create Void.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof Void
	 */
	create(data) {
		const options = {
			method: "post",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}
}