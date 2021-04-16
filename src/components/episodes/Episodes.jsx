import React from 'react';
import getRepository from "../shared/GetRepository"
import UseFetch from "../shared/UseFetch";
import EpisodeList from "./EpisodeList";
import PaginationLink from "../shared/PaginationLink";
import {Col, Row} from "reactstrap";


function Episodes() {
  const repository = "episode";
  const repositoryUrl = window.location.href;
  const suffixUrl = getRepository(repositoryUrl);

  const {
    data: episodes,
    dataInfo: episodesInfo,
    isLoading,
    isError,
    numberOfPages
  } = UseFetch(`https://rickandmortyapi.com/api/episode${suffixUrl}`);


  return (
    <>
      <Row>
        <Col xs={12} sm={6}>
          <PaginationLink numberOfPages={numberOfPages} repository={repository}/>
        </Col>
        <Col xs={12} sm={6} className="text-sm-right mb-3 mb-sm-0">
          <h4 className="mb-3">
            Episodes: {episodesInfo.count} /
            <small> {episodesInfo.pages} pages.</small>
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
        episodes && episodesInfo &&
        <EpisodeList episodes={episodes}/>
      }
    </>
  );
}

export default Episodes;