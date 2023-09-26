import React from "react";
import "./Exhibit.css";

function Exhibit(props) {
  return (
    <div className="card">
      <h2 >{props.heading}</h2>
      <div className="children">{props.children}</div>
    </div>
  );
}

export default Exhibit;
