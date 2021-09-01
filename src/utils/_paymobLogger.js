/**
 * paymob logger util
 * @param {string} msg
 * @param {string} [level='log']
 * @name paymobLogger
 * @return {*}
*/
export const paymobLogger = (msg, level) => {
	const allowed = ["log", "info", "warn", "error"];
	const fontColor = "\x1b[37m"; // White
	const palette = {
		log: "\x1b[42m",
		info: "\x1b[44m",
		warn: "\x1b[43m",
		error: "\x1b[41m"
	};
	
	if (allowed.includes(level)) {
		console[level](palette[level], fontColor,msg);
	} else {
		console.log(palette["log"], fontColor, msg);
	}
};