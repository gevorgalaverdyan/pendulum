const express = require("express");
const router = express.Router();
const registerPendulum = require('../controllers/pendulumController')

router.post("/", registerPendulum);

module.exports = router;
