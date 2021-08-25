import { getApiVersion } from "../utils";
const os = require("os");

export const requesAgenttHeadersBuilder = () => {
	const userAgent = `Paymob Node SDK ${getApiVersion()}`;
	const underlyingSysInfoCollector = () => {
		const system = os.type();
		const node = JSON.stringify(os.cpus());
		const release = os.release();
		const version = os.version();
		const machine = os.arch();

		const underlyingSysInfo = `(system='${system}', node='${node}', release='${release}', version='${version}', machine='${machine}')`;
		return underlyingSysInfo;
	};

	const userAgentObj = {
		"sdk_api_version": getApiVersion(),
		"sdk_language": "Node",
		"sdk_authority": "Paymob",
		"sdk_lang_version": process.version,
		"sdk_platform": os.platform(),
		"sdk_request_client": "Node",
		"sdk_underlying_sys_info": underlyingSysInfoCollector()
	};

	const headers = {
		"User-Agent": userAgent,
		"X-Paymob-SDK-Agent": JSON.stringify(userAgentObj)
	};

	return headers;
};