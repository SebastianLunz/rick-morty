import React from 'react';
import {Table} from "reactstrap";

function EpisodeList({episodes}) {

  return (
    <Table striped hover responsive>
      <thead className="thead-dark">
      <tr>
        <th>No.</th>
        <th>Episode</th>
        <th>Name</th>
        <th>Air date</th>
      </tr>
      </thead>
      <tbody>
      {
        episodes.map(episode => (
          <tr>
            <td>{episode.id}</td>
            <td>{episode.episode}</td>
            <td>{episode.name}</td>
            <td>{episode.air_date}</td>
          </tr>
        ))
      }
      </tbody>
    </Table>
  );
}

export default EpisodeList;