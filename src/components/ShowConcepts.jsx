import React from "react";
import { CORE_CONCEPTS } from "../data";
import Coreconcepts from "./Coreconcepts";

const ShowConcepts = () => {
  return (
    <ul>
      {CORE_CONCEPTS.map((concept, i) => (
        <Coreconcepts
          key={i}
          src={concept.image}
          title={concept.title}
          description={concept.description}
        />
      ))}
    </ul>
  );
};

export default ShowConcepts;
