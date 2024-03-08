import React from 'react';
import ReactDOM from 'react-dom/client';

import 
{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './views/HomePage';

import {Navbar, Footer} from './views/partials/components.js';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
    </Routes>
    <Footer/>
  </Router>
);
