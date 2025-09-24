const mylibrary = [];
const books = document.querySelector('.book_container');
const newBtn = document.getElementById('new_book_btn');
const submitBtn = document.getElementById('submit_btn');
const dialog = document.querySelector('dialog')
const title_input = document.querySelector('#title_input')
const author_input = document.querySelector('#author_input')
const page_input = document.querySelector('#page_input')
const check_read = document.querySelector('#check_read')

let title;
let author;
let numberOfPages;
let isRead;
let readStatus;

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

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    title = title_input.value;
    author = author_input.value;
    numberOfPages = page_input.value;
    isRead = check_read.checked;
    console.log('clicked')

    if (title && author && numberOfPages) {

        addBookToLibrary(title, author, numberOfPages, isRead);
        readStatus = isRead ? 'I had read the book.' : 'Not yet read the book.';
        mylibrary.forEach((element) => {

            const card = document.createElement('div');
            console.log("card",card);
            

            const p1 = document.createElement('p');
            const span1 = document.createElement('span')
            span1.classList.add('title_name')
            span1.textContent = element.title;
            p1.textContent = 'Title; : ';
            p1.appendChild(span1)

            const p2 = document.createElement('p');
            const span2 = document.createElement('span')
            span2.classList.add('author_name')
            span2.textContent = element.author;
            p2.textContent = 'Author : '
            p2.appendChild(span2);

            const p3 = document.createElement('p');
            const span3 = document.createElement('span')
            span3.classList.add('total_pages')
            span3.textContent = element.numberOfPages;
            p3.textContent = 'Pages : '
            p3.appendChild(span3);

            const p4 = document.createElement('p');
            const span4 = document.createElement('span')
            span4.classList.add('read_status')
            span4.textContent = readStatus;
            p4.textContent = 'Read Status : '
            p4.appendChild(span4);

            card.appendChild(p1)
            card.appendChild(p2)
            card.appendChild(p3)
            card.appendChild(p4)
            card.classList.add('book');
            books.appendChild(card)

            dialog.close();

        });
    }
    
    console.log(mylibrary);
});

