export class Book {
    private isbn: string;
    private name: string;
    private pagesAmount: number;
    private author: string;
    private yearOfRelease: number;

    constructor(
        name: string, 
        pagesAmount: number,
        author: string,
        yearOfRelease: number
    ){
        this.isbn = crypto.randomUUID();
        this.name = name;
        this.pagesAmount = pagesAmount;
        this.author = author;
        this.yearOfRelease = yearOfRelease;
    }

    getIsbn(): string { return this.isbn; }

    getName(): string { return this.name; }
    setName(name: string): void { this.name = name; }

    getPagesAmount(): number { return this.pagesAmount; }
    getAuthor(): string { return this.author; }
    getYearOfRealese(): number { return this.yearOfRelease; }

}