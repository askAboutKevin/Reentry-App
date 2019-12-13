import React from 'react';
import {Jumbotron, Container} from 'reactstrap';

function MissionPage(props) {
  return (
    <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Our Mission? It's simple.</h1>
          <h2 className="display-3">Help Formerly incarcerated individuals find jobs.</h2>
          <br/><br/>
          <h1> Recidivism rates in America are currently over 40%.</h1> <br/>
          <h3>A large contributing factor is the <strong>inability to find job placement</strong>.</h3> <br/>
          <h5>We want to make it <strong>easier</strong> for formerly incarcerated individuals (FIIs) to <strong>find gainful employment</strong>.</h5> <br/>
          <h5>Our application Reentry allows FIIs to market themselves to potential employers while also allowing businesses to easily view FIIs for hire.</h5>
          <h5>FIIs can onboard to our site to have their information visible to employers in their area. Businesses can post jobs exclusively on our Jobs Board. </h5>
          <h5>While other organizations like 70 Million Jobs post FII-friendly jobs on their site, they're often times from large corporations. </h5>
              
              <h5>Reentry aims to bring spotlight to small and medium-sized businesses.</h5> <br/>
        <h5>Reentry is also the<strong> first and only</strong> organization that allows FIIs to <strong>market themselves directly </strong>to potential employers.</h5>
        </Container>
      </Jumbotron>
  );
}

export default MissionPage;