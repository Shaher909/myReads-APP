import Book from "./Book";

const Shelf = ( {shelf, books, shelves, updateBooks} )=> {

    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.displayName}</h2>
                <div className="bookshelf-books">
                    <ul className="books-grid">
                    {
                        books.map((book) => (
                        book.shelf === shelf.category ?
                        <li key={book.id}><Book book={book} shelves={shelves} updateBooks={updateBooks} ></Book></li>
                        :
                        null
                        ))
                    }
                    </ul>
                </div>
        </div>
    );


}

export default Shelf;