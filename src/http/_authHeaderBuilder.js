/**
 * @authHeaderBuilder
 * @param {*} secretKey
 * @return {Object}
*/

export const authHeaderBuilder = (secretKey) => ({
	"Authorization": `token ${secretKey}`
});