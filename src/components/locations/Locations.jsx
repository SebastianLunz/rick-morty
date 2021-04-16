import React from 'react';
import UseFetch from "../shared/UseFetch";
import getRepository from "../shared/GetRepository";
import LocationList from "./LocationList";
import {Col, Row} from "reactstrap";
import PaginationLink from "../shared/PaginationLink";


function Locations() {
  const repository = "location";
  const repositoryUrl = window.location.href;
  const suffixUrl = getRepository(repositoryUrl);

  const {
    data: locations,
    dataInfo: locationsInfo,
    isLoading,
    isError,
    numberOfPages
  } = UseFetch(`https://rickandmortyapi.com/api/location${suffixUrl}`);


  return (
    <>
      <Row>
        <Col xs={12} sm={6}>
          <PaginationLink numberOfPages={numberOfPages} repository={repository}/>
        </Col>
        <Col xs={12} sm={6} className="text-sm-right mb-3 mb-sm-0">
          <h4 className="mb-3">
            Locations: {locationsInfo.count} /
            <small> {locationsInfo.pages} pages.</small>
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
        locations && locationsInfo &&
        <LocationList locations={locations}/>
      }
    </>
  );
}

export default Locations;