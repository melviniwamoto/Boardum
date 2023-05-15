import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/* The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => {
  const footerBackgroundStyle = {
    backgroundImage: 'url("/images/footer-background.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingTop: '1rem',
    paddingBottom: '3rem',
    marginTop: 'auto',
  };
  return (
    <footer className="footer" style={footerBackgroundStyle}>
      <Container>
        <Row>
          <Col className="text-center">
            <Row>
              <a href="https://guide.meteor.com/react.html">
                Meteor - React
              </a>
            </Row>
            <Row>
              <a href="https://react-bootstrap.github.io/">
                React - Bootstrap
              </a>
            </Row>
            <Row><a href="https://bowfolios.github.io">The Bowfolios Template</a></Row>
          </Col>
          <Col className="text-center">
            <Row><Col>Images:</Col></Row>
            <a href="https://pngtree.com/freepng/black-and-white-chess-board-chess-pieces_5983396.html">Chess Pieces Image from pngtree.com/</a>
            <br />
            <a href="https://pngtree.com/freepng/wooden-floor-table-background_8102889.html">Wooden Table from pngtree.com/</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
