import { AppDataSource } from "../../datasource.js";
import { Book } from "../model/Book.js";

const bookRepository = AppDataSource.getRepository(Book);

export default bookRepository;

