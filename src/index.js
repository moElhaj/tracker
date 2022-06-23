const http = require("http");
const socketIo = require("socket.io");
const app = require("./app");
const { env, port } = require("./utilities/config");

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
    console.log("client connected: ", socket.id);
    socket.join("clock - room");
    socket.on("disconnect", reason => {
        console.log(reason);
    });
});

setInterval(() => {
    io.to("clock - room").emit("time", new Date());
}, 1000);

server.listen(port, err => {
    if (err) console.log(err);
    console.log(`server in ${env} at port ${port}`);
});

// Handling Exceptions
const exitHandler = error => {
    console.error(error);
    process.exit(1);
};

process.on("uncaughtException", exitHandler);
process.on("unhandledRejection", exitHandler);
