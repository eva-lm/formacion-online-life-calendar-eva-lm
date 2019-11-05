import React from "react";
import Editor from "./Editor";
import Calendar from "./Calendar";
import Home from "./Home";
import Detail from "./Detail";
import "../stylesheets/App.scss";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route path="/editor" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
