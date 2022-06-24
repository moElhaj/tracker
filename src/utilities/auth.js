const jwt = require("jsonwebtoken");
const use = require("./use");
const { secret } = require("./config");

const auth = use(async (req, res, next) => {
	if (!req.header("Authorization")) return res.status(401).send("Access denied");
	const token = req.header("Authorization").replace("Bearer ", "");
	const decoded = jwt.verify(token, secret);
	const { id, role, email } = decoded;
	req.userId = id;
	req.userRole = role;
	req.email = email;
	next();
});

module.exports = auth;
