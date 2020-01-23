import React from "react"
import { FetchEventBoard, FetchEventInfo } from "../lib/api"
import { Table } from 'react-bootstrap'
 import '../css/body-page.css'

class Home extends React.Component{
  constructor(props){
      super(props);
    this.state = {dat: '', event_id: -1};
  }

  componentDidMount() {
    const url = window.location
    const id = new URLSearchParams(url.search).get('event_id')
    this.setState({event_id: id})
    this.fetchEventInfo(id)
    FetchEventBoard(id).then(response => {
        this.setState({
            dat: response.data
        })
    })
   }

   fetchEventInfo(id){
        FetchEventInfo(id).then(response => {
            this.setState({location_name: Object.values(Object.values(response.data)[0])[0], date:Object.values(Object.values(response.data)[0])[1]})
        }

        )
    }

    render(){
    const ranks=Object.keys(this.state.dat)
    const lines=Object.values(this.state.dat)
    return(
         <div className ="home" style ={{width:'80vw',  margin: 'auto', width: '50%', border: '3px solid white',padding: '10px', backgroundColor:'white', marginTop:'50px', borderRadius:'30px'}}>
             <h1>Results for event at {this.state.location_name} on {this.state.date}!</h1>
             <p align="center">
                 <Table>
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