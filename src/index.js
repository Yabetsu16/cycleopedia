import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import CycleOPediaClass from "./CycleOPediaClass";
import CycleOPediaFunc from "./CycleOPediaFunc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-center">Class Component</span>
        <CycleOPediaClass />
      </div>
      <div className="col-6">
        <span className="h1 text-warning text-center">Func Component</span>
        <CycleOPediaFunc />
      </div>
    </div>
  </>
);
