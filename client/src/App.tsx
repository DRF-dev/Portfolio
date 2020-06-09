import React from 'react';
import './Style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'notyf/notyf.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Row, Col } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Navigation from "./Components/Navigation"
import Accueil from "./Routes/Accueil"
import Alternance from "./Routes/Alternance"
import Projets from "./Routes/Projets"
import Skills from "./Routes/Skills"
import Contact from "./Routes/Contact"

const App = () => {
	return(
		<Router>
			<Row style={{ height: "100vh", width: "100vw" }} id="app">
				<Col sm={2}>
					<Navigation />
				</Col>
				<Col sm={10}>
					<Switch>
						<Route exact path="/accueil" component={Accueil} />
						<Route exact path="/alternance" component={Alternance} />
						<Route exact path="/projets" component={Projets} />
						<Route exact path="/skills" component={Skills} />
						<Route exact path="/contact" component={Contact} />
						<Redirect to="/accueil" />
					</Switch>
				</Col>
			</Row>
		</Router>
	)
}

export default App;
