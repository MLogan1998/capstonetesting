import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import HomeScreen from './HomeScreen'
import HomeFooter from './HomeFooter'
import HomeHeader from './HomeHeader'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/">
                    <HomeHeader />
                    <HomeScreen />
                    <HomeFooter />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
