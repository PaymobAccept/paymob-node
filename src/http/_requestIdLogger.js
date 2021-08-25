import { paymobLogger } from "../utils";

export const requestIdLogger = (requestId) => {
	paymobLogger(`Paymob Request Trace ID: ${requestId}`, "warn");
};