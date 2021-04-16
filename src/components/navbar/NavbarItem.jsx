import React from "react";
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarItem({ exact, icon, name, path }) {
  return (
      <NavItem>
        <NavLink tag={ RouterNavLink } to={ path } activeClassName="active" exact={ exact }>
          <FontAwesomeIcon icon={icon}/>
          { ' ' }
          { name }
        </NavLink>
      </NavItem>
  );
}

export default NavbarItem;