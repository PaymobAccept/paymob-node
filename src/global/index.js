
/**
 * globals module that acts like a state store for the project.
 */
const globals = {
	baseUrl: {
		value: ""
	},
	// example for a protected one.
	appKey: {
		value: "paymob",
		protected: true
	},
	// @TODO: Use this module for future configs from the merchant...
};

/**
 * get from the store return variable or false if not exists.
 * @param {*} global
 * @memberof global
 * @return {void | boolean}
 */
exports.get = function (global) {
	return globals[global] && globals[global].value ? globals[global].value : false;
};

/**
 * set to the store, if exists and is protected: return false.
 * @param {*} global
 * @memberof global
 * @return {boolean}
 */
exports.set = function (global, value) {
	if (globals[global] && globals[global].protected && globals[global].protected === true) {
		return false;
	} else {
		globals[global] = { value: value };
		return true;
	}
};