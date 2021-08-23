// @ts-nocheck
const {Paymob} = require("../../dist/paymob");

var paymob = Paymob("skt_***");
var intention = paymob.intention();
intention.create({method: "GET"});
// console.log(intention);
// paymob.intention.create({dd: "ss"});
