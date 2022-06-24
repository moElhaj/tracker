const {
	getItem,
	getItems,
	createItem,
	updateItem,
	removeItem,
} = require("../services/item.services");

const get = async (req, res) => {
	const item = await getItem(req.id);
	return res.status(200).send(item);
};

const getAll = async (req, res) => {
	const items = await getItems();
	return res.status(200).send(items);
};

const create = async (req, res) => {
	const item = await createItem(req.body);
	return res.status(200).send(item);
};

const update = async (req, res) => {
	const item = await updateItem(req.id, req.body);
	return res.status(200).send(item);
};

const remove = async (req, res) => {
	await removeItem(req.id);
	return res.status(200);
};

module.exports = {
	get,
	getAll,
	create,
	update,
	remove,
};
