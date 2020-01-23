import React from "react"
import '../css/body-page.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import Home from "./home"
  import Gallery from "./gallery" 
  import AddUser from "./adduser" 
  import UserList from "./userlist"
  import EventList from "./eventlist"
  import VoteList from "./votelist"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';




class Galleryheader extends React.Component {
   render() {
     return (
      <div>

<Navbar bg="light" expand="lg">

    
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Gallery">Gallery</Nav.Link>

      <Nav.Link href="/AddUser">Register Here</Nav.Link>
      <Nav.Link href="/EventList">Our events</Nav.Link>
      <Nav.Link href="/UserList">Show List </Nav.Link>
      <Nav.Link href="/VoteList">Vote for location</Nav.Link>


    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      </div>
    
   );
   }
}



export default Galleryheader