import React, { Component } from "react";
import   {Route, Switch} from "react-router-dom";
import Asterisk from "./pages/asterisk";
import AddDigits from "./pages/addDigits";
import RomanToNumeric from "./pages/romanToNumeric";

class PageRoutes extends Component {
  render() {
    return (
      <div>
        <Switch >
        <Route exact path="/"><Asterisk/></Route>
        <Route  path="/Asterisk"><Asterisk/></Route>
        <Route  path="/AddDigits"><AddDigits/></Route>
        <Route  path="/RomanToNumeric"><RomanToNumeric/></Route>
        </Switch>
      </div>
    );
  }
}

export default PageRoutes