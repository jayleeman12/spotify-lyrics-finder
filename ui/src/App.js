import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SpotifyLogin from './components/SpotifyLogin';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
      <div>
        <Link to='/'></Link>
        <Link to='search'></Link>
        <Route exact path='/' component={SpotifyLogin} />
        <Route path='/search' component={SearchPage} />
      </div>
    </Router>
  )
}

export default App;
