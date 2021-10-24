# Paymob Node SDK

## _The Fast Way To Get Payment Duds Ready, Ever_

[![ForTheBadge powered-by-paymob](./powered-by-paymob.svg)](https://www.paymob.com/)

Paymob Node is a minimal, straightforward and easy way to config payment intention methods, voiding, refunding and more..

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the SDK and start the game.

<!-- @TODO: add the package name at NPM -->

```sh
npm install paymob-node
```

## Setup 
To start using the SDK have to import or include and initialize it with your secrete key.

```js
const { Paymob } = require("paymob-node");
const paymob = Paymob("skl_***");
```

## Intention
Paymob Node offers verity of intention methods like create, retrieve and list. Pay

- Create

```js
const payload = {
	amount: "2000",
	currency: "EGP",
	payment_methods: ["card", "wallets", "card-installment"],
	items: [
		{
			"name": "ASC1515",
			"amount": "1000",
			"description": "Smart Watch",
			"quantity": "1"
		},
		{
			"name": "ERT6565",
			"amount": "1000",
			"description": "Power Bank",
			"quantity": "1"
		}
	],
	billing_data: {
		"apartment": "74",
		"email": "user@mail.com",
		"floor": "42",
		"first_name": "Jhon",
		"street": "Ethan Land",
		"building": "1907",
		"phone_number": "9135210487",
		"shipping_method": "PKG",
		"postal_code": "01898",
		"city": "Jaskolskiburgh",
		"country": "CR",
		"last_name": "Don",
		"state": "Utah",
	},
	customer: { "first_name": "Jhon", "last_name": "Don", "email": "user@mail.com" },
	delivery_needed: false, 	 	
};

app.get("/marketplace/secret/", (req, res) => {
	paymob.Intention.create(payload).then(paymobApiResponse => {
		res.send(paymobApiResponse);
	}).catch(err => {
		res.send(err);	
	});
});

```

- Retrieve

> Note: `reference` is required to be passed in the payload to retrieve.


```js
const payload = {
    reference: "0cc46c79-xxx-xxx-xxxx-xxxxxxxx"
};
	
app.get("/marketplace/retrieve/", (req, res) => {
	paymob.Intention.retrieve(payload).then(paymobApiResponse => {
		res.send(paymobApiResponse);
	}).catch(err => {
		res.send(err);	
	});
});
```

- List

```js
app.get("/marketplace/list/", (req, res) => {
    const payload = {
        reference: "0cc46c79-xxx-xxx-xxxx-xxxxxxxx"
    };

	paymob.Intention.list(payload).then(paymobApiResponse => {
		res.send(paymobApiResponse);
	}).catch(err => {
		res.send(err);	
	});
});
```

## Refund

```js
const payload = {
    payment_reference: "1234567",
    amount_cents:"74"
};
	
app.get("/marketplace/refund/", (req, res) => {
	paymob.Refund.create(payload).then(paymobApiResponse => {
		res.send(paymobApiResponse);
	}).catch(err => {
		res.send(err);	
	});
});
```

## Void

```js
const payload = {
    payment_reference: "1234567",
    amount_cents:"74"
};
	
app.get("/marketplace/void/", (req, res) => {
	paymob.Void.create(payload).then(paymobApiResponse => {
		res.send(paymobApiResponse);
	}).catch(err => {
		res.send(err);	
	});
});
```
