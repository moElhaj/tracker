const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProject = async project => {
	return prisma.Project.create({
		data: project,
	});
};

const getProject = async id => {
	return prisma.Project.findUnique({
		where: { id },
	});
};

const getProjects = async () => {
	return prisma.Project.findMany({
		orderBy: [{ id: "desc" }],
	});
};

const updateProject = async (id, project) => {
	return prisma.Project.update({
		where: { id },
		data: project,
	});
};

const removeProject = async id => {
	return prisma.Project.delete({
		where: { id },
	});
};

module.exports = {
	createProject,
	getProject,
	getProjects,
	updateProject,
	removeProject,
};
