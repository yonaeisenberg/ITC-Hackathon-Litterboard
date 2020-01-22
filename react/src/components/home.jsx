import React from "react"
import { FetchBoard } from "../lib/api"
import { Table } from 'react-bootstrap'

class Home extends React.Component{
  constructor(props){
      super(props);
    this.state = {
        dat:""
    }
  }

  componentDidMount() {
   FetchBoard().then(response => {
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
             <h1>Welcome to Litterboard!</h1>
             <p align="center">
                 <Table striped bordered hovered>
                     <thead>
                          <tr>
                             <th>#</th>
                                 {
                                    lines.slice(0,1).map(line => { return(
                                        Object.keys(line).map(header => {
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
                                    {Object.values(line).map(value => {
                                              return (
                                                  <th>
                                                      {value}
                                                  </th>
                                              )
                                        })
                                     }
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

export default Home