import { getApiVersion } from "../utils";
const os = require("os");

export const requesAgenttHeadersBuilder = () => {
	const userAgent = `Paymob Node SDK ${getApiVersion()}`;
	const userAgentObj = {
		"sdk_api_version": getApiVersion(),
		"sdk_language": "Node",
		"sdk_authority": "Paymob",
		"sdk_lang_version": process.version,
		"sdk_platform": os.platform(),
	};

	const headers = {
		"User-Agent": userAgent,
		...userAgentObj
	};

	return headers;
};