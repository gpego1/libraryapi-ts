import http, { IncomingMessage, ServerResponse } from "node:http"
import type { BookService } from "../services/BookService.js";
import type { Book } from "../domain/model/Book.js";

export class BookRoutes {

    service: BookService

    constructor(service: BookService) {
        this.service = service;
    }

    public  getAllBooks = async (
        req: IncomingMessage,
        res: ServerResponse
    ): Promise<void> => {
        
        const books = await this.service.getAllBooks();

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(books));
    }

}