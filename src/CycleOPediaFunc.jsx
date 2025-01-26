import React, { Component, useEffect, useId, useRef, useState } from "react";
import { getRandomUser } from "./Utility/api";
import InstructorFunc from "./InstructorFunc";

const CycleOPediaFunc = () => {
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  });

  const [inputName, setInputName] = useState(() => {
    return "";
  });

  const [inputFeedback, setInputFeedback] = useState(() => {
    return "";
  });

  const totalRender = useRef(0);
  const prevStudentCount = useRef(0);
  const feedbackInputRef = useRef(null);
  const id = useId();

  // Total Render
  useEffect(() => {
    //setTotalRender((prevState) => prevState + 1);
    totalRender.current = totalRender.current + 1;
    console.log("render" + totalRender.current);
  });

  useEffect(() => {
    feedbackInputRef.current.focus()
  
    return () => {
      
    }
  }, [])
  

  // Hide Instructor
  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone_number: response.data.phone_number,
          },
        };
      });
    };

    if (!state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);

  // Student List
  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    };

    if (prevStudentCount.current < state.studentCount) {
      getUser();
    } else if (prevStudentCount.current > state.studentCount) {
      setState((prevState) => {
        return { ...prevState, studentList: [] };
      });
    }
  }, [state.studentCount]);

  // Student Count
  useEffect(() => {
    prevStudentCount.current = state.studentCount + 1;
  }, [state.studentCount]);

  const handleAddStudent = () => {
    setState((prevState) => {
      return { ...prevState, studentCount: prevState.studentCount + 1 };
    });
  };

  const handleRemoveAllStudent = () => {
    setState((prevState) => {
      return { ...prevState, studentCount: 0 };
    });
  };

  const handleToggleInstructor = () => {
    setState((prevState) => {
      return { ...prevState, hideInstructor: !prevState.hideInstructor };
    });
  };
  return (
    <>
      <div className="p-3">
        <span className="h4 text-success">Instructor&nbsp;</span>
        <i
          className={`bi ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          } btn btn-success btn-sm`}
          onClick={handleToggleInstructor}
        ></i>
        {!state.hideInstructor && state.instructor ? (
          <InstructorFunc instructor={state.instructor} />
        ) : null}
      </div>

      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <br />
        <input
          type="text"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          placeholder="Name..."
          id={`${id}-inputName`}
        />{" "}
        <label htmlFor={`${id}-inputName`}>Value:</label>
         {inputName}
        <br />
        <textarea
          type="text"
          value={inputFeedback}
          ref={feedbackInputRef}
          onChange={(e) => {
            setInputFeedback(e.target.value);
          }}
          placeholder="Feedback..."
          id={`${id}-inputFeedback`}
        />{" "}
        <label htmlFor={`${id}-inputFeedback`}>Value:</label>
         {inputFeedback}
      </div>
      <div className="p-3">
        <span className="h4 text-success">Students</span>
        <br />
        <div>Student Count: {state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
          Add Student
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudent}
        >
          Remove All Students
        </button>
        {state.studentList.map((student, index) => {
          return (
            <div className="text-white" key={index}>
              {student.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CycleOPediaFunc;
