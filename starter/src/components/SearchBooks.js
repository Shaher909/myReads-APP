import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const SearchBooks = ( {books, shelves, updateBooks} ) => {

  const [query, setQuery] = useState("");

    const updateQuery = (query) =>{
        setQuery(query);
    }

    useEffect(() => {
      if (query !== "") {
      const searchBooks = async() => {
        const res = await BooksAPI.search(query, 20);
        console.log(query);
        console.log(res);
        console.log(books);
      }
      searchBooks();
    }
    }, [query])

    const showingBooks = 
        query === "" 
            ? []
            : books.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()) 
            || b.authors.some(author => author.toLowerCase().includes(query.toLowerCase()))
            || b.industryIdentifiers.some(industryIdentifier => industryIdentifier.identifier.toLowerCase().includes(query.toLowerCase()))
            );

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query} 
                onChange={(event)=> updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                showingBooks.map((book) => (
                  <li key={book.name}><Book book={book} shelves={shelves} updateBooks={updateBooks}></Book></li>
                ))
              }
            </ol>
          </div>
        </div>
    );
}

export default SearchBooks;


