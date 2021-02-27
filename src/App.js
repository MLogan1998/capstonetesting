import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import HomeScreen from './HomeScreen'
import HomeFooter from './HomeFooter'
import HomeHeader from './HomeHeader'
import Register from './Register'
import AltHome from './AltHome'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <AltHome />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
