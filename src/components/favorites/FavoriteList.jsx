import React from 'react';
import {Table} from "reactstrap";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function FavoriteList({favorites, handleRemoveFromFavoriteClick}) {
  return (
    <Table striped hover responsive>
      <thead className="thead-dark">
      <tr>
        <th>Name</th>
        <th>Species</th>
        <th>Status</th>
        <th>Image</th>
        <th style={{textAlign: "center"}}>Remove from favorite</th>
      </tr>
      </thead>
      <tbody>
      {
        favorites.map(favorite => (
          <tr key={favorite.id}>
            <td>{favorite.name}</td>
            <td>{favorite.species}</td>
            <td>{favorite.status}</td>
            <td>
              <img
                src={favorite.image}
                alt={favorite.name}
                style={{width: 'auto', height: "100px"}}
              />
            </td>
            <td
              onClick={() => handleRemoveFromFavoriteClick(favorite.id)}
              style={{textAlign: "center", color: "red", cursor: "pointer"}}
            >
              <FontAwesomeIcon icon={faMinusCircle}/>
            </td>
          </tr>
        ))
      }
      </tbody>
    </Table>
  );
}

export default FavoriteList;