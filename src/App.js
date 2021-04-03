/* eslint-disable no-useless-constructor */
import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import MobileSitePage from "./components/Site/MobileSitePage";
import { SiteListProvider } from "./context/SiteListContext";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SiteListProvider>
        <div>
          <div style={{ width: "100%", overflowX: "hidden" }}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/site/:id" component={MobileSitePage} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </SiteListProvider>
    );
  }
}

export default App;
