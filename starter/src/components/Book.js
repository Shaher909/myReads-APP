const Book = ( {book, shelves} ) => {

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        `url(${book.imageLinks.smallThumbnail})`,
                    }}
                    ></div>
                    <div className="book-shelf-changer">
                    <select value={book.shelf}>
                        <option value="none" disabled>
                        Move to...
                        </option>
                        {
                            shelves.map((shelf) => (
                                <option value={shelf.category}>{shelf.category}</option>
                            ))
                        }
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
        
    )

}

export default Book;