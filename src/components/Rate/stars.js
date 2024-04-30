import React from "react";
import ReactStars from "react-rating-stars-component";

const Stars = () => {
  const ratingChanged = (e) => {
    console.log(e);
  };
  return (
    <ReactStars
      className="d-inline"
      count={5}
      onChange={ratingChanged}
      size={20}
      activeColor="#ffd700"
      color={"#979797"}
    />
  );
};

export default Stars;
