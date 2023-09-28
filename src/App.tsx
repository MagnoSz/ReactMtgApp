import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css';

import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CardList from "./components/CardList/CardList";
import CardDetails from "./components/CardDetails/CardDetails";

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={CardList} />
            <Route path="/card/:id" component={CardDetails} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
