import Shelf from "./Shelf";
import { Link } from "react-router-dom";

const MyLibrary = () => {

    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <Shelf></Shelf>
                </div>

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        </div> 
    );

}

export default MyLibrary;