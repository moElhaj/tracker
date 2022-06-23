const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const config = {
	env: process.env.NODE_ENV,
	port: process.env.PORT,
	databse: process.env.DATABASE_URL,
	secret: process.env.SECRET,
};

module.exports = config;
