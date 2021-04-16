import React, {useState} from 'react';
import FavoriteList from "./FavoriteList";
import {getFavorite, amountOfAddedToFavorites, removeFavorite} from "./FavoriteStorage";
import {Col, Row} from "reactstrap";


function Favorites() {
  const favorites = getFavorite();
  const [data, setData] = useState([]);

  function handleRemoveFromFavoriteClick(id) {
    removeFavorite(id);
    setData(amountAdded);
  }

  const amountAdded = amountOfAddedToFavorites();

  return (
    <>
      <Row>
        <Col xs={12} sm={6}>
          <h3>Your Favourite</h3>
        </Col>
        <Col xs={12} sm={6} className="text-sm-right mb-3 mb-sm-0">
          <h4 className="mb-3">
            Characters: {amountAdded.length}.
          </h4>
        </Col>
      </Row>
      <FavoriteList favorites={favorites} handleRemoveFromFavoriteClick={handleRemoveFromFavoriteClick}/>
    </>
  );
}

export default Favorites;