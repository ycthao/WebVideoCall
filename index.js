const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(sever, {
    cors: {
        origin: "*",
        methods: ["GET", "PULL"]
    }
});
