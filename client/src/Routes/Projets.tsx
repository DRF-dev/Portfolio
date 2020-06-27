import React from "react"
import { Container, Row } from "react-bootstrap"
import DetailsProjets from "../Components/DetailsProjets"
import { revealFunction } from "../Components/Functions"

import node from "../Img/formation-node-js.png"
import ts from "../Img/1-mn6bOs7s6Qbao15PMNRyOA-300x300.png"
import js from "../Img/1200px-Unofficial_JavaScript_logo_2.svg.png"
import logoReact from "../Img/1200px-React-icon.svg.png"
import socket from "../Img/socket.png"
import py from "../Img/1200px-Python-logo-notext.svg.png"
import flask from "../Img/flask.png"
import mongoDB from "../Img/1200px-MongoDB-Logo.svg.png"
import go from "../Img/logo_go.png"

const Projets = () => {

    React.useEffect(()=>{
        revealFunction("reveal", "anim")
    }, [])

    return(
        <Container id="projets" className="mt-5">
            <h1>Quelques projets</h1>
            <div className="mt-5">
                <Row>
                    <DetailsProjets nom="Ce portfolio" images={[node, js, ts, logoReact, mongoDB]} lien="https://github.com/DRF-dev/Portfolio" />
                    <DetailsProjets nom="Authentification par JWT" images={[node, js, ts, logoReact, mongoDB]} lien="https://github.com/DRF-dev/Authentification_jwt" />
                </Row>
                <Row className="mt-sm-5">
                    <DetailsProjets nom="Chat & todo-liste en temps réel" images={[node, js, logoReact, socket]} lien="https://github.com/DRF-dev/Todo-liste-en-temps-reel" />
                    <DetailsProjets nom="Jeux du pendu" images={[go]} lien="https://github.com/DRF-dev/jeux_du_pendu" />
                </Row>
                <Row className="mt-sm-5">
                    <DetailsProjets nom="CRUD en CLI" images={[go]} lien="https://github.com/DRF-dev/CRUD_CLI" />
                    <DetailsProjets nom="Page d'informations sur la machine" images={[py, flask]} lien="https://github.com/DRF-dev/firstFlask" />
                </Row>
            </div>
        </Container>
    )
}

export default Projets