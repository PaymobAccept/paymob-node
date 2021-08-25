// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const { Paymob } = require("../../dist/paymob");
const paymob = Paymob("skt_a67ba5b0a9cfb19e37a685f9216ebf456ddc63aa9706d21c370571269689191b");
const intention = paymob.intention();

const payload = {
	amount: "100",
	currency: "EGP",
	payment_methods: ["card", "kiosk", "wallets", "valu"],
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
	intention.create(payload).then(nextApiResponse => {
		res.send(nextApiResponse);
	}).catch(err => {
		res.send(err);	
	});
});

const port = 4200;

app.listen(port, () => {
	console.log(`Paymob marketplace listening at http://localhost:${port}`);
});