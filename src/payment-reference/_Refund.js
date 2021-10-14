import { PaymobBase } from "../shared";

/**
 * Creates an instance of Refund.
 * @param {*} secretKey
 * @memberof PaymobFactory
 */
    
export class Refund extends PaymobBase {
	constructor(secretKey) {
		super(secretKey, "payment-reference/refund");
	}
}