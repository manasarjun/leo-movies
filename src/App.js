import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import SearchMovie from "./components/SearchMovie/SearchMovie";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <SearchMovie />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
