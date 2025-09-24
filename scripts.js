const mylibrary = [];
const books = document.querySelector('.book_container');
const newBtn = document.getElementById('new_book_btn');
const submitBtn = document.getElementById('submit_btn');
const dialog = document.querySelector('dialog');
const title_input = document.querySelector('#title_input');
const author_input = document.querySelector('#author_input');
const page_input = document.querySelector('#page_input');
const check_read = document.querySelector('#check_read');
const trashIcon = document.querySelector('#trash_icon');
const offIcon = document.querySelector('#off_icon');
const onIcon = document.querySelector('#on_icon');

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

Book.prototype.toggle = function (isRead) {

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

        readStatus = isRead ? 'I had read the Book.' : 'Not yet read the Book.';

        const card = document.createElement('div');

        //Title
        const div1 = document.createElement('div');
        div1.classList.add('key_value');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        span1.classList.add('card_prop');
        span2.classList.add('card_value');
        span1.textContent = 'Title : ';
        span2.textContent = title;
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.appendChild(span1);
        p2.appendChild(span2);
        div1.appendChild(p1);
        div1.appendChild(p2);

        //Author
        const div2 = document.createElement('div');
        div2.classList.add('key_value');
        const span3 = document.createElement('span');
        const span4 = document.createElement('span');
        span3.classList.add('card_prop');
        span4.classList.add('card_value');
        span3.textContent = 'Author : ';
        span4.textContent = author;
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        p3.appendChild(span3);
        p4.appendChild(span4);
        div2.appendChild(p3);
        div2.appendChild(p4);

        //Pages
        const div3 = document.createElement('div');
        div3.classList.add('key_value');
        const span5 = document.createElement('span');
        const span6 = document.createElement('span');
        span5.classList.add('card_prop');
        span6.classList.add('card_value');
        span5.textContent = 'Pages : ';
        span6.textContent = numberOfPages;
        const p5 = document.createElement('p');
        const p6 = document.createElement('p');
        p5.appendChild(span5);
        p6.appendChild(span6);
        div3.appendChild(p5);
        div3.appendChild(p6);

        //Read Status
        const div4 = document.createElement('div');
        div4.classList.add('key_value');
        const span7 = document.createElement('span');
        const span8 = document.createElement('span');
        span7.classList.add('card_prop');
        span8.classList.add('card_value');
        span7.textContent = 'Read Status : ';
        span8.textContent = readStatus;
        span8.style.fontStyle = 'italic';
        const p7 = document.createElement('p');
        const p8 = document.createElement('p');         
        p7.appendChild(span7);
        p8.appendChild(span8);
        div4.appendChild(p7);
        div4.appendChild(p8);

        // Remove Button
        const div5 = document.createElement('div');
        div5.classList.add('icons')
        const removeBtn = document.createElement('img');
        removeBtn.style.height = '30px';
        removeBtn.src = "images/trash.png";
        removeBtn.id = 'trash_icon';
        removeBtn.dataset.id = uuid;
        removeBtn.addEventListener('click', (event) => {
            books.removeChild(document.getElementById(event.target.dataset.id));
        });

        // Toggle Button
        const toggleBtn = document.createElement('img');
        toggleBtn.style.height = '40px';
        toggleBtn.src = isRead ? 'images/toggle-button (1).png' : "images/toggle-button.png" ;
        toggleBtn.id = 'toggle_icon';
        toggleBtn.dataset.id = uuid;
        toggleBtn.addEventListener('click', () => {
            if (isRead) {
                readStatus = 'Not yet read the Book.';
                toggleBtn.src = "images/toggle-button.png";
                isRead = false;
            }
            else {
                readStatus = 'I had read the Book.';
                toggleBtn.src = 'images/toggle-button (1).png';
                isRead = true;
            }
            span8.textContent = readStatus;
        })
        div5.appendChild(removeBtn);
        div5.appendChild(toggleBtn);

        //Append title,author,pages,readStatus,removeButton,toggleBtn
        const name = document.createElement('span');
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');
        name.classList.add('book_name');
        name.textContent = 'Book';
        const hr = document.createElement('hr')
        card.append(name,br1,br2,div1,div2,div3,div4,hr,div5);
        card.classList.add('book');
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
});