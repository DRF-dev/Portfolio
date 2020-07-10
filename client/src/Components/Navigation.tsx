import React from "react"
import { Col, Row } from "react-bootstrap" 
import { Link } from "react-router-dom"

const Navigation = () => {
    return(
        <Row id="navigation">
            <Col style={{ height: "100%", width: "100%" }}>
                <ul>
                    <li><Link to="/accueil" className="text-decoration-none">Accueil</Link></li>
                    <li><Link to="/alternance" className="text-decoration-none">Alternance</Link></li>
                    <li><Link to="/projets" className="text-decoration-none">Projets</Link></li>
                    <li><Link to="/skills" className="text-decoration-none">Compétences</Link></li>
                    <li><Link to="/contact" className="text-decoration-none">Contact</Link></li>
                </ul>
            </Col>
        </Row>
    )
}

export default Navigation