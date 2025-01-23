import React, { Component } from "react";
import { getRandomUser } from "./Utility/api";

export default class CycleOPediaClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  }

  componentDidMount = async () => {
    const response = await getRandomUser();
    this.setState((prevState) => {
      return {
        instructor: {
          name: response.data.first_name + " " + response.data.last_name,
          email: response.data.email,
          phone_number: response.data.phone_number,
        },
      };
    });
  };

  componentDidUpdate() {}

  componentWillUnmount() {}
  render() {
    console.log("Render Component");
    return (
      <>
        {this.state.instructor && (
          <div className="p-3">
            <span className="h4 text-success">Instructor</span>
            <i className="bi bi-toggle-off btn btn-success btn-sm"></i>
            <br />
            Name: {this.state.instructor.name}
            <br />
            Email: {this.state.instructor.email}
            <br />
            Phone: {this.state.instructor.phone_number}
          </div>
        )}
      </>
    );
  }
}
