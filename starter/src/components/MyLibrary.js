import Shelf from "./Shelf";

const MyLibrary = () => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <Shelf></Shelf>
            </div>

            <div className="open-search">
                <a onClick="">Add a book</a>
            </div>
        </div>
    );

}

export default MyLibrary;