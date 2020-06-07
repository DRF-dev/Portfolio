import React from "react"
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap"
import { Notyf } from "notyf"
import axios from "axios"

import Linkedin from "../Img/linkedin.png"
import Github from "../Img/logo_github_blueV2.png"

const notif = new Notyf()
const Contact = () => {
    const [name, setName] = React.useState<string>('')
    const [entreprise, setEntreprise] = React.useState<string>('')
    const [message, setMessage] = React.useState<string>('')

    const envoi = async () => {
        if(name === '' || entreprise === '' || message === '') return notif.error("L'un des champs est vide")
        const messWithName = { name, entreprise, message }
        
        try {
            const response = await axios.post("/messages", messWithName)
            setName('')
            setEntreprise('')
            setMessage('')
            return notif.success(response.data.mess)
        } catch (error) {
            console.log(error)
            notif.error(error)
        }
    }

    return(
        <Container id="contact">
            <h1>Me contacter</h1>
            <Form className="mt-5" id="form" onSubmit={(e:any) => { e.preventDefault(); envoi() }}>
                <Row>
                    <Col xs={12} sm={6}>
                        <Form.Group>
                            <Form.Control placeholder="Nom" value={name} onChange={e => setName(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Form.Group>
                            <Form.Control placeholder="Entreprise" value={entreprise} onChange={e => setEntreprise(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12}>
                        <Form.Group>
                            <Form.Control as="textarea" value={message} rows={8} placeholder="Message" onChange={e => setMessage(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" variant="outline-light">Envoyer</Button>
            </Form>
            <Row className="mt-4 ml-3">
                <Col sm={4} className="offset-sm-2 responsive">
                    <a href="https://www.linkedin.com/in/dany-francisco-dev-junior/" target="_blank" rel="noopener noreferrer"><Image src={Linkedin} fluid /></a>
                </Col>
                <Col sm={4} className="offset-sm-2 responsive">
                    <a href="https://github.com/DRF-dev" target="_blank" rel="noopener noreferrer"><Image src={Github} fluid /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact