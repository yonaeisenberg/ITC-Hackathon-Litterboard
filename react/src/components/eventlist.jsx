import React from "react"
import { FetchEvents } from "../lib/api"
import { Table } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class EventList extends React.Component{
  constructor(props){
      super(props);
    this.state = {
        dat:"", future: 'true'
    }
  }

  componentDidMount() {
   FetchEvents().then(response => {
        this.setState({
            dat: response.data
        })
    })
   }

    render(){
    const ranks=Object.keys(this.state.dat)
    const lines=Object.values(this.state.dat)
    return(
         <div className = "eventlist" style ={{width:'80vw',  margin: 'auto', width: '70%', border: '3px solid white',padding: '10px', backgroundColor:'white', marginTop:'50px', borderRadius:'30px'}}>
             <h1>Check out our events!</h1>
             <p align="center">
                 <Table striped bordered hovered>
                     <thead>
                          <tr>
                             <th>#</th>
                                 {
                                    lines.slice(0,1).map(line => { return(
                                        Object.keys(line).slice(0,-3).map(header => {
                                              return (
                                                  <th>
                                                      {header}
                                                  </th>
                                              )
                                        }))
                                    })
                                 }
                           </tr>
                     </thead>
                     <tbody>
                            {lines.map((line, index) => { return(
                                <tr>
                                    <th>{ranks[index]}</th>
                                    {Array.from(Object.values(line).slice(0,1)).map(value => {
                                              return (
                                                  <th>
                                                        <a style={{display: "table-cell"}} target="_blank" href={'http://127.0.0.1:7000/place?location_id='+Object.values(line).slice(-2,-1)}>
                                                            {value}
                                                        </a>
                                                  </th>
                                              )
                                        })
                                    }
                                    {Object.values(line).slice(1,-3).map(value => {
                                              return (
                                                  <th>
                                                      {value}
                                                  </th>
                                              )
                                        })
                                     }
                                     <th>
                                      { (Object.values(line).slice(-1)[0]) ? <Nav.Link href={"/RegisterToEvent?event_id="+Object.values(line).slice(-3,-2)}>Register to Event</Nav.Link> : <Nav.Link href={"/RegisterToEvent?event_id="+Object.values(line).slice(-3,-2)}>View Event</Nav.Link>}
                                     </th>
                                </tr>
                                )}
                            )}
                     </tbody>
                  </Table>
             </p>
         </div>
     )
    }

}

export default EventList