import React from "react";

function ArtistItem({ image, name, rating }) {
  return (
      <div className="artistItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> {rating}% Positive </p>
      </div>
  );
}

export default ArtistItem;
