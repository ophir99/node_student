const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.get("/", (a, b) => {
  b.send({ msg: "We are ready =>" });
});
app.listen(9000, () => {
  console.log("App is runnning");
});
