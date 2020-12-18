var express = require('express');
const { search } = require('../app');
var router = express.Router();
const searchPayees = require('../db/dbHelpers/searchPayees');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const searchedPayees = await searchPayees();
  res.json(searchedPayees);
});

module.exports = router;
