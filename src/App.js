import React from "react";
import './App.css';
import PageNavbar from "./components/navbar/PageNavbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Routes from "./components/constants/Routes";
import Characters from "./components/characters/Characters";
import Locations from "./components/locations/Locations";
import Episodes from "./components/episodes/Episodes";
import Favorites from "./components/favorites/Favorites";
import Dashboard from "./components/dashboard/Dashboard";
import {Container} from "reactstrap";


function App() {
  return (
    <Router>
      <PageNavbar/>
      <Container>
        <Switch>
          <Route path={Routes.CHARACTER} render={() => <Characters/>}/>
          <Route path={Routes.LOCATION} render={() => <Locations/>}/>
          <Route path={Routes.EPISODE} render={() => <Episodes/>}/>
          <Route path={Routes.FAVORITE} render={() => <Favorites/>}/>
          <Route exact path={Routes.ROOT} render={() => <Dashboard/>}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
