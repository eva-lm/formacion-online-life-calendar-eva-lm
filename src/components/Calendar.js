import React from "react";
//import Editor from "./Editor";

const Calendar = props => {
  console.log("soy las props del calendario", props);
  const { editor } = props;
  return <p>{editor.face}</p>;
};

export default Calendar;
