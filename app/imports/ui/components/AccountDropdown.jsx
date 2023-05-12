import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons/faChessPawn';
import { ComponentIDs } from '../utilities/ids';

const AccountDropdown = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : 'Guest',
  }), []);
  // If not logged in, the dropdown:
  //   shows a sign-in form to log in
  // Else
  //   shows links to account pages
  return (
    <Nav className="justify-content-end">
      {currentUser === 'Guest' ? (
        <NavDropdown
          id={ComponentIDs.loginDropdown}
          title={(<FontAwesomeIcon icon={faChessPawn} />)}
          align="end"
        >
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
        <NavDropdown id={ComponentIDs.currentUserDropdown} title={<FontAwesomeIcon icon={faChessPawn} />}>
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

export default AccountDropdown;
