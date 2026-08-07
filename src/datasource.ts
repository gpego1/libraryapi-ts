import { DataSource } from "typeorm";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Book } from "./domain/model/Book.js";
import dotenv from "dotenv"

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: `${process.env.MYSQL_USERNAME}`,
    password: `${process.env.MYSQL_PASSWORD}`,
    database: `${process.env.MYSQL_DATABASE}`,
    synchronize: true,
    logging: true,
    entities: [Book],
    subscribers: [],
    migrations: [__dirname + "src/migration/*.js"],
})