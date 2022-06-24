const Router = require("express").Router;
const use = require("../utilities/use");
const auth = require("../utilities/auth");
const parse = require("../utilities/parser");
const controller = require("../controllers/task.controller");

const router = Router();

router.get("/", auth, use(controller.getAll));
router.get("/:id", auth, use(controller.get));
router.post("/", auth, parse("task"), use(controller.create));
router.put("/:id", auth, parse("task"), use(controller.update));
router.delete("/:id", auth, use(controller.remove));

module.exports = router;
