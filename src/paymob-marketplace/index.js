// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const { Paymob } = require("../../dist/paymob");
const paymob = Paymob("skl_51bf49f38681a7d859fbb7a48d43df747877e66e906a1851efad3c8f427c1082", {
	// add your own API chattels.
	baseUrl: "https://flashapi.paymob.com",
	// apiVersion: "v8",
});

const payload = {
	amount: "100",
	currency: "EGP",
	payment_methods: ["card", "card-moto", "kiosk"],
	items: [
		{
			"name": "ASC1515",
			"amount": "50",
			"description": "Smart Watch",
			"quantity": "1"
		},
		{
			"name": "ERT6565",
			"amount": "50",
			"description": "Power Bank",
			"quantity": "1"
		}
	],
	billing_data: {
		"apartment": "803",
		"email": "claudette09@exa.com",
		"floor": "42",
		"first_name": "Clifford",
		"street": "Ethan Land",
		"building": "8028",
		"phone_number": "+201010101010",
		"shipping_method": "PKG",
		"postal_code": "01898",
		"city": "Jaskolskiburgh",
		"country": "CR",
		"last_name": "Nicolas",
		"state": "Utah",
	},
	customer: {
		"first_name": "youssef", "last_name": "tarek", "email": "youssef@tarek.com","phone_number":"+201010101010",
		"extras":{
			"surname":"Abdelsattar"
		}
	
	},
	delivery_needed: false,
};

app.get("/marketplace/secret/", (req, res) => {
	paymob.Intention.create(payload).then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);
	});
});

app.get("/marketplace/retrieve/", (req, res) => {
	paymob.Intention.retrieve({ reference: "0cc46c79-e377-4c43-91c4-95f7a2fca151" }).then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);
	});
});

app.get("/marketplace/list/", (req, res) => {
	paymob.Intention.list().then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);
	});
});

app.get("/marketplace/refund/", (req, res) => {
	const payload = {
		payment_reference: "14394788",
		amount_cents: "300"
	};

	paymob.Refund.create(payload).then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);
	});
});

app.get("/marketplace/void/", (req, res) => {
	const payload = { payment_reference: "14394788" };

	paymob.Void.create(payload).then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);
	});
});

app.get("/marketplace/capture/", (req, res) => {
	const payload = {
		payment_reference: "14394788",
		amount_cents: "300"
	};

	paymob.Capture.create(payload).then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);
	});
});

app.get("/marketplace/paytoken/", (req, res) => {
	const payload = {
		client_secret: "ckl_db84b8aef48471d994b595542991bc7f",
		token_id: "123456",
		token: "e29ac6d6676da32f28c7fe5a1a111694978f14ea686915f42fa53e93",
		customer_id: "baaba246-895c-4dfd-877b-c1ae10069188",
		method: "card-moto",
		payment_method_id: 1599970
	};

	paymob.PayToken.create(payload).then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);
	});
});

app.get("/marketplace/customer-details/", (req, res) => {
	paymob.Customer.retrieve({ id: "c26e2788-d367-4789-9b68-c431943b1d9a" }).then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);
	});
});

app.get("/marketplace/customer-list/", (req, res) => {
	paymob.Customer.list().then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);
	});
});

const port = 4200;

app.listen(port, () => {
	console.log(`Paymob marketplace listening at http://localhost:${port}`);
});