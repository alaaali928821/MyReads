import "./App.css";
import Home from "./views/home";
import Search from "./views/search";
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

