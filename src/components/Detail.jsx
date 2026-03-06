import React from "react";

const Detail = ({ exerciseDetail }) => {
  return (
    <div>
      <h1>{exerciseDetail.name}</h1>
      <p>Target: {exerciseDetail.target}</p>
      <p>Equipment: {exerciseDetail.equipment}</p>
    </div>
  );
};

export default Detail;