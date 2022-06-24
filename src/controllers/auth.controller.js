const jwt = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");
const { secret } = require("../utilities/config");
const { createUser, getUser } = require("../services/user.services");

const login = async (req, res) => {
	const user = await getUser(req.body.email);
	if (!user || !(await compare(user.password, req.body.password)))
		return res.status(400).send("Wrong Credentials");
	const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, secret, { expiresIn: "8h" });
	return res.status(200).send(token, user);
};

const register = async (req, res) => {
	let user = getUser(req.body.email);
	if(user) return res.status(400).send("Account Taken");
	req.body.password = await hash(req.body.password, 12);
	user = await createUser(req.body);
	const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, secret, { expiresIn: "8h" });
	return res.status(200).send(token, user);
};

const verify = async (req, res) => {
	if (!req.header("Authorization")) return res.status(401).send("Missing Token");
	const token = req.header("Authorization").replace("Bearer ", "");
	const decoded = jwt.verify(token, secret);
	const { email } = decoded;
	const user = await getUser(email);
	return res.status(200).json({ token, user });
};

module.exports = {
	login,
	register,
	verify,
};
