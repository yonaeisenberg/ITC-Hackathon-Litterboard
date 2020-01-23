import React from "react"
import { FetchLocations, Vote } from "../lib/api"
import { Table } from 'react-bootstrap'

class VoteList extends React.Component{
  constructor(props){
      super(props);
    this.state = {
        dat:""
    }
  }

  componentDidMount() {
   FetchLocations().then(response => {
        this.setState({
            dat: response.data
        })
    })
   }

   vote(location_id)   {
   Vote(location_id).then(response => {
        this.setState({
            dat: response.data
        })
    })
   }

    render(){
    const ranks=Object.keys(this.state.dat)
    const lines=Object.values(this.state.dat)
    return(
        <div style ={{width:'80vw',  margin: 'auto', width: '50%', border: '3px solid white',padding: '10px', backgroundColor:'white', marginTop:'50px', borderRadius:'30px'}}>
             <h1>Vote for a location for our next event!</h1>
             <p align="center">
                 <Table striped bordered hovered>
                     <thead>
                          <tr>
                             <th>#</th>
                                 {
                                    lines.slice(0,1).map(line => { return(
                                        Object.keys(line).slice(0,-1).map(header => {
                                              return (
                                                  <th>
                                                      {header}
                                                  </th>
                                              )
                                        }))
                                    })
                                 }
                              <th></th>
                           </tr>
                     </thead>
                     <tbody>
                            {lines.map((line, index) => { return(
                                <tr>
                                    <th>{ranks[index]}</th>
                                    {Array.from(Object.values(line).slice(0,1)).map(value => {
                                              return (
                                                  <th>
                                                        <a style={{display: "table-cell"}} target="_blank" href={'http://127.0.0.1:7000/place?location_id='+Object.values(line).slice(-1)}>
                                                            {value}
                                                        </a>
                                                  </th>
                                              )
                                        })
                                    }
                                    {Object.values(line).slice(1,-1).map(value => {
                                              return (
                                                  <th>
                                                    {value}
                                                  </th>
                                              )
                                        })
                                     }
                                     <th><button onClick={(event) => { event.preventDefault(); this.vote(Object.values(line).slice(-1))}}> + </button></th>
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

export default VoteList