import "./App.css";
import { useState } from "react";
import MyLibrary from "./components/MyLibrary";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <Routes>
        <Route exact path="/" element={<MyLibrary></MyLibrary>} />
        <Route exact path="/search" element={<SearchBooks></SearchBooks>} />
    </Routes>
  );
}

export default App;
