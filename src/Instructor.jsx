import React, { Component } from "react";

export class Instructor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Name: {this.props.instructor.name}
        <br />
        Email: {this.props.instructor.email}
        <br />
        Phone: {this.props.instructor.phone_number}
      </div>
    );
  }
}

export default Instructor;
