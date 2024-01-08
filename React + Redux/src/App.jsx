import React from "react";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Conatiner from "./components/Conatiner";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

const App = () => {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Conatiner>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
        </div>
        <Controls />
      </Conatiner>
    </center>
  );
};

export default App;
