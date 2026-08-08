import type { Book } from "../domain/model/Book.js";
import bookRepository  from "../domain/repositories/BookRepository.js";

export class BookService {
    
    public async getAllBooks(): Promise<Book[]> {
         return await bookRepository.find();
    }

}



