import "./App.css";
import Home from "./views/home";
import Search from "./views/search";
import React from 'react';
import {Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
