import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import homepage from './components/homepage';

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" component={homepage} />
          </Switch>
      </Router>

  );
}

export default App;
