const express = require('express');
const router = express.Router();
const {
  registerPendulum,
  getPendulums,
  deletePendulums,
  updatePendulums,
} = require('../controllers/pendulumController');

router.post('/', registerPendulum);

router.get('/', getPendulums);

router.delete('/', deletePendulums);

router.put('/', updatePendulums);

module.exports = router;
