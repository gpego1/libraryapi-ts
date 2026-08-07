import { DataSource } from "typeorm";
import { Book } from "./domain/model/Book.js";
import dotenv from "dotenv"

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: `${process.env.MYSQL_USERNAME}`,
    password: "1508",
    database: "library",
    synchronize: true,
    logging: true,
    entities: [Book],
    subscribers: [],
    migrations: [],
})