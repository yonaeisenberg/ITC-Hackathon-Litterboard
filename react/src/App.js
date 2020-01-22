
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/home"
import Gallery from "./components/gallery" 
import AddUser from "./components/adduser" 

import UserList from "./components/userlist"
import EventList from "./components/eventlist"
import Galleryheader from "./components/galleryheader"



function App() {
  return (
    <div className="App">
        <Galleryheader />
      <Router >
        <div>
        
        </div>
        <Switch>

           <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Gallery">
            <Gallery />
          </Route>

          <Route exact path="/AddUser">
            <AddUser />
          </Route>
          
          <Route exact path="/UserList">
            <UserList />
          </Route>
          
          <Route exact path="/EventList">
            <EventList />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

