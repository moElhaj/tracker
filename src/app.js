const path = require("path");
const cors = require("cors");
const xss = require("xss-clean");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const compression = require("compression");
const routes = require("./routes");

const app = express();

app.use(xss());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.use("/images", express.static(path.join(__dirname, "/images")));

// Routing
app.use("/", routes);

module.exports = app;