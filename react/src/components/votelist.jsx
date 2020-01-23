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
         <div>
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
                                    {Object.values(line).slice(0,-1).map(value => {
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