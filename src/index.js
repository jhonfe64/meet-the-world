import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {CountriesContextProvider} from './context/CountriesListContext';
import {FilterContextProvider} from './context/FiltersValues';

ReactDOM.render(
  <React.StrictMode>
    <CountriesContextProvider>
      <FilterContextProvider>
      <App />
      </FilterContextProvider>
    </CountriesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


