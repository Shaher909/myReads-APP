import "./App.css";
import { useState, useEffect } from "react";
import MyLibrary from "./components/MyLibrary";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js"

function App() {

  const shelves =  
    [
      { id: 1, category: "currentlyReading", displayName: "Currently Reading"},
      { id: 2, category: "wantToRead", displayName: "Want to Read"},
      { id: 3, category: "read", displayName: "Read"}
    ];

  const [books, setBooks] = useState ([]);

  const updateBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  useEffect(() => {
    updateBooks();
  }, []);

  return (
    <Routes>
        <Route exact path="/" element={<MyLibrary shelves={shelves} books={books} updateBooks={updateBooks} ></MyLibrary>} />
        <Route exact path="/search" element={<SearchBooks shelves={shelves} updateBooks={updateBooks} books={books} ></SearchBooks>} />
    </Routes>
  );
}

export default App;
