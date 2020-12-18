const mongoose = require('mongoose');
const payeeSchema = require('../schemas/payeeSchema')

const Payee = mongoose.model("Payee", payeeSchema);


module.exports = Payee;