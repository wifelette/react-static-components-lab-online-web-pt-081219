// @ts-check

import React, { Component } from "react";
import CatComponent from "./CatComponent.js";
import MouseComponent from "./MouseComponent.js";
import { GraceHopperQuoteComponent } from "./GraceHopperQuoteComponent.js";

class App extends Component {
  render() {
    // your code in the return statement below!
    return (
      <div className="App">
        <CatComponent />
        <GraceHopperQuoteComponent />
        <MouseComponent />
      </div>
    );
  }
}

export default App;
