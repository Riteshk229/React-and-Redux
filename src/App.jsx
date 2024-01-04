// import "./App.css";
import { useState } from "react";
import Container from "./Conatiner";

function App() {
  // const [textState, setTextState] = useState("");
  const [buttons, setButtons] = useState([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "link",
  ]);

  const handleCLick = (name, e) => {
    console.log(e);
    console.log(`${name.toUpperCase()} clicked..!!`);
  };

  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  //   setTextState(e.target.value);
  // };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newButton = e.target.value;
      const newButtons = [...buttons, newButton];
      setButtons(newButtons);
      e.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <input
          type="text"
          className="form-control"
          // onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        {/* <p className="fw-bolder mt-2">{`Current Value of  TextState : ${textState}`}</p> */}

        {buttons.map((buttonName) => (
          <button
            key={buttonName}
            style={{
              padding: "5px",
              margin: "5px",
            }}
            type="button"
            className={`btn btn-${buttonName} text-capitalize`}
            onClick={(e) => handleCLick(buttonName, e)}
          >
            {buttonName}
          </button>
        ))}
      </Container>

      {/* <Container>
        <p> Above are the buttons in BootStrap</p>
      </Container> */}
    </>
  );
}

export default App;
