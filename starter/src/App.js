import "./App.css";
import { useState, useEffect } from "react";
import MyLibrary from "./components/MyLibrary";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js"

function App() {

  const [shelves, setShelves] = useState (
    [
      { id: 1, category: "Currently Reading"},
      { id: 2, category: "Want to Read"},
      { id: 3, category: "Read"}
    ]
  );

  const [books, setBooks] = useState ([]);

  useEffect(() => {
    const getBooks = async() => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks();
  }, [])

  return (
    <Routes>
        <Route exact path="/" element={<MyLibrary shelves={shelves} books={books} ></MyLibrary>} />
        <Route exact path="/search" element={<SearchBooks books={books}></SearchBooks>} />
    </Routes>
  );
}

export default App;
