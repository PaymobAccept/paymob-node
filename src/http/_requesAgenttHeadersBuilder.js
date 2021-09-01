import { getApiVersion } from "../utils";
const os = require("os");

/**
 * @requesAgenttHeadersBuilder
 * @return {Object}
*/
export const requesAgenttHeadersBuilder = () => {
	/**
	 * user agent header value
	 * @type {String}
	 * @name userAgent
	 * @memberof requesAgenttHeadersBuilder
	 */
	const userAgent = `Paymob Node SDK ${getApiVersion()}`;

	/**
	 * Collect sdk_underlying_sys_info header value
	 * @type {Function}
	 * @name underlyingSysInfoCollector
	 * @memberof requesAgenttHeadersBuilder
	 */
	const underlyingSysInfoCollector = () => {
		const system = os.type();
		const node = JSON.stringify(os.cpus());
		const release = os.release();
		const version = os.version();
		const machine = os.arch();

		const underlyingSysInfo = `(system='${system}', node='${node}', release='${release}', version='${version}', machine='${machine}')`;
		return underlyingSysInfo;
	};

	/**
	 * Collect sdk_underlying_sys_info header value
	 * @type {Object}
	 * @name userAgentObj
	 * @memberof requesAgenttHeadersBuilder
	 */
	const userAgentObj = {
		"sdk_api_version": getApiVersion(),
		"sdk_language": "Node",
		"sdk_authority": "Paymob",
		"sdk_lang_version": process.version,
		"sdk_platform": os.platform(),
		"sdk_request_client": "Node",
		"sdk_underlying_sys_info": underlyingSysInfoCollector()
	};

	/**
	 * reques agentt headers object
	 * @type {Object}
	 * @name requesAgenttHeadersBuilder
	 * @memberof requesAgenttHeadersBuilder
	 */
	const headers = {
		"User-Agent": userAgent,
		"X-Paymob-SDK-Agent": JSON.stringify(userAgentObj)
	};

	return headers;
};