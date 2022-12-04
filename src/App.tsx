import "./App.css";
import Home from "./views/home";
import Search from "./views/search";
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

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './state';
// import { RootState } from './state/reducers';

// function App() {

//   const state = useSelector((state: RootState) => state.bank)
//   const dispatch = useDispatch();

//   const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)

//   return (
//     <div className="App">
//       <h1>{state}</h1>
//     </div>
//   );
// }

// export default App;
