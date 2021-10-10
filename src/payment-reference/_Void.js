import { PaymobBase } from "../shared";

/**
 * Creates an instance of Void.
 * @param {*} secretKey
 * @memberof PaymobFactory
 */
    
export class Void extends PaymobBase {
	constructor(secretKey) {
		super(secretKey, "payment-reference/void");
	}
}