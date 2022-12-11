const express = require('express');
const router = express.Router();
const {
  registerPendulum,
  getPendulums,
} = require('../controllers/pendulumController');

router.post('/', registerPendulum);

router.get('/', getPendulums);

module.exports = router;
