import { useState } from "react";
import Displayform from "./displayform";

import(useState);
function FormFucntion() {
  const [displayData, setDisplayData] = useState([]);
  const [inputValue, setInputValue] = useState({
    Name: "",
    Department: "",
    Rating: "",
  });
  const [display, setDisplay] = useState(true);

  const handleInput = (e) => {
    const value = e.target.value;

    setInputValue({
      ...inputValue,
      [e.target.name]: value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const checkEmptyInput = e.target.value;
    if (checkEmptyInput !== "") {
      const data = inputValue;
      setDisplayData([...displayData, data]);
      setDisplay(!display);

      const emptyInput = { Name: "", Department: "", Rating: "" };
      setInputValue(emptyInput);
    }
  };
  const setDisplaymain = () => {
    setDisplay(!display);
  };
  return (
    <>
      {display ? (
        <div className="form">
          <form onSubmit={onsubmit}>
            <h1>Employee Feedback form</h1>
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              name="Name"
              id="Name"
              required
              value={inputValue.Name}
              onChange={handleInput}
            />
            <br />
            <label htmlFor="Department">Department:</label>
            <input
              type="text"
              name="Department"
              id="Department"
              required
              value={inputValue.Department}
              onChange={handleInput}
            />
            <br />
            <label htmlFor="Rating">Rating:</label>
            <input
              type="text"
              name="Rating"
              id="Rating"
              required
              value={inputValue.Rating}
              onChange={handleInput}
            />
            <br />
            <input type="submit" id="submit" />
          </form>
        </div>
      ) : (
        <div>
          <div className="cardHolder">
            <Displayform
              displayCard={displayData}
              setCard={setDisplayData}
              togglefunction={setDisplaymain}
            />
          </div>
          <button className="btn" onClick={setDisplaymain}>
            onClick
          </button>
        </div>
      )}
    </>
  );
}

export default FormFucntion;
