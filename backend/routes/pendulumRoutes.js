const express = require('express');
const router = express.Router();
const {
  registerPendulum,
  getPendulums,
  deletePendulums,
} = require('../controllers/pendulumController');

router.post('/', registerPendulum);

router.get('/', getPendulums);

router.delete('/', deletePendulums);

module.exports = router;
