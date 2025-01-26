import React, { Component, useEffect } from "react";

const InstructorFunc = (props) => {
  useEffect(() => {
    return () => {
      console.log("Instructor - UNMOUNTED");
    };
  }, []);
  return (
    <div>
      Name: {props.instructor.name}
      <br />
      Email: {props.instructor.email}
      <br />
      Phone: {props.instructor.phone_number}
    </div>
  );
};

export default InstructorFunc;
