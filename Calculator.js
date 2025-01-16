import React, { useState } from "react";
import Button from "./Button"; 
import myphoto from "./myphoto.jpeg"; // to inserct picture
import "./Calculator.css"; // to add styling 
function Calculator() {
  const [input, setInput] = useState(""); // State for user input
  const [showPhoto, setShowPhoto] = useState(false); // State for toggling photo

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput(""); // Clear input
    } else if (value === "=") {
      try {
        setInput(String(eval(input))); // Evaluate the input (use eval carefully)
      } catch {
        alert("Invalid Calculation!");
        setInput("");
      }
    } else {
      setInput((prev) => prev + value); // Append the clicked button value
    }
  };

  // Function to toggle the photo
  const handleShowPhoto = () => {
    setShowPhoto(!showPhoto);
  };

  // Function to calculate the square
  const handleSquare = () => {
    if (!isNaN(input) && input.trim() !== "") {
      setInput(String(Math.pow(Number(input), 2))); // Calculate and update the input
    } else {
      alert("Please enter a valid number!"); // Alert for invalid input
    }
  };

  return (
    <div className="Calculator">
      {/* Input Field */}
      <div className="screen-row">
        <input type="text" value={input} readOnly />
      </div>

      {/* Calculator Buttons */}
      <div className="Keypad">
        <Button label="(" ClickHandle={() => handleButtonClick("(")} />
        <Button label=")" ClickHandle={() => handleButtonClick(")")} />
        <Button label="C" ClickHandle={() => handleButtonClick("C")} />
        <Button label="/" ClickHandle={() => handleButtonClick("/")} />

        <Button label="7" ClickHandle={() => handleButtonClick("7")} />
        <Button label="8" ClickHandle={() => handleButtonClick("8")} />
        <Button label="9" ClickHandle={() => handleButtonClick("9")} />
        <Button label="*" ClickHandle={() => handleButtonClick("*")} />

        <Button label="4" ClickHandle={() => handleButtonClick("4")} />
        <Button label="5" ClickHandle={() => handleButtonClick("5")} />
        <Button label="6" ClickHandle={() => handleButtonClick("6")} />
        <Button label="-" ClickHandle={() => handleButtonClick("-")} />

        <Button label="1" ClickHandle={() => handleButtonClick("1")} />
        <Button label="2" ClickHandle={() => handleButtonClick("2")} />
        <Button label="3" ClickHandle={() => handleButtonClick("3")} />
        <Button label="+" ClickHandle={() => handleButtonClick("+")} />

        <Button label="0" ClickHandle={() => handleButtonClick("0")} />
        <Button label="." ClickHandle={() => handleButtonClick(".")} />
        <Button label="=" ClickHandle={() => handleButtonClick("=")} />
      </div>

      {/* Additional Features */}
      <div className="Extra-Buttons">
        <Button label="Show Me" ClickHandle={handleShowPhoto} />
        <Button label="Square" ClickHandle={handleSquare} />
      </div>

      {/* Display Photo */}
      {showPhoto && (
        <div>
          <img src={myphoto} alt="My Photo" className="my-photo" />
        </div>
      )}
    </div>
  );
}

export default Calculator;
