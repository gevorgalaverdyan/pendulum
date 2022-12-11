const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8080;
const errorHandler = require("./middleware/errorMiddleware");
const path = require("path");
const { getPendulums } = require("./controllers/pendulumController");
connectDB();

const app = express();

app.use(express.static("views"));
app.use("/styles", express.static(__dirname + "views/styles"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("../views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

//send data here
app.get("/simulation", (req, res) => {
  res.render("index");
});

app.use("/api/pendulums", require("./routes/pendulumRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

////////////////////////

//send requests from here

app.get("/", (req, res) => {
  res.render("config");
});

