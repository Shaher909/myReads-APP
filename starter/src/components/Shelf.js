import Book from "./Book";

const Shelf = ( {shelf, books} )=> {

    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.category}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        books.map((book) => (
                        <li key={book.name}><Book book={book}></Book></li>
                        ))
                    }
                    </ol>
                </div>
        </div>
    );


}

export default Shelf;