import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './style/index.scss'
// Import chemin du style depuis notre fichier index.css
import { BrowserRouter as Router } from 'react-router-dom';
// Router de la bibliothèque

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById("root")
);