import React, { lazy, Suspense } from 'react';
import './Style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'notyf/notyf.min.css';
import { Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navigation from './Components/Navigation';
import Loading from './Components/Loading';

const Accueil = lazy(() => import('./Routes/Accueil'));
const Alternance = lazy(() => import('./Routes/Alternance'));
const Projets = lazy(() => import('./Routes/Projets'));
const Skills = lazy(() => import('./Routes/Skills'));
const Contact = lazy(() => import('./Routes/Contact'));

const App = () => {
  return (
    <Router>
      <Row style={{ height: '100vh', width: '100vw' }} id="app">
        <Col sm={2}>
          <Navigation />
        </Col>
        <Col sm={10} className="scroll">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/accueil" component={Accueil} />
              <Route exact path="/alternance" component={Alternance} />
              <Route exact path="/projets" component={Projets} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/accueil" />
            </Switch>
          </Suspense>
        </Col>
      </Row>
    </Router>
  );
};

export default App;
