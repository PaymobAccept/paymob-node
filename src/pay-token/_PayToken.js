import { PaymobBase } from "../shared";

/**
 * Creates an instance of PayToken.
 * @param {*} secretKey
 * @memberof PaymobFactory
 */
    
export class PayToken extends PaymobBase {
	constructor(secretKey) {
		super(secretKey, "intention/confirm-moto");
	}

	/**
	 * Create PayToken request.
	 * @param {Object} payload
	 * @return {Promise} 
	 * @memberof PaymobBase
	 */
	// @ts-ignore
	create(payload) {
		let error = [];

		if(!payload || Object.keys(payload).length === 0) {
			error.push({
				"body": "Pay token data is required"
			});
		}

		if(!payload.client_secret) {
			error.push({
				"client_secret": "This field is required"
			});
		}
		
		if(!payload.token) {
			error.push({
				"token": "This field is required"
			});
		}
				
		if(!payload.customer_id) {
			error.push({
				"customer_id": "This field is required"
			});
		}
				
		if(!payload.method) {
			error.push({
				"method": "This field is required"
			});
		}
		
		if(error.length) {
			error.push({
				"details": "Some parameters missed."
			});
			return Promise.reject({error});
		}

		const options = {
			method: "post",
			...this._getBasicOptions(payload)
		};

		return this.request.request(options);
	}
}