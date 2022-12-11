const { default: mongoose } = require('mongoose');

const pendulumSchema = mongoose.Schema(
  {
    angularOffset: {
      type: Number,
      required: [true, 'Please add angularOffset'],
    },
    stringLength: {
      type: Number,
      required: [true, 'Please add stringLength'],
    },
    xCoordinate: {
      type: Number,
      required: [true, 'Please add xCoordinate'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pendulum', pendulumSchema);
