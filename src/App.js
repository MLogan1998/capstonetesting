import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route path="/">
                    <TinderCards />
                    <SwipeButtons />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
