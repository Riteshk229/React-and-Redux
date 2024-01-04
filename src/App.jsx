// import "./App.css";
import Container from "./Conatiner";

function App() {
  const buttonsName = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "link",
  ];

  const handleCLick = (name, e) => {
    console.log(e);
    console.log(`${name.toUpperCase()} clicked..!!`);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Container>
        <input type="text" className="form-control" onChange={handleChange} />
        {buttonsName.map((buttonName) => (
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
