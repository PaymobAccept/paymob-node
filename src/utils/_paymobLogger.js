export const paymobLogger = (msg, level) => {
	const allowed = ["log", "info", "warn", "error"];

	// @TODO: Colorize logs natively or by package
	// eslint-disable-next-line no-unused-vars
	const palette = {};
	
	if (allowed.includes(level)) {
		console[level](msg);
	} else {
		console.log(msg);
	}
};