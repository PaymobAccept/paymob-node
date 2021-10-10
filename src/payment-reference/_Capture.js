import { PaymobBase } from "../shared";

/**
 * Creates an instance of Capture.
 * @param {*} secretKey
 * @memberof PaymobFactory
 */
    
export class Capture extends PaymobBase {
	constructor(secretKey) {
		super(secretKey, "payment-reference/capture");
	}
}