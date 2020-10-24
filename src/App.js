import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Common/Header/Header';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appoinment from './Components/Appoinment/Appoinment';
import Counter from './Components/ReducerCount/ReducerCount';
function App() {
  return (
    <Router> 
      <div>
        <Header></Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
           
          </Route>
          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
          <Route exect path="/">
            <Home></Home>
            <Counter></Counter>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
