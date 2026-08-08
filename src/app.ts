import "reflect-metadata";
import http from "node:http"
import dotenv from "dotenv"
import { AppDataSource } from "./datasource.js";
import { Router } from "./presentation/routes.js";
import { BookService } from "./services/BookService.js";
import { BookRoutes } from "./presentation/BookRoutes.js";
import { Server } from "./server.js";

dotenv.config();

await AppDataSource.initialize()
.then(() => {
    console.log("Database was successfully conected!");
    console.log(AppDataSource.entityMetadatas.map(metadata => metadata.name));
}).catch((error) => {
    throw new Error(error)
});


const router = new Router();
const port = process.env.PORT;
const bookService = new BookService();
const bookRouter = new BookRoutes(
    bookService
);

router.get(
    "/api/books",
    bookRouter.getAllBooks
)


const server = new Server(router);
server.start(Number(port));





