

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
import DisplayUser from "./components/displayuser"
import UserList from "./components/userlist"
import EventList from "./components/eventlist"
import NameForm from ".components/AddUserForm"


function App() {
  return (
    <div className="App">

      <Router >
        <div >
         <Link to="/" > Home/  </Link> 
         <Link to="/Gallery"> Gallery/ </Link> 
         <Link to="/AddUser"> Register Here/ </Link> 
         <Link to="/DisplayUser"> Show a specific / </Link> 
        <Link to="/UserList"> Show List/  </Link>
        <Link to="/EventList">   Vote for event/ </Link>
        <Link to="/NameForm"> Registration (?) </Link> 
        
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
          
          <Route path="/DisplayUser">
            <DisplayUser id={"id"}/>
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

