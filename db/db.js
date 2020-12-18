const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Connect to DB
mongoose.connect(process.env.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log("Connected to DB!"))
  .catch(err => console.log("Unable to connect to DB. Error: ", err));

module.exports = mongoose;