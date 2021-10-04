import { Intention } from "./intention";
import { Refund } from "./Refund/Refund";
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
		this._refund = new Refund(this.secretKey);
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
			retrieve: (payload) => this._intention.retrieve(payload),
			list: () => this._intention.list(),
		};

		this.Refund = {
			create: (payload) => this._refund.create(payload)
		};
	}
}

var Paymob = (secretKey) => new PaymobFactory(secretKey);
export default Paymob;
