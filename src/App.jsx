// import "./App.css";
import Container from "./Conatiner";
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
function App() {
  return (
    <>
      <Container>
        {buttonsName.map((buttonName) => (
          <button
            style={{
              padding: "5px",
              margin: "5px",
            }}
            type="button"
            className={`btn btn-${buttonName} text-capitalize`}
          >
            {buttonName}
          </button>
        ))}
      </Container>

      <Container>
        <p> Above are the buttons in BootStrap</p>
      </Container>
    </>
  );
}

export default App;
