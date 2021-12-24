import React from "react";
import "./App.css";
import {BrowserRouter as  Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/login";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";
import Users from "./components/Users";
import Logout from "./components/Logout";
import ItemList from "./components/ItemList";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>FRIENDS DATABASE</h2>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/users">Owners</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/home" component={Homepage}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={ItemList} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
