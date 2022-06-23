import jwt from "jsonwebtoken";
import config from "./config";

interface Secret {
	secret: string;
}

const { secret } = <Secret>config;

async function signToken(email: string) {
	return jwt.sign({ email }, secret, { expiresIn: "1h" });
}

async function verifyToken(token: string) {
	return jwt.verify(token, secret);
}

module.exports = { signToken, verifyToken };
