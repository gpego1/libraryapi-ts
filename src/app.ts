import "reflect-metadata"
import { AppDataSource } from "./datasource.js";
import { Book } from "./domain/model/Book.js";

let book1 = new Book("Chainsaw Man Vol 23", 144, "Fujimoto", 2025)
console.log(book1);
book1.name = "Chainsaw man 22";
console.log(book1.name);

AppDataSource.initialize()
.then(() => {
    console.log("Database was successfully conected!");
}).catch((error) => {
    console.error(error);
})
