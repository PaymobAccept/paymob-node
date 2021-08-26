import { paymobLogger } from "../utils";

/**
 * request trace id logger 
 * @name requestIdLogger
 * @param {String} requestId
 * @return {*}
*/

export const requestIdLogger = (requestId) => {
	paymobLogger(`Paymob Request Trace ID: ${requestId}`, "warn");
};