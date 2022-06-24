const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createItem = async item => {
	return prisma.Item.create({
		data: item,
	});
};

const getItem = async id => {
	return prisma.Item.findUnique({
		where: { id },
	});
};

const getItems = async () => {
	return prisma.Item.findMany({
		orderBy: [{ id: "desc" }],
	});
};

const updateItem = async (id, item) => {
	return prisma.Item.update({
		where: { id },
		data: item,
	});
};

const removeItem = async id => {
	return prisma.Item.delete({
		where: { id },
	});
};

module.exports = {
	createItem,
	getItem,
	getItems,
	updateItem,
	removeItem,
};
