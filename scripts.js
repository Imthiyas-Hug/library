const mylibrary = [];
const books = document.querySelector('.book_container');
const newBtn = document.getElementById('new_book_btn');
const submitBtn = document.getElementById('submit_btn');
const dialog = document.querySelector('dialog');
const title_input = document.querySelector('#title_input');
const author_input = document.querySelector('#author_input');
const page_input = document.querySelector('#page_input');
const check_read = document.querySelector('#check_read');

let title;
let author;
let numberOfPages;
let isRead;
let readStatus;
let uuid;

function Book(author, title, numberOfPages, isRead, id) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
    this.id = id;
}

function addBookToLibrary(author, title, numberOfPages, isRead) {
    const uuid = crypto.randomUUID();
    mylibrary.push(new Book(author, title, numberOfPages, isRead, uuid));
}

newBtn.addEventListener("click", (event) => {
    title_input.value = '';
    author_input.value = '';
    page_input.value = '';
    check_read.checked = '';
    dialog.showModal();
});

// addBookToLibrary(' F. Scott Fitzgerald', 'The Great Gatsby', 180, false);
// addBookToLibrary('J.R.R. Tolkien', 'The Hobbit', 295, false);
// addBookToLibrary('Harper Lee', 'To Kill a Mockingbird', 281, false);
// addBookToLibrary('Jane Austen', 'Pride and Prejudice', 432, false);
function createBookCard(title, author, numberOfPages, isRead) {

    if (title && author && numberOfPages) {

        addBookToLibrary(title, author, numberOfPages, isRead);
        mylibrary.forEach(elem => {
            uuid = elem.id;
        })
        console.log(mylibrary)
        readStatus = isRead ? 'I had read the book.' : 'Not yet read the book.';

        const card = document.createElement('div');

        //Title
        const p1 = document.createElement('p');
        const span1 = document.createElement('span');
        span1.classList.add('title_name');
        span1.textContent = title;
        p1.textContent = 'Title : ';
        p1.appendChild(span1);

        //Author
        const p2 = document.createElement('p');
        const span2 = document.createElement('span');
        span2.classList.add('author_name');
        span2.textContent = author;
        p2.textContent = 'Author : ';
        p2.appendChild(span2);

        //Pages
        const p3 = document.createElement('p');
        const span3 = document.createElement('span');
        span3.classList.add('total_pages');
        span3.textContent = numberOfPages;
        p3.textContent = 'Pages : ';
        p3.appendChild(span3);

        //Read Status
        const p4 = document.createElement('p');
        const span4 = document.createElement('span');
        span4.classList.add('read_status');
        span4.textContent = readStatus;
        p4.textContent = 'Read Status : ';
        p4.appendChild(span4);

        // Remove Button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.dataset.id = uuid;
        removeBtn.addEventListener('click', (event) => {
            books.removeChild(document.getElementById(event.target.dataset.id));
        });

        //Append title,author,pages,readStatus,removeButton
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(removeBtn);

        card.classList.add('book');
        console.log(uuid);
        card.id = uuid;
        books.appendChild(card);

        dialog.close();
    }
}
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    title = title_input.value;
    author = author_input.value;
    numberOfPages = page_input.value;
    isRead = check_read.checked;
    createBookCard(title, author, numberOfPages, isRead);
});``