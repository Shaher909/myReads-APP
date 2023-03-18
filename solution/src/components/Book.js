import { useState } from "react";
import * as BooksAPI from "../BooksAPI";

const Book = ( {book, shelves , updateBooks} ) => {

    const [shelf, setShelf] = useState(book.shelf);
    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const handleChange = async (event) => {
        const newShelf = event.target.value;
        const response = await BooksAPI.update(book, newShelf);
        setShelf(newShelf);
        updateBooks();
      };

    return (
            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        //`url(${book.imageLinks.thumbnail ? book.imageLinks.thumbnail : " "})`,
                        `url(${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ""})`,
                    }}
                    ></div>
                    <div className="book-shelf-changer">
                    <select value={shelf} onChange={handleChange}>
                        <option value="none" disabled>
                        Move to...
                        </option>
                        {
                            shelves.map((shelf) => (
                                <option key={shelf.category} value={shelf.category}>{shelf.displayName}</option>
                            ))
                        }
                        <option value="no_category" style={{ display: shelf !== 'none' ? 'block' : 'none' }}>None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title ? book.title: ''}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', '): ''}</div>
                <div className="book-publisher">{book.publisher ? book.publisher : ''}</div>
                <hr></hr>
                {showDetails && (
                    <>
                    
                    <hr></hr>
                    <div className="book-title">{book.subtitle ? book.subtitle : ''}</div>
                    <hr></hr>
                    <div className="book-authors">{book.description ? book.description : ''}</div>   
                    </>
                )}
                <button onClick={toggleDetails}>Hide / Show more details</button>
            </div>
    )

}

export default Book;