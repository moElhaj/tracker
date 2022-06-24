const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async user => {
	return prisma.User.create({
		data: user,
	});
};

const getUser = async id => {
	return prisma.User.findUnique({
		where: { id },
	});
};

const getUsers = async () => {
	return prisma.User.findMany({
		orderBy: [{ id: "desc" }],
	});
};

const updateUser = async (id, user) => {
	return prisma.User.update({
		where: { id },
		data: user,
	});
};

const removeUser = async id => {
	return prisma.User.delete({
		where: { id },
	});
};

module.exports = {
	createUser,
	getUser,
	getUsers,
	updateUser,
	removeUser,
};
