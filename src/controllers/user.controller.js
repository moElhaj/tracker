const {
	getUser,
	getUsers,
	updateUser,
	removeUser,
} = require("../services/user.services");

const get = async (req, res) => {
	const user = await getUser(req.id);
	return res.status(200).send(user);
};

const getAll = async (req, res) => {
	const users = await getUsers();
	return res.status(200).send(users);
};

const update = async (req, res) => {
	const user = await updateUser(req.id, req.body);
	return res.status(200).send(user);
};

const remove = async (req, res) => {
	await removeUser(req.id);
	return res.status(200);
};

module.exports = {
	get,
	getAll,
	update,
	remove,
};
