import { Intention } from "./intention";

class PaymobFactory {
	constructor(secretKey) {
		this.secretKey = secretKey;
		this._intention = new Intention(this.secretKey);
	} 

	intention() {
		return this._intention;
	}
	
	pay() {
		console.log(this.secretKey);
	}
}

var Paymob = (secretKey) => new PaymobFactory(secretKey);
export default Paymob;
