import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// list of pages
import homepage from './components/homepage';
import aboutme from './components/aboutme';
import contact from './components/contact';
import project from './components/project';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL} >
          <Switch>
              <Route exact path="/" component={homepage} />
              <Route path="/aboutme" component={aboutme} />
              <Route path="/contact" component={contact} />
              <Route path="/project" component={project} />
          </Switch>
      </Router>

  );
}

export default App;
