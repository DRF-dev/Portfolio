import React from "react"
import { Col, Row, Image, Button } from 'react-bootstrap'
import Githubjudo from "../Img/github_judo.png"
import Typewriter from "typewriter-effect/dist/core"

import cv from "../Img/CV_Francisco_Dany.pdf"

const Accueil = () => {

    React.useEffect(()=>{
        var app = document.getElementById('metiers');
        var typewriter = new Typewriter(app, { loop: true });
        const duree = 1500
        typewriter.typeString('Développeur web').pauseFor(duree).deleteChars(3)	
            .typeString('frontend').pauseFor(duree).deleteChars(8)
            .typeString('backend').pauseFor(duree).deleteChars(7)
            .typeString('JavaScript').pauseFor(duree).deleteChars(10)
            .typeString('TypeScript').pauseFor(duree).deleteAll()
            .typeString('Judoka').pauseFor(duree).deleteAll()
            .start();
    }, [])

    return(
        <Row id="accueil" className="mt-3 mt-sm-0">
            <Col sm={7} xs={12} className="presentation">
                <h1>Salut,</h1>
                <h1>Je suis <span>Dany</span></h1>
                <p><span id="metiers"></span></p>
                <p><a href={cv} download><Button variant="outline-light">Télécharger mon CV</Button></a></p>
            </Col>
            <Col sm={5} xs={12}>
                <Image src={Githubjudo} fluid/>
            </Col>
        </Row>
    )
}

export default Accueil