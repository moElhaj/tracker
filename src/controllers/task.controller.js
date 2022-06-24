const {
	getTask,
	getTasks,
	createTask,
	updateTask,
	removeTask,
} = require("../services/task.services");

const get = async (req, res) => {
	const task = await getTask(req.id);
	return res.status(200).send(task);
};

const getAll = async (req, res) => {
	const tasks = await getTasks();
	return res.status(200).send(tasks);
};

const create = async (req, res) => {
	const task = await createTask(req.body);
	return res.status(200).send(task);
};

const update = async (req, res) => {
	const task = await updateTask(req.id, req.body);
	return res.status(200).send(task);
};

const remove = async (req, res) => {
	await removeTask(req.id);
	return res.status(200);
};

module.exports = {
	get,
	getAll,
	create,
	update,
	remove,
};
