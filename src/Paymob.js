import { Intention } from "./intention";
import { Capture, Refund, Void } from "./payment-reference";
import { PayToken } from "./pay-token";
import { paymobLogger } from "./utils";

const globals = require("./global");

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
	constructor(secretKey, options) {
		this.secretKey = secretKey;
		this.options = options;
		this._intention = new Intention(this.secretKey);
		this._refund = new Refund(this.secretKey);
		this._void = new Void(this.secretKey);
		this._capture = new Capture(this.secretKey);
		this._payToken = new PayToken(this.secretKey);
		this._initilizeIntentionBuilder();
		this._config(options);
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

		this.Void = {
			create: (payload) => this._void.create(payload)
		};

		this.Capture = {
			create: (payload) => this._capture.create(payload)
		};

		this.PayToken = {
			create: (payload) => this._payToken.create(payload)
		};
	}

	/**
	 * add user config to the global config object.
	 * @param {Object} options
	 * @return {void} 
	 * @memberof PaymobFactory
	 */
	_config(options) {
		if (typeof options === "object") {
			for (const key in options) {
				if (Object.hasOwnProperty.call(options, key)) {
					const element = options[key];
					if (globals.has(key)) {
						globals.set([key], element);
					}
				}
			}
		} else {
			paymobLogger("Invalid configuration object");
			Promise.resolve("Invalid configuration object");
		}
	}
}

var Paymob = (secretKey, options) => new PaymobFactory(secretKey, options);
export default Paymob;
