import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn({ type: "integer", name: "id" })
    private _id: number;

    @Column({ type: "varchar", name: "isbn"})
    private _isbn: string;

    @Column({ type: "varchar", name: "name" })
    private _name: string;

    @Column({ type: "integer", name: "pages_amount" })
    private _pagesAmount: number;

    @Column({ type: "varchar", name: "author" })
    private _author: string;

    @Column({ type: "integer", name: "year_of_realease" })
    private _yearOfRelease: number;

    constructor(
        name: string, 
        pagesAmount: number,
        author: string,
        yearOfRelease: number
    ){
        this._isbn = crypto.randomUUID();
        this._name = name;
        this._pagesAmount = pagesAmount;
        this._author = author;
        this._yearOfRelease = yearOfRelease;
    }

    public get id() {return this._id;}

    public get isbn(): string { return this._isbn; }


    public get name(): string { return this._name; }
    public set name(name: string) { this._name = name; }

    public get pagesAmount(): number { return this._pagesAmount; }
    public get author(): string { return this._author; }

    public set yearOfRealese(yearOfRealese: number) { this._yearOfRelease = yearOfRealese; }
    public get yearOfRealese(): number { return this._yearOfRelease; }

}