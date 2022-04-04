'use strict'

const STORAGE_KEY = 'bookDB'
var gBooks
_createBooks()

function addRate(bookId, rate) {
    var book = gBooks.find(book => bookId === book.id)
    book.rate = rate
    saveToStorage(STORAGE_KEY, gBooks)
}

function getBookById(bookId) {
    const book = gBooks.find(book => bookId === book.id)
    return book
}

function getBooks() {
    return gBooks
}

function updateBook(bookId, newPrice) {
    var book = gBooks.find(book => bookId === book.id)
    book.price = newPrice
    saveToStorage(STORAGE_KEY, gBooks)
}

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(book => bookId === book.id)
    gBooks.splice(bookIdx, 1)
    saveToStorage(STORAGE_KEY, gBooks)
}

function addBook(title, price) {
    var book = _creatBook(title, price, rate)
    gBooks.push(book)
        // gBooks = _creatBooks()
    saveToStorage(STORAGE_KEY, gBooks)
    return book
}

function _creatBook(title, price, rate = 0) {
    return {
        id: makeId(),
        title,
        price,
        rate
    }
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [
            _creatBook('Harry', 312 + '$'),
            _creatBook('Bob', 300 + '$'),
            _creatBook('Kok', 200 + '$')
        ]
    }
    gBooks = books
    saveToStorage(STORAGE_KEY, gBooks)
}