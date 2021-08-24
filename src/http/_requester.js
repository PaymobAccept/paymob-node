import fetch from "node-fetch";

export const requester = async (url, options) => {
	return new Promise(function (resolve, reject) {
		const callback = async () => {
			try {
				const response = await fetch(url, options);
				const data = await response.json();
				console.log(data);
				resolve(data);
			} catch (error) {
				console.error(error);
				reject(error);
			}
		};
		callback();
	});
};