import { Intention } from "./intention";
import { paymobLogger } from "./utils";

/**
 * Paymob Node SDK factory
 * @class PaymobFactory
 */

class PaymobFactory {
	/**
	 * Creates an instance of PaymobFactory.
	 * @param {*} secretKey
	 * @memberof PaymobFactory
	 */
	constructor(secretKey) {
		this.secretKey = secretKey;
		this._intention = new Intention(this.secretKey);
		this._initilizeIntentionBuilder();
		paymobLogger(`Paymob Node SDK Initialized with secret Key: ${this.secretKey}`);
	}


	/** @private */
	_initilizeIntentionBuilder() {
		this.Intention = {
			create: (payload) => this._intention.create(payload),
			update: (payload) => this._intention.update(payload),
			patch: (payload) => this._intention.patch(payload),
			delete: (payload) => this._intention.delete(payload),
			retrieve: () => this._intention.retrieve(),
			list: () => this._intention.list(),
		};
	}
}

var Paymob = (secretKey) => new PaymobFactory(secretKey);
export default Paymob;
