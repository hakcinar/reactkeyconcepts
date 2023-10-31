import React from "react";
import firsImage from "../assets/react-core-concepts.png";
import "./Header.css"

const Header = () => {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  const getRandomNumbers = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };
  const dyanmicValue = reactDescriptions[getRandomNumbers(2)];
  return (
    <header>
      <img src={firsImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {dyanmicValue} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
