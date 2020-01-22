import React from 'react'
// import  { Table } from 'react-bootstrap';

class EventList extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  // change code below this line

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

    // change code above this line
    render() {
      return (
  

     <div>
     <button className='inc' onClick={(e) => this.increment(e)}>Increment!</button>
      <button className='dec' onClick={(e) => this.decrement(e)}>Decrement!</button>

   
      <h1>Current Count: {this.state.count}</h1>
    </div>
    // return (
    //     <div>
    //     <Table striped bordered hover variant="dark">
    //     <thead>
    //       <tr>
    //         <th>#</th>
    //         <th>Area</th>
    //         <th>Votes</th>
    //         <th></th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>1</td>
    //         <td>Gordon Beach</td>
    //         <td>5</td>
    //         <td><button onClick={this.vote}> + </button></td>
    //       </tr>
    //     </tbody>
    //   </Table>
    //     </div>
    //   )




// <tr>
// //     <td>2</td>
// //     <td>Florentine</td>
// //     <td>6</td>
// //     <td><button onClick={this.vote}> + </button></td>
// //   </tr>
//   <tr>
//     <td>3</td>
//     <td>old north</td>
//     <td>6</td>
//     <td><button onClick={this.vote}> + </button></td>
//   </tr>
//   <tr>
//   <td>4</td>
//   <td>shuk ha carmel</td>
//   <td>6</td>
//   <td><button onClick={this.vote}> + </button></td>
//   </tr>
// <tr>
// <td>5</td>
// <td>jaffa beach</td>
// <td>10</td>
// <td><button onClick={this.vote}> + </button></td>
// </tr>
      )  
  }
}


export default EventList