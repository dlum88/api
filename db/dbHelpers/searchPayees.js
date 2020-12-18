const mongoose = require('../db');
const Payee = require('../models/payeeModel');

const searchPayees = () => {
  return Payee.find().catch(err => console.log(`Unable to query database. Error: ${err}`));
}

module.exports = searchPayees;