import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import NavbarItem from './NavbarItem';
import Routes from "../constants/Routes";
import React from "react";
import navbarItems from './NavbarItems';

class PageNavbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    const isOpen = !this.state.isOpen;
    this.setState({isOpen});
  };

  render() {
    const {isOpen} = this.state;
    return (
      <Navbar color="dark" dark expand="md" className="mb-4">
        <NavbarBrand href={Routes.ROOT}>Rick & Morty</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              navbarItems.map((navbarItem) =>
                <NavbarItem
                  exact={navbarItem.exact}
                  icon={navbarItem.icon}
                  key={navbarItem.path}
                  name={navbarItem.name}
                  path={navbarItem.path}
                />
              )
            }
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default PageNavbar;
