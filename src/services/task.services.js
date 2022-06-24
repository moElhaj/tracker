const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTask = async task => {
	return prisma.Task.create({
		data: task,
	});
};

const getTask = async id => {
	return prisma.Task.findUnique({
		where: { id },
	});
};

const getTasks = async () => {
	return prisma.Task.findMany({
		orderBy: [{ id: "desc" }],
	});
};

const updateTask = async (id, task) => {
	return prisma.Task.update({
		where: { id },
		data: task,
	});
};

const removeTask = async id => {
	return prisma.Task.delete({
		where: { id },
	});
};

module.exports = {
	createTask,
	getTask,
	getTasks,
	updateTask,
	removeTask,
};
