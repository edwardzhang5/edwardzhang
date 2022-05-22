import React from 'react';
import Home from './components/Home';
import Gatorloop from './components/assets/projects/GG';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/apiTest")
          .then((res) => res.json())
          .then((data) => setData(data.message));
      }, []);

    return(
        /*
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path = "/" component = {Home}/>;
            <Route path = "/gatorloopims" component = {Gatorloop}/>
        </Switch>
    </Router>
    */
    <p>{!data ? "Loading..." : data}</p>

    );

}

export default App;
