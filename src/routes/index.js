const path = require("path");
const Router = require("express").Router;
const auth = require("./auth.route.js");
const user = require("./user.route.js");
const task = require("./task.route.js");
const item = require("./item.route.js");
const project = require("./project.route.js");

const router = Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/task", task);
router.use("/item", item);
router.use("/project", project);
router.get("*", (req, res) => res.sendFile(path.resolve("public/index.html")));

module.exports = router;
