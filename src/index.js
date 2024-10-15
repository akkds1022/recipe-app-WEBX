import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './Favorites';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
