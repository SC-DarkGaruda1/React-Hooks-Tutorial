import React from "react";

const Item = ({ name, manufacturer, removeItem, id }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #575757",
        marginBlock: "10px",
        paddingBlock: "10px",
        width: "80%",
        marginInline: "auto",
      }}
    >
      <h4>{name}</h4>
      <p>{manufacturer}</p>
      <button style={{ width: "20%" }} onClick={() => removeItem(id)}>
        Remove
      </button>
    </div>
  );
};

export default Item;
