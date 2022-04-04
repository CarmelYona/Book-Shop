'use strict'

var gBookId

function init() {
    renderBooks()
}

function onAddRate(ev) {
    ev.preventDefault()
    var rate = ev.target[0].value
    addRate(gBookId, rate)
    renderBooks()
}


function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')
}

function onReadBook(bookId) {
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h3').innerText = book.title
    elModal.querySelector('h4 span').innerText = book.price
    elModal.classList.add('open')
    gBookId = bookId


}

function onUpdateBook(bookId) {
    var price = +prompt('Whats His Price')
    if (!price) return
    price += '$'
    updateBook(bookId, price)
    renderBooks()
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onAddBook() {
    var title = prompt('Give Me Book Mame')
    var price = +prompt('Whats His Price')
    if (!title || !price) return
    price += '$'
    addBook(title, price)
    renderBooks()
}

function renderBooks() {
    var books = getBooks()
    console.log('render', books)
    var strHTML = books.map(book => `
    <tr class="book-preview">
    <td>${book.id}</td>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td>${book.rate}</td>
    <td>
    <button onclick="onReadBook('${book.id}')" class = "read"> read </button>
    <button onclick="onUpdateBook('${book.id}')" class = "update"> update </button>
    <button onclick="onRemoveBook('${book.id}')" class = "delete"> delete </button>
   
    </td>
    </tr>
    `)
    document.querySelector('.tbody').innerHTML = strHTML.join('')
}