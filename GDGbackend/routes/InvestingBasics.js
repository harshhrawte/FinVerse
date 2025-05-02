const express = require("express");
const router = express.Router();

const {getInvestingBasics} = require('../controllers/InvestingController');



router.get("/investing-basics",getInvestingBasics)

module.exports = router;
