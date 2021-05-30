import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// list of pages
import homepage from './components/homepage';
import aboutme from './components/aboutme';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={homepage} />
              <Route path="/aboutme" component={aboutme}/>
          </Switch>
      </Router>

  );
}

export default App;
