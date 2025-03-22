import React, { useState } from "react";
import { person1, person2 } from "../../../Data";

const Excercise2 = () => {
  const [person, setPerson] = useState({
    name: "Sagnik",
    age: 26,
    hobby: "Writing Code",
  });

  const handleClick = () => {
    setPerson(
      person.name === "Sagnik"
        ? { ...person, name: "Blackburn" }
        : { ...person, name: "Sagnik" }
    );
  };

  return (
    <>
      <div
        style={{
          marginTop: "10px",
          marginInline: "auto",
          width: "60%",
          border: "1px solid black",
          textAlign: "center",
        }}
      >
        <h2>{person.name}</h2>
        <p>{person.age}</p>
        <h6>{person.hobby}</h6>
      </div>

      <button onClick={handleClick}>Change Person</button>
    </>
  );
};

export default Excercise2;
