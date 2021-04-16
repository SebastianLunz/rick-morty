import React from "react";
import {Table} from "reactstrap";

function LocationList({locations}) {

  return (
    <Table striped hover responsive>
      <thead className="thead-dark">
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Type</th>
        <th>Dimension</th>
      </tr>
      </thead>
      <tbody>
      {
        locations.map(location => (
          <tr key={location.id}>
            <td>{location.id}</td>
            <td>{location.name}</td>
            <td>{location.type}</td>
            <td>{location.dimension}</td>
          </tr>
        ))
      }
      </tbody>
    </Table>
  );
}

export default LocationList;