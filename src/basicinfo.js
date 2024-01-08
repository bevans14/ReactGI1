import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    const { person } = this.props;
    return (
      <div style={{ marginBottom: '20px' }}>
        <h1>Name: {person.name}</h1>
        <p>Number: {person.number}</p>
        <p>Date of Birth: {person.dob}</p>
        {/* Render other info from person object */}
      </div>
    );
  }
}

export default BasicInfo;
