import React, { Component } from 'react';
import BasicInfo from './basicinfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Brooke Evans',
          number: '777-777-7777',
          dob: 'April 9th, 2003'
        },
        {
          name: 'Kay Blue',
          number: '445-554-5544',
          dob: 'July 24th, 2002'
        },
        {
          name: 'Monroe the Cat',
          number: '777-777-7777',
          dob: 'Janurary 1st, 2023'
        },
        {
          name: 'Garfield the cat',
          number: '777-777-7777',
          dob: 'Janurary 1st, 2023'
        },
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
