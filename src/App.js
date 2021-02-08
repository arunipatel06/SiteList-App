/* eslint-disable no-useless-constructor */
import { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SitePage from "./components/SitePage";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div style={{ width: "100%", overflowX: "hidden" }}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/site/:id" component={SitePage} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
