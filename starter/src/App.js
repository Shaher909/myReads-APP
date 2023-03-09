import "./App.css";
import { useState } from "react";
import MyLibrary from "./components/MyLibrary";
import SearchBooks from "./components/SearchBooks";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <MyLibrary></MyLibrary>
      <SearchBooks></SearchBooks>
    </div> 
  );
}

export default App;
