const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8080;
const errorHandler = require("./middleware/errorMiddleware");
const path = require("path");
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("../views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const time = new Date();
  res.render('index', {time: time})
});

app.use("/api/pendulums", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

