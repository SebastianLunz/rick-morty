import React from "react";
import {Table} from 'reactstrap';
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CharacterList({characters, handleAddToFavoriteClick, addedToFavorite}) {

  return (
    <Table hover striped responsive>
      <thead className="thead-dark">
      <tr>
        <th>Name</th>
        <th>Species</th>
        <th>Status</th>
        <th>Image</th>
        <th style={{textAlign: "center"}}>Added to favorite</th>
      </tr>
      </thead>
      <tbody>
      {
        characters.map(character => (
          <tr
            key={character.id}
            onClick={() => handleAddToFavoriteClick(character)}
            style={{cursor: "pointer"}}
          >
            <td>{character.name}</td>
            <td>{character.species}</td>
            <td>{character.status}</td>
            <td>
              <img
                src={character.image}
                alt={character.name}
                style={{width: "auto", height: "70px"}}
              />
            </td>
            <td style={{textAlign: "center"}}>
              <FontAwesomeIcon
                style={addedToFavorite.includes(character.id)
                  ? {color: "green"}
                  : {color: "#cecece", fontSize: "12px"}
                }

                icon={faCheck}
              />
            </td>
          </tr>
        ))
      }
      </tbody>
    </Table>
  );
}

export default CharacterList;