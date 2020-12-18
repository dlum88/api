const mongoose = require('mongoose');

const payeeSchema = new mongoose.Schema({
  Payee: {
    Name: String,
    Fax: String,
    Phone: String,
    Address: {
      Address1: String,
      Address2: String,
      City: String,
      StateOrProvince: String,
      Country: String,
      PostalCode: Number
    },
    Attention: String,
    SubmissionDate: String
  },
  Payment: {
    PAN: Number,
    CVV: Number,
    Exp: String
  },
  Remittance: [
    {
      PayorName: String,
      PayorId: Number,
      InvoiceNo: Number,
      Description: String,
      Amount: String
    }
  ]
});

module.exports = payeeSchema;