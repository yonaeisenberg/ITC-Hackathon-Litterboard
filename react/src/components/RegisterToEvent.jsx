import React from 'react'
import { addUserAtEvent, FetchEventInfo } from '../lib/api'


const formStyle = {
    fontSize: '15px',
    textAlign: 'center',
    height:'100px',
    width:'50vh',
    borderRadius:'5px'
  };


 class RegisterToEvent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', x: '', event_id: -1};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      console.log('in handle change')
      this.setState({value: event.target.value, x:''});
    }

   handleSubmit(event) {
      console.log('A name was submitted: ' + this.state.value);
      addUserAtEvent(this.state.value, this.state.event_id).then(response => {
             this.setState({x:response.data})
            })
      event.preventDefault();
      this.setState({value: ''});
    }

    componentDidMount(){
        const url = window.location
        const id = new URLSearchParams(url.search).get('event_id')
        this.setState({event_id: id})
        this.fetchEventInfo(id)
    }

    fetchEventInfo(id){
        FetchEventInfo(id).then(response => {
            this.setState({location_name: Object.values(Object.values(response.data)[0])[0], date:Object.values(Object.values(response.data)[0])[1]})
        }

        )
    }

    render() {
      return (
         <div style = {formStyle} align='right'>
         <p></p>
        <form onSubmit={this.handleSubmit}>
            <p>
            Register to our event at {this.state.location_name} on {this.state.date}
            </p>
          <label>
            Enter your name:
            <p></p>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <p></p>
          <input type="submit" value="Submit" disabled={!this.state.value}/>
        </form>
        <p></p>
        <p align='center'>
         {this.state.x}
        </p>
        </div>
   
      );
    }
  }



export default RegisterToEvent