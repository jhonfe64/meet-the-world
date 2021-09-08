import logo from './logo.svg';
import './App.css';

import Top from './components/Top';
import Results from './components/Results';
import CountryDetails from './components/CountryDetails';
import Header from './components/Header';


import {
  BrowserRouter as Router,
  Route,
  Switch,
}from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Top />
            <Results />
          </Route>
          <Route path="/country/:name" exact>
            <Header />
            <CountryDetails />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
