const asyncHandler = require("express-async-handler");
const Pendulum = require("../models/pendulumModel");

//@desc register pendulum
//@route /api/pendulums
const registerPendulum = asyncHandler(async (req, res) => {
  const { angularOffset, stringLength, xCoordinate } = req.body;

  if (!angularOffset || !stringLength || !xCoordinate) {
    res.status(400);
    throw new Error("Missing fields");
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
    throw new Error("invalid data");
  }
});

module.exports = registerPendulum;
