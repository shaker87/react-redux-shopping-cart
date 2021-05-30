import React from "react";
import Basket from "./Components/Basket";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>
            <Header />
            <Home />
            <Basket />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
