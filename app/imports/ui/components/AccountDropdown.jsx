import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessBoard } from '@fortawesome/free-solid-svg-icons/faChessBoard';
import { ComponentIDs } from '../utilities/ids';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  return (
    <Nav className="justify-content-end">
      {currentUser === '' ? (
        <NavDropdown id={ComponentIDs.loginDropdown} title={<PersonFill />}>
          <NavDropdown.Item id={ComponentIDs.loginDropdownSignIn} as={NavLink} to="/signin">
            <PersonFill />
            Sign
            in
          </NavDropdown.Item>
          <NavDropdown.Item id={ComponentIDs.loginDropdownSignUp} as={NavLink} to="/signup">
            <PersonPlusFill />
            Sign
            up
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <NavDropdown id={ComponentIDs.currentUserDropdown} title={<PersonFill />}>
          <NavDropdown.Item id={ComponentIDs.currentUserDropdownSignOut} as={NavLink} to="/signout">
            <BoxArrowRight />
            {' '}
            Sign
            out
          </NavDropdown.Item>
        </NavDropdown>
      )}
    </Nav>
  );
};

export default NavBar;
