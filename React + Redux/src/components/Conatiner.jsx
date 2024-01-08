import React from "react";

const Conatiner = ({ children }) => {
  return (
    <div className="card" style={{ width: "80%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Conatiner;
