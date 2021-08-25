import { Intention } from "./intention";
import { paymobLogger } from "./utils";

class PaymobFactory {
	constructor(secretKey) {
		this.secretKey = secretKey;
		this._intention = new Intention(this.secretKey);
		paymobLogger(`Paymob Node SDK Initialized with secret Key: ${this.secretKey}`);
	}

	intention() {
		return this._intention;
	}
}

var Paymob = (secretKey) => new PaymobFactory(secretKey);
export default Paymob;
