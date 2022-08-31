// task 1

 class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(value) {
        if(value < 0) {
            this.state = 0;
        }
        else if(value > 100) {
            this.state = 100;
        }
        else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
 }

 class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
 }

 class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    }
 }

 class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
 }

 class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
 }

 class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
 }

 // task 2

 class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(item => item[type] === value);
        if(book != undefined) {
            return book;
        }
        else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let book = this.books.find(item => item.name === bookName);
        if(book != undefined) {
            this.books.splice(book, 1);
            return book;
        }
        else {
            return null;
        }
    }
 }

//  task 3

class Student {
    constructor(name) {
        this.name = name;
        this.subjects = [];
    }

    addMark(mark, subject) {
        if(mark >= 1 && mark <= 5) {
            let sub = this.subjects.find(item => item.subject === subject);
            if(sub != undefined) {
                sub.marks.push(mark);
            }
            else this.subjects.push({subject: subject, marks: [mark]});
        }
        else return "Ошибка, оценка должна быть числом от 1 до 5";
    }

    getAverageBySubject(subject) {
        let sub = this.subjects.find(item => item.subject === subject);
        if(sub != undefined) {
            return sub.marks.reduce((item, acc) => acc += item, 0) / sub.marks.length;
        }
        else return "Несуществующий предмет";
    }

    getAverage() {
        let marksSum = 0, marksCount = 0;
        for(let i in this.subjects) {
            marksSum += this.subjects[i].marks.reduce((item, acc) => acc += item);
            marksCount += this.subjects[i].marks.length;
        }
        return marksSum/marksCount;
    }

    exclude(reason) {
        delete this.subjects;
        this.excluded = reason;
    }
}