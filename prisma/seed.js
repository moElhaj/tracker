// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// const vehiclesData = [
// 	{
// 		vehicleModel: "سبورتاج",
// 		vehicleCompany: "كيا",
// 		manufactureDate: 2017,
// 		plateNumber: 1234567,
// 		rentalCompany: "النصر",
// 		contractNumber: 312,
// 		contractDuration: 2,
// 		durationMetric: "سنة",
// 		contractEndDate: new Date("2024-01-01"),
// 		monthlyRentalAmount: "2000",
// 		fuelAllowances: "100",
// 		washingAllowances: "100",
// 		assignmentType: "تخصيص مؤقت",
// 		licenseExpDate: new Date("2023-01-01"),
// 		insuranceExpDate: new Date("2023-01-01"),
// 	},
// 	{
// 		vehicleModel: "اكسنت",
// 		vehicleCompany: "هيونداي",
// 		manufactureDate: 2017,
// 		plateNumber: 87654,
// 		rentalCompany: "الامارات",
// 		contractNumber: 312,
// 		contractDuration: 2,
// 		durationMetric: "سنة",
// 		contractEndDate: new Date("2024-01-01"),
// 		monthlyRentalAmount: "2000",
// 		fuelAllowances: "100",
// 		washingAllowances: "100",
// 		assignmentType: "تخصيص مؤقت",
// 		licenseExpDate: new Date("2023-01-01"),
// 		insuranceExpDate: new Date("2023-01-01"),
// 	},
// 	{
// 		vehicleModel: "كامري",
// 		vehicleCompany: "تويوتا",
// 		manufactureDate: 2022,
// 		plateNumber: 1423465,
// 		rentalCompany: "الامارات",
// 		contractNumber: 312,
// 		contractDuration: 4,
// 		durationMetric: "سنة",
// 		contractEndDate: new Date("2024-01-01"),
// 		monthlyRentalAmount: "2000",
// 		fuelAllowances: "100",
// 		washingAllowances: "100",
// 		assignmentType: "تخصيص مؤقت",
// 		licenseExpDate: new Date("2023-01-01"),
// 		insuranceExpDate: new Date("2023-01-01"),
// 	},
// 	{
// 		vehicleModel: "سيفيك",
// 		vehicleCompany: "هوندا",
// 		manufactureDate: 2022,
// 		plateNumber: 7777645,
// 		rentalCompany: "النصر",
// 		contractNumber: 312,
// 		contractDuration: 2,
// 		durationMetric: "سنة",
// 		contractEndDate: new Date("2024-01-01"),
// 		monthlyRentalAmount: "2000",
// 		fuelAllowances: "100",
// 		washingAllowances: "100",
// 		assignmentType: "تخصيص مؤقت",
// 		licenseExpDate: new Date("2023-01-01"),
// 		insuranceExpDate: new Date("2023-01-01"),
// 	},
// 	{
// 		vehicleModel: "ستي",
// 		vehicleCompany: "هوندا",
// 		manufactureDate: 2022,
// 		plateNumber: 7777642,
// 		rentalCompany: "النصر",
// 		contractNumber: 312,
// 		contractDuration: 2,
// 		durationMetric: "سنة",
// 		contractEndDate: new Date("2024-01-01"),
// 		monthlyRentalAmount: "2000",
// 		fuelAllowances: "100",
// 		washingAllowances: "100",
// 		assignmentType: "تخصيص مؤقت",
// 		licenseExpDate: new Date("2023-01-01"),
// 		insuranceExpDate: new Date("2023-01-01"),
// 	},
// 	{
// 		vehicleModel: "ستي",
// 		vehicleCompany: "هوندا",
// 		manufactureDate: 2022,
// 		plateNumber: 465738,
// 		rentalCompany: "النصر",
// 		contractNumber: 312,
// 		contractDuration: 2,
// 		durationMetric: "سنة",
// 		contractEndDate: new Date("2024-01-01"),
// 		monthlyRentalAmount: "2000",
// 		fuelAllowances: "100",
// 		washingAllowances: "100",
// 		assignmentType: "تخصيص مؤقت",
// 		licenseExpDate: new Date("2023-01-01"),
// 		insuranceExpDate: new Date("2023-01-01"),
// 	},
// 	{
// 		vehicleModel: "باترول",
// 		vehicleCompany: "نيسان",
// 		manufactureDate: 2022,
// 		plateNumber: 14533,
// 		rentalCompany: "النصر",
// 		contractNumber: 312,
// 		contractDuration: 2,
// 		durationMetric: "سنة",
// 		contractEndDate: new Date("2024-01-01"),
// 		monthlyRentalAmount: "2000",
// 		fuelAllowances: "100",
// 		washingAllowances: "100",
// 		assignmentType: "تخصيص مؤقت",
// 		licenseExpDate: new Date("2023-01-01"),
// 		insuranceExpDate: new Date("2023-01-01"),
// 	},
// 	{
// 		vehicleModel: "باثفايندر",
// 		vehicleCompany: "نيسان",
// 		manufactureDate: 2022,
// 		plateNumber: 7777699,
// 		rentalCompany: "النصر",
// 		contractNumber: 312,
// 		contractDuration: 2,
// 		durationMetric: "سنة",
// 		contractEndDate: new Date("2024-01-01"),
// 		monthlyRentalAmount: "2000",
// 		fuelAllowances: "100",
// 		washingAllowances: "100",
// 		assignmentType: "تخصيص مؤقت",
// 		licenseExpDate: new Date("2023-01-01"),
// 		insuranceExpDate: new Date("2023-01-01"),
// 	},
// ];

// const employeeData = [
// 	{
// 		name: "John Doe",
// 		managerEmail: "sam.smith@fleet.com",
// 		email: "john.doe@fleet.com",
// 		role: "employee",
// 		employementNumber: 123453,
// 		department: "Finance",
// 		mobileNumber: 123456,
// 	},
// 	{
// 		name: "Jane Doe",
// 		managerEmail: "sam.smith@fleet.com",
// 		email: "jane.doe@fleet.com",
// 		role: "admin",
// 		employementNumber: 545434,
// 		department: "Transportation",
// 		mobileNumber: 123451,
// 	},
// 	{
// 		name: "Sam Smith",
// 		managerEmail: null,
// 		email: "sam.smith@fleet.com",
// 		role: "employee",
// 		employementNumber: 123453,
// 		department: "Finance",
// 		mobileNumber: 123452,
// 	},
// ];

// async function main() {
// 	console.log("Start vehicles seeding ...");
// 	for (const v of vehiclesData) {
// 		const vehicle = await prisma.Vehicle.create({
// 			data: v,
// 		});
// 		console.log(`Created vehicle with id: ${vehicle.id}`);
// 	}

// 	console.log("Start employees seeding ...");
// 	for (const e of employeeData) {
// 		const employee = await prisma.Employee.create({
// 			data: e,
// 		});
// 		console.log(`Created employee with id: ${employee.id}`);
// 	}

// 	console.log("Seeding finished.");
// }

// main()
// 	.catch(e => {
// 		console.error(e);
// 		process.exit(1);
// 	})
// 	.finally(async () => {
// 		await prisma.$disconnect();
// 	});
