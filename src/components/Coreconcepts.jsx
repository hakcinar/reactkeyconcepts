import React from "react";

const Coreconcepts = (props) => {
  return (
    <li>
      <img src={props.src} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default Coreconcepts;
