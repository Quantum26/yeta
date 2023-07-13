import logo from './logo.svg';

import React from 'react';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import CategoryPage from './voting/CategoryPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          Rainstar Awards 2023
        </header>
        <div className="App-content">
        <Routes>
          <Route path="/voting" element={<CategoryPage/>}></Route>
          <Route path="/" element={<main>Oi this aint done bruv.</main>}></Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
