import React from "react";
import Editor from "./Editor";
import Calendar from "./Calendar";
import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      <Editor />
      <Calendar />
    </div>
  );
}

export default App;
