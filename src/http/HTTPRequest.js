export class HTTPRequest {
	constructor(sk) {
		this.sk = sk;
		console.log("SK FROM INSIDE HTTPRequest constructor()", sk);
	}

	request(args) {
		console.log("Okay, i got the call from Intention class and Will Make Http Request Using:", args);
	}
}