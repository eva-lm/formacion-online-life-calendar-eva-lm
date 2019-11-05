import React from "react";
import Editor from "./Editor";
import { Link } from "react-router-dom";

const Calendar = props => {
  console.log("soy las props del calendario", props);
  const { editor } = props;

  return (
    <div>
      <h1>Que tal?</h1>
      <Link className="go__calendar" to="/editor">
        <button className="go_calendar">+</button>
      </Link>
    </div>
  );
};

export default Calendar;
