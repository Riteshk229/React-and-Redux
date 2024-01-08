import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((state) => state.counter);
  return <p className="lead mb-4"> Current Counter Value : {counter}</p>;
};

export default DisplayCounter;
