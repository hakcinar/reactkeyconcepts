import React from "react";

const Tabbutton = ({ label, onSelect, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {label}
      </button>
    </li>
  );
};

export default Tabbutton;
