import React from "react"
import { Container, Row } from "react-bootstrap"
import DetailsProjets from "../Components/DetailsProjets"
import { revealFunction } from "../Components/Functions/revealFunction"

import node from "../Img/formation-node-js.png"
import ts from "../Img/1-mn6bOs7s6Qbao15PMNRyOA-300x300.png"
import js from "../Img/1200px-Unofficial_JavaScript_logo_2.svg.png"
import logoReact from "../Img/1200px-React-icon.svg.png"
import socket from "../Img/socket.png"
import py from "../Img/1200px-Python-logo-notext.svg.png"
import flask from "../Img/flask.png"
import kotlin from "../Img/1200px-Kotlin-logo.svg.png"
import php from "../Img/1024px-PHP-logo.svg.png"
import cake from "../Img/téléchargement.png"

const Projets = () => {

    React.useEffect(()=>{
        revealFunction("reveal", "anim")
    }, [])

    return(
        <Container id="projets" className="mt-5">
            <h1>Quelques projets</h1>
            <div className="mt-5">
                <Row>
                    <DetailsProjets nom="Authentification par JWT" images={[node, js, ts, logoReact]} lien="https://github.com/DRF-dev/Authentification_jwt" />
                    <DetailsProjets nom='Gestion de jeux (CRUD)' images={[node, js, ts, logoReact]} lien="https://github.com/DRF-dev/Games-js" />
                </Row>
                <Row className="mt-sm-5">
                    <DetailsProjets nom="Chat & todo-liste en temps réel" images={[node, js, ts, logoReact, socket]} lien="https://github.com/DRF-dev/Todo-liste-en-temps-reel" />
                    <DetailsProjets nom="Gestion d'émission de radio (CRUD)" images={[php, cake]} lien="https://github.com/DRF-dev/Radio-CakePHP" />
                </Row>
                <Row className="mt-sm-5">
                    <DetailsProjets nom="Page d'informations sur la machine" images={[py, flask]} lien="https://github.com/DRF-dev/firstFlask" />
                    <DetailsProjets nom="Compteur de clic" images={[kotlin]} lien="https://github.com/DRF-dev/compteurClickKotlin" />
                </Row>
            </div>
        </Container>
    )
}

export default Projets