// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const { Paymob } = require("../../dist/paymob");
const paymob = Paymob("skl_eb7e7ac5117dcd6c0b7539a635f61764aca615bd3b63051606b845c30db3bff8");

const payload = {
	amount: "100",
	currency: "EGP",
	payment_methods: ["card", "kiosk"],
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
		"phone_number": "9135210487",
		"shipping_method": "PKG",
		"postal_code": "01898",
		"city": "Jaskolskiburgh",
		"country": "CR",
		"last_name": "Nicolas",
		"state": "Utah",
	},
	customer: { "first_name": "misrax", "last_name": "misrax", "email": "misrax@misrax.com" },
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
	paymob.Intention.retrieve({reference: "0cc46c79-e377-4c43-91c4-95f7a2fca151" }).then(nextApiResponse => {
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
		amount_cents:"300"
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
		amount_cents:"300"
	};
	
	paymob.Capture.create(payload).then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);	
	});
});

const port = 4200;

app.listen(port, () => {
	console.log(`Paymob marketplace listening at http://localhost:${port}`);
});