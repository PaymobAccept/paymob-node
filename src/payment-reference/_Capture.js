import { PaymobBase } from "../shared";

/**
 * Creates an instance of Capture.
 * @param {*} secretKey
 * @memberof PaymobBase
 */
    
export class Capture extends PaymobBase {
	constructor(secretKey) {
		super(secretKey, "payment-reference/capture");
	}

	/**
	 * create Capture.
	 * @param {Object} data
	 * @return {Promise} 
	 * @memberof Capture
	 */
	create(data) {
		const options = {
			method: "post",
			...this._getBasicOptions(data)
		};
		return this.request.request(options);
	}
}