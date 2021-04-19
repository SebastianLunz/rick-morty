import React, {useState} from 'react';
import FavoriteList from "./FavoriteList";
import {getFavorite, removeFavorite} from "./FavoriteStorage";
import {Col, Row} from "reactstrap";


function Favorites() {
  const [favorites, setFavorites] = useState(() => getFavorite());

  function handleRemoveFromFavoriteClick(id) {
    const updatedFavorites = removeFavorite(id);
    setFavorites(updatedFavorites);
  }

  return (
    <>
      <Row>
        <Col xs={12} sm={6}>
          <h3>My Favourite</h3>
        </Col>
        <Col xs={12} sm={6} className="text-sm-right mb-3 mb-sm-0">
          <h4 className="mb-3">
            Characters: {favorites.length}.
          </h4>
        </Col>
      </Row>
      <FavoriteList favorites={favorites} handleRemoveFromFavoriteClick={handleRemoveFromFavoriteClick}/>
    </>
  );
}

export default Favorites;