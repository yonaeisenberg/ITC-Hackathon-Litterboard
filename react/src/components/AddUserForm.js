import React from 'react'
import { findRenderedComponentWithType } from 'react-dom/test-utils';

export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }


    
    render() {
      return (
        <div>
        <div style ={{borderRadius:'solid 1px black',width:'80vw',  margin: 'auto', width: '70%', border: '3px solid white',padding: '10px', backgroundColor:'white', marginTop:'50px'}}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your first name and last name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
        </div>
   
      );
    }
  }
  

   


