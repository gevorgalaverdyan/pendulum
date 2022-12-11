const asyncHandler = require('express-async-handler');
const Pendulum = require('../models/pendulumModel');

//@desc register pendulum
//@route /api/pendulums
const registerPendulum = asyncHandler(async (req, res) => {
  const { angularOffset, stringLength, xCoordinate } = req.body;

  if (!angularOffset || !stringLength || !xCoordinate) {
    res.status(400);
    throw new Error('Missing fields');
  }

  const pendulum = await Pendulum.create({
    angularOffset,
    stringLength,
    xCoordinate,
  });

  if (pendulum) {
    res.status(201).json({
      _id: pendulum.id,
      angularOffset: pendulum.angularOffset,
      stringLength: pendulum.stringLength,
      xCoordinate: pendulum.xCoordinate,
    });
  } else {
    res.status(400);
    throw new Error('invalid data');
  }
});

//@desc register pendulum
//@route /api/pendulums
const getPendulums = asyncHandler(async (req, res) => {
  const pendulums = await Pendulum.find();

  if (!pendulums) {
    throw new Error('No pendulums in DB');
  }

  const pendulumsList = [];
  pendulums.forEach((x) =>
    pendulumsList.push({
      id: x._id,
      angularOffset: x.angularOffset,
      stringLength: x.stringLength,
      xCoordinate: x.xCoordinate,
    })
  );

  res.status(200).json(pendulumsList);
});

module.exports = { registerPendulum, getPendulums };
