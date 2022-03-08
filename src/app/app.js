const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const ExpressSession = require("express-session");

const routes = require("./routes/routes.js");
const path = require("path");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.engine("ejs", require("ejs").renderFile);
    this.app.set("view engine", "ejs");
    this.app.set("views", path.join(__dirname, "../views/pages"));
    this.app.use(express.static(path.join(__dirname, "../views/public")));
    this.app.use(morgan("dev"));
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.header("Access-Control-Allow-Headers","Access, Content-Type, Authorization, Acept, Origin, X-Requested-With");

      this.app.use(cors())
      next();
    });
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().app;