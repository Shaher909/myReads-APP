import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const MyLibrary = ( {shelves, books, updateBooks} ) => {

    console.log(books);
    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                {
                    shelves.map((shelf) => (
                        <div className="list-books-content">
                            <Shelf key={shelf.category} shelf={shelf} books={books} shelves={shelves} updateBooks={updateBooks}></Shelf>
                        </div>
                    ))
                }

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        </div> 
    );

}

export default MyLibrary;