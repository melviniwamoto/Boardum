import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';
import SiteLogo from '../components/SiteLogo';

/* The hub for the website. */
const Landing = () => {
  const logoStyle = {
    backgroundImage: 'url("/images/vecteezy_white-ripped-paper-strips-collection-realistic-paper-scraps_12898436_435.png")',
    objectFit: 'fill',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'red',
    fontWeight: 800,
    fontSize: '48px',
  };
  return (
    <div id={PageIDs.landingPage}>
      <div className="landing-green-background">
        <Container className="text-center">
          <SiteLogo style={logoStyle} />
          <h3 style={{ paddingBottom: '20px', color: 'white' }}>
            Profiles, projects, and interest areas for the UH Community
          </h3>
        </Container>
      </div>
      <div className="landing-white-background">
        <Container className="justify-content-center text-center">
          <h2 style={{ color: '#376551' }}>Start by making your profile....</h2>
          <Row md={1} lg={2}>
            <Col xs={6}>
              <Image src="/images/home-page.png" width={500} />
            </Col>
            <Col xs={6}>
              <Image src="/images/profiles-page.png" width={500} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="landing-green-background">
        <Container className="justify-content-center text-center">
          <h2 style={{ color: 'white' }}>...then add your projects</h2>
          <Row md={1} lg={2}>
            <Col xs={6}>
              <Image src="/images/add-project-page.png" width={500} />
            </Col>
            <Col xs={6}>
              <Image src="/images/projects-page.png" width={500} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="landing-white-background text-center">
        <h2 style={{ color: '#376551' }}>
          Connect to people and projects with shared interests!
        </h2>
        <Container>
          <Row md={1} lg={2}>
            <Col xs={6}>
              <Image src="/images/interests-page.png" width={500} />
            </Col>
            <Col xs={6}>
              <Image src="/images/filter-page.png" width={500} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
