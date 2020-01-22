import React from "react"
import { FetchBoard } from "../lib/api"

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
            dat: response.data.students
        })
    })
   }

    render(){
    return(
        <div>
        <h1>home placeholder</h1>
        <p> {console.log(this.state.dat)} </p>
        </div>
    )
    }

}

export default Home