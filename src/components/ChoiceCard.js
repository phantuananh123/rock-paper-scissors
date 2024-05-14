import React from "react";

function ChoiceCard({ gameItem, handleGameItemChange }) {
  const { url, name } = gameItem;
  return (
    <img
      onClick={() => {
        handleGameItemChange(gameItem);
        console.log(onclick)
      }}
      className="choice"
      src={url}
      alt={name}
    />
  );
}

export default ChoiceCard;
