import React from "react";
import { ArtistList } from "../helpers/ArtistList";
import ArtistItem from "../components/ArtistItem";
import "../styles/Artists.css";
import { Link } from "react-router-dom";

function Artists() {
  return (
    <div className="artists">
      <h1 className="artistTitle">The Artists</h1>
      
        <div className="artistList">
          {ArtistList.map((artistItem, key) => {
            return (
              <Link to="/reviewForm" className="link">
                <ArtistItem
                key={key}
                image={artistItem.image}
                name={artistItem.name}
                rating={artistItem.rating}
                />
              </Link>
            );
          })}
        </div>
    </div>
  );
}

export default Artists;
