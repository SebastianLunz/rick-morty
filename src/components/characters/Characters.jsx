import React, {useState} from 'react';
import UseFetch from "../shared/UseFetch";
import getRepository from "../shared/GetRepository";
import CharacterList from "./CharacterList";
import PaginationLink from "../shared/PaginationLink";
import {Col, Row} from "reactstrap";
import {setFavorite, getFavorite} from "../favorites/FavoriteStorage";


function Characters() {
  const repository = "character";
  const repositoryUrl = window.location.href;
  const suffixUrl = getRepository(repositoryUrl);

  const {
    data: characters,
    dataInfo: charactersInfo,
    isLoading,
    isError,
    numberOfPages
  } = UseFetch(`https://rickandmortyapi.com/api/character${suffixUrl}`);

  const [addedToFavorite, setAddedToFavorite] = useState(() => {
    const favorites = getFavorite();
    return favorites.map(favorite => favorite.id);
  });

  function handleAddToFavoriteClick(character) {
    setFavorite(character);
    const updatedAddedToFavorite = [...addedToFavorite];
    updatedAddedToFavorite.push(character.id);
    setAddedToFavorite(updatedAddedToFavorite);
  }

  return (
    <>
      <Row>
        <Col xs={12} sm={6}>
          <PaginationLink numberOfPages={numberOfPages} repository={repository}/>
        </Col>
        <Col xs={12} sm={6} className="text-sm-right mb-3 mb-sm-0">
          <h4 className="mb-3">
            Characters: {charactersInfo.count} /
            <small> {charactersInfo.pages} pages.</small>
          </h4>
        </Col>
      </Row>
      {
        isError && <div>{isError}</div>
      }
      {
        isLoading && <div>{isLoading}</div>
      }
      {
        characters && charactersInfo &&
        <CharacterList
          characters={characters}
          handleAddToFavoriteClick={handleAddToFavoriteClick}
          addedToFavorite={addedToFavorite}
        />
      }
      <PaginationLink numberOfPages={numberOfPages}/>
    </>
  );
}

export default Characters;