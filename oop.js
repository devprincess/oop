
class Book {
    constructor(title, author, pages) {
        this.title = title; 
        this.author = author; 
        this.pages = pages;
    }

        displayDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }

    
    isLengthy() {
        return this.pages > 300 ? "This is a lengthy book." : "This is not a lengthy book.";
    }

        changeAuthor(newAuthor) {
        this.author = newAuthor;
        console.log(`The author has been changed to ${this.author}.`);
    }
}

const book1 = new Book("The smart money woman", "F. Arese Ugwu", 400);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 200);

book1.displayDetails();
console.log(book1.isLengthy()); 

book2.displayDetails();
console.log(book2.isLengthy()); 

book1.changeAuthor("Anonymous");
book1.displayDetails();
