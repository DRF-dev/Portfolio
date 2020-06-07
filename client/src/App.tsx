import React from 'react';
import './Style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'notyf/notyf.min.css'
import { Row, Col } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Navigation from "./Components/Navigation"
import Accueil from "./Routes/Accueil"
import Alternance from "./Routes/Alternance"
import Projets from "./Routes/Projets"
import Skills from "./Routes/Skills"
import Contact from "./Routes/Contact"

const App = () => {
	const [hauteur, setHauteur] = React.useState<number>(window.innerHeight)
	const [largeur, setLargeur] = React.useState<number>(window.innerWidth)

	window.onresize = ()=>{
		setHauteur(window.innerHeight)
		setLargeur(window.innerWidth)
	}

	return(
		<Router>
			<Row style={{ height: hauteur, width: largeur }} id="app">
				<Col sm={2}>
					<Navigation/>
				</Col>
				<Col>
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
