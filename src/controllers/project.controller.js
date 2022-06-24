const {
	getProject,
	getProjects,
	createProject,
	updateProject,
	removeProject,
} = require("../services/project.services");

const get = async (req, res) => {
	const project = await getProject(req.id);
	return res.status(200).send(project);
};

const getAll = async (req, res) => {
	const projects = await getProjects();
	return res.status(200).send(projects);
};

const create = async (req, res) => {
	const project = await createProject(req.body);
	return res.status(200).send(project);
};

const update = async (req, res) => {
	const project = await updateProject(req.id, req.body);
	return res.status(200).send(project);
};

const remove = async (req, res) => {
	await removeProject(req.id);
	return res.status(200);
};

module.exports = {
	get,
	getAll,
	create,
	update,
	remove,
};
