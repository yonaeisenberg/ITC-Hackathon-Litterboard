import React from 'react'
import { addUser } from '../lib/api'


const formStyle = {
    fontSize: '15px',
    textAlign: 'center',
    height:'100px',
    width:'50vh',
    borderRadius:'5px'
  };


 class AddUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', x: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      console.log('in handle change')
      this.setState({value: event.target.value, x:''});
    }

   handleSubmit(event) {
      console.log('A name was submitted: ' + this.state.value);
      addUser(this.state.value).then(response => {
             this.setState({x:response.data})
            })
      event.preventDefault();
      this.setState({value: ''});
    }


    render() {
      return (
         <div style = {formStyle} align='right'>
         <p></p>
        <form onSubmit={this.handleSubmit}>
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



export default AddUser