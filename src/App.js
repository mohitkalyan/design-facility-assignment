import React from "react";
import Header from "./component/Header";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Section1} />
          <Route path="/section2" exact component={Section2} />
          <Route path="/section3" exact component={Section3} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
