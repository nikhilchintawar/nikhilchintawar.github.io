import React from "react";

const CurrentlyCard = ({ currentInfo }) => {
  return (
    <div className="card currently-card">
      <p>{currentInfo}</p>
    </div>
  );
};

export default CurrentlyCard;
