import { PaymobBase } from "../shared";

/**
 * Creates an instance of Refund.
 * @param {*} secretKey
 * @memberof PaymobBase
 */
    
export class Refund extends PaymobBase {
	constructor(secretKey) {
		super(secretKey, "payment-reference/refund");
	}

	/**
	 * create refund.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof Refund
	 */
	create(data) {
		const options = {
			method: "post",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}
}