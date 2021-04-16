import React, {useState} from 'react';
import UseFetch from "../shared/UseFetch";
import getRepository from "../shared/GetRepository";
import CharacterList from "./CharacterList";
import PaginationLink from "../shared/PaginationLink";
import {Col, Row} from "reactstrap";
import {setFavorite, amountOfAddedToFavorites} from "../favorites/FavoriteStorage";


function Characters() {
  const repository = "character";
  const repositoryUrl = window.location.href;
  const suffixUrl = getRepository(repositoryUrl);

  const [data, setData] = useState([]);

  const {
    data: characters,
    dataInfo: charactersInfo,
    isLoading,
    isError,
    numberOfPages
  } = UseFetch(`https://rickandmortyapi.com/api/character${suffixUrl}`);

  function handleAddToFavoriteClick(character) {
    setFavorite(character);
    setData(amountAdded);
  }

  const amountAdded = amountOfAddedToFavorites();

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
          amountAdded={amountAdded}
        />
      }
      <PaginationLink numberOfPages={numberOfPages}/>
    </>
  );
}

export default Characters;