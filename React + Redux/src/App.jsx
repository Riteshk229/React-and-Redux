import React from "react";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Conatiner from "./components/Conatiner";
import Controls from "./components/Controls";

const App = () => {
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Conatiner>
        <Header />
        <div className="col-lg-6 mx-auto">
          <DisplayCounter />
        </div>
        <Controls />
      </Conatiner>
    </center>
  );
};

export default App;
