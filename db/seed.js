const mongoose = require('./db');
const payeeData = require('../payeeData.json');
const Payee = require('./models/payeeModel');



payeeData.forEach(p => {
  const payee = new Payee({
    Payee: {
      Name: p.Payee.Name,
      Fax: p.Payee.Fax,
      Phone: p.Payee.Phone,
      Address: {
        Address1: p.Payee.Address.Address1,
        Address2: p.Payee.Address.Address2,
        City: p.Payee.Address.City,
        StateOrProvince: p.Payee.Address.StateOrProvince,
        Country: p.Payee.Address.Country,
        PostalCode: p.Payee.Address.PostalCode
      },
      Attention: p.Payee.Attention,
      SubmissionDate: p.Payee.SubmissionDate
    },
    Payment: {
      PAN: p.Payment.PAN,
      CVV: p.Payment.CVV,
      Exp: p.Payment.Exp
    },
    Remittance: p.Remittance.map(r => {
      return {
        PayorName: r.PayorName,
        PayorId: r.PayorId,
        InvoiceNo: r.InvoiceNo,
        Description: r.Description,
        Amount: r.Amount
      }
    })
  })

  payee.save()
  .then(res => console.log('Sucessfully saved entry'))
  .catch(err => console.log('Error in saving to DB', err));
})