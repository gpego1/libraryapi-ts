import "reflect-metadata";
import http from "node:http";
import { AppDataSource } from "./datasource.js";
import dotenv from "dotenv"

dotenv.config();
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/api/hello") {
        res.writeHead(200); // set the response status
        res.end(JSON.stringify("Hello World")); // set the response body
        return;
    }

});

server.listen(PORT, () => {
    console.log(`Server is up at: ${PORT}`);  
});


AppDataSource.initialize()
.then(() => {
    console.log("Database was successfully conected!");
}).catch((error) => {
    console.error(error);
})
