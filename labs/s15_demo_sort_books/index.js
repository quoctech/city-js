var sortCharacter = 'v';

var books = [
    {id: 1, name: 'Book A', price: 10},
    {id: 2, name: 'Book B', price: 8},
    {id: 3, name: 'Book C', price: 12},
    {id: 4, name: 'Book D', price: 30},
    {id: 5, name: 'Book E', price: 6},
];

function sortBooksByCharacter(books) {
    return books.sort(function(bookA, bookB) {
        if (sortCharacter === '^') {
            return bookA.price - bookB.price;
        }
        return bookB.price - bookA.price;
    });
}

// id - name - price
function renderBooks(books) {
    console.clear();
    for (var book of books) {
        var txtFormat = `${book.id} - ${book.name} - ${book.price}`;
        console.log(txtFormat);
    }
}

function main() {
    books = sortBooksByCharacter(books);
    renderBooks(books);

    setTimeout(() => {
        /**
         * 1. add book
         * 2. sắp xếp lại price của book
         * 3. render book
         */
        books.push({id: 6, name: 'Book G', price: 15});
        books = sortBooksByCharacter(books);
        renderBooks(books);
    }, 5 * 1000);

    setTimeout(() => {
       /**
         * 1. Sau khi thêm book xong -> OK, ddã thêm book rồi
         * 2. Xóa book có id là 5
         * 3. sắp xếp lại price
         * 4. render book
         */
        books = books.filter(function(book) {
            return book.id !== 5;
        });

        books = sortBooksByCharacter(books);
        renderBooks(books);
    }, 15 * 1000);
}

main();