import React from 'react'
import { Table } from 'react-bootstrap';
import { render } from '@testing-library/react';

class Hackathon extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    counter ++;
  }
  
render() {
  <counter count={0}/>
    return (
        <div>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Area</th>
            <th>Votes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Gordon Beach</td>
            <td>5</td>
            <td><button onClick={this.add}> + </button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Florentine</td>
            <td>6</td>
            <td><button onClick={this.add}> + </button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>old north</td>
            <td>6</td>
            <td><button onClick={this.add}> + </button></td>
          </tr>
          <tr>
          <td>4</td>
          <td>shuk ha carmel</td>
          <td>6</td>
          <td><button onClick={this.add}> + </button></td>
        </tr>
        <tr>
        <td>5</td>
        <td>jaffa beach</td>
        <td>10</td>
        <td><button onClick={this.add}> + </button></td>
      </tr>
        </tbody>
      </Table>
        </div>
    )
}
}

export default Hackathon