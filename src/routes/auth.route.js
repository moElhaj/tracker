const Router = require("express").Router;
const use = require("../utilities/use");
const controller = require("../controllers/auth.controller");

const router = Router();

router.post("/login", use(controller.login));
router.post("/register", use(controller.register));
router.get("/verify", use(controller.verify));

module.exports = router;