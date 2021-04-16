import React from 'react';
import Logo from '../shared/Logo';
import {Button, Col, Jumbotron, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Routes from '../constants/Routes';

const Dashboard = () => {
  return (
    <Jumbotron>
      <Row>
        <Col xs={12} xl={4}>
          <Logo className="w-100"/>
        </Col>
        <Col xs={12} xl={8}>
          <h1 className="display-3 font-weight-normal">Rick & Morty</h1>
          <p className="lead">
            This is a simple application allows you to browse
            characters of Rick & Morty series and make a list of favorite.</p>
          <hr className="my-2"/>
          <p className="lead">Just for fun.</p>
          <br/>
          <p className="lead">
            <Button color="success" size="lg" tag={Link} to={Routes.CHARACTER}>Let's start...</Button>
          </p>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Dashboard;