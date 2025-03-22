import React, { useState } from "react";
import { fighterJets } from "../../../Data";
import Item from "./Item";

const Excercise1 = () => {
  const [jets, setJets] = useState(fighterJets);

  const removeItem = (id) => {
    const modFighterJets = jets.filter((jet) => jet.id != id);

    setJets(modFighterJets);
  };

  const clearAllJets = () => {
    setJets([]);
  };
  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
    
      }}
    >
      {jets.length ? (
        jets.map((jet, index) => (
          <Item
            key={index}
            name={jet.name}
            fighterJets
            manufacturer={jet.manufacturer}
            id={jet.id}
            removeItem={() => removeItem(jet.id)}
          />
        ))
      ) : (
        <h2>Nothing To Display</h2>
      )}

      <button onClick={clearAllJets}>Clear All</button>
    </div>
  );
};

export default Excercise1;
