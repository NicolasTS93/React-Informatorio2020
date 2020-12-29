import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './my_components/header.js';
import Section from './my_components/section.js';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Section/> 
  </React.StrictMode>, 
  document.getElementById('root')
  
);

