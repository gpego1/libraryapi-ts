import { Book } from "./domain/model/Book.js";

let book1 = new Book("Chainsaw Man Vol 23", 144, "Fujimoto", 2025)
console.log(book1);
book1.setName("Chainsaw Man Vol 24.")
console.log(book1.getName());
