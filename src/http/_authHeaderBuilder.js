export const authHeaderBuilder = (sk) => ({
	"Authorization": `token ${sk}`
});