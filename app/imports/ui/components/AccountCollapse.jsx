import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, GearFill, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons/faChessPawn';
import { ComponentIDs } from '../utilities/ids';

const AccountCollapse = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  const dropdownTitle = (
    <div>
      {currentUser ? `${currentUser} ` : 'Guest '}
      <FontAwesomeIcon icon={faChessPawn} />
    </div>
  );
  // If not logged in, the dropdown:
  //   shows a sign-in form to log in
  // Else
  //   shows links to account pages
  return (
    <Nav className="justify-content-end">
      {currentUser === '' ? (
        <NavDropdown
          id={ComponentIDs.loginDropdown}
          title={dropdownTitle}
          align="end"
        >
          <NavDropdown.Item id={ComponentIDs.loginDropdownSignIn} as={NavLink} to="/signin">
            <PersonFill />
            {' '}
            Sign
            in
          </NavDropdown.Item>
          <NavDropdown.Item id={ComponentIDs.loginDropdownSignUp} as={NavLink} to="/signup">
            <PersonPlusFill />
            {' '}
            Sign
            up
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <NavDropdown
          id={ComponentIDs.currentUserDropdown}
          title={dropdownTitle}
          align="end"
        >
          <NavDropdown.Item
            id={ComponentIDs.currentUserDropdownHome}
            as={NavLink}
            to="/home"
          >
            <PersonFill className="p-0" /> Profile
          </NavDropdown.Item>
          <NavDropdown.Item
            id={ComponentIDs.currentUserDropdownSettings}
            as={NavLink}
            to="/settings"
          >
            <GearFill className="p-0" /> Settings
          </NavDropdown.Item>
          <NavDropdown.Item
            id={ComponentIDs.currentUserDropdownSignOut}
            as={NavLink}
            to="/signout"
          >
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

export default AccountCollapse;
