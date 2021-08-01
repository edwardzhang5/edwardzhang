import React from 'react';
import Home from './components/Home';
import Gatorloop from './components/assets/projects/GG';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return(
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path = "/" component = {Home}/>;
            <Route path = "/gatorloopims" component = {Gatorloop}/>
        </Switch>
    </Router>

    );

}

export default App;
