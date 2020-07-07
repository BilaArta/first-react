import React from 'react';

import './App.css';
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Private from "./private";
import PrivateRoute from "./components/PrivateRoute";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FirebaseProvider from './components/FirebaseProvider';

function App() {
  return (
    <FirebaseProvider>
      
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Private}/>
          <PrivateRoute path="/user"  component={Private}/>
          <PrivateRoute path="/transaksi"  component={Private}/>
          <PrivateRoute path="/Home" component={Home}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Login" component={Login}/>

        </Switch>
      </Router>

    </FirebaseProvider>
  );
}

export default App;
