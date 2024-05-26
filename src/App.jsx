// import React from "react";
import Menu from "./components/menu/menu";
import { Intro } from "./components/introduction/introduction";

const App = () => {
  return (
    <div className="app">
      <Menu />
      <div>
        <Intro />
        {/* Another component */}
      </div>
    </div>
  );
};

export default App;
