import { HTTPRequest } from "../http/HTTPRequest";

export class Intention {
	constructor(sk) {
		this.sk = sk;
		this.request = new HTTPRequest(this.sk);
		console.log("SK FROM INSIDE Intention constructor()", sk);

	}


	create(args) {
		console.log("Calling HTTPRequest create from INSIDE Intention Class");
		console.log("Intention.create() args", args);
		this.request.request(args);
	}
}