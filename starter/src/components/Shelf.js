import Book from "./Book";

const Shelf = ( {shelf, books, shelves, updateBooks} )=> {

    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.category}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        books.map((book) => (
                        book.shelf === shelf.category ?
                        <li key={book.name}><Book book={book} shelves={shelves} updateBooks={updateBooks} ></Book></li>
                        :
                        null
                        ))
                    }
                    </ol>
                </div>
        </div>
    );


}

export default Shelf;