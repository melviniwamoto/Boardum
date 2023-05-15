import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowLeft, GearFill, HouseFill, PersonFill, PersonFillAdd } from 'react-bootstrap-icons';
import { ComponentIDs as ids, ComponentIDs } from '../utilities/ids';
import SiteLogo from './SiteLogo';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser, loggedIn } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : 'Guest',
    loggedIn: !!Meteor.user(),
  }), []);
  const noteBackground = {
    margin: '0px',
  };
  const menuStyle = {
    marginBottom: '0px',
  };
  const logoStyle = {
    fontSize: '24px',
    fontWeight: '600',
  };
  const dropdownTitle = (
    <div>
      {`${currentUser}`}
      {' '}
      <PersonFill className="mb-1" />
    </div>
  );
  const navbarClassName = loggedIn ? 'bg-dark' : 'bg-light';
  return (
    <Navbar
      expand="lg"
      style={menuStyle}
      className={navbarClassName}
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="align-items-center">
          <SiteLogo style={logoStyle} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={ComponentIDs.basicNavbarNav} />
        <Navbar.Collapse id={ComponentIDs.basicNavbarNav}>
          <Nav className="me-auto justify-content-start">
            <Nav.Link
              as={NavLink}
              id={ComponentIDs.homeMenuItem}
              to="/home"
              key="home"
            >
              <HouseFill className="mb-1" />
              {' Home'}
            </Nav.Link>
            <Nav.Link as={NavLink} id={ComponentIDs.profilesMenuItem} to="/profiles" key="profiles">Profiles</Nav.Link>
            <Nav.Link as={NavLink} id={ComponentIDs.projectsMenuItem} to="/projects" key="projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} id={ComponentIDs.interestsMenuItem} to="/interests" key="interests">Interests</Nav.Link>
            {currentUser === 'Guest' ? '' : (
              [<Nav.Link as={NavLink} id={ComponentIDs.addProjectMenuItem} to="/addProject" key="addP">Add Project</Nav.Link>,
                <Nav.Link as={NavLink} id={ComponentIDs.filterMenuItem} to="/filter" key="filter">Filter</Nav.Link>]
            )}
          </Nav>
          <Nav>
            <NavDropdown
              id={ids.navbarAccountDropdown}
              title={dropdownTitle}
              align="end"
              style={noteBackground}
            >
              {currentUser === 'Guest' ? (
                <>
                  <NavDropdown.Item
                    id={ids.navbarSignIn}
                    as={NavLink}
                    to="/signin"
                  >
                    <PersonFill />
                    Sign
                    in
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    id={ids.navbarSignUp}
                    as={NavLink}
                    to="/signup"
                  >
                    <PersonFillAdd />
                    Sign
                    up
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item
                    id={ids.navbarSettings}
                    as={NavLink}
                    to="/settings"
                  >
                    <GearFill />
                    {' '}
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    id={ids.navbarSignOut}
                    as={NavLink}
                    to="/signout"
                  >
                    <BoxArrowLeft />
                    {' '}
                    Sign
                    out
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
