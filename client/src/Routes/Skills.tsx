import React from "react"
import Chart from "chart.js"
import { Container, Row, Col, Image } from "react-bootstrap"

import node from "../Img/formation-node-js.png"
import reactLogo from "../Img/1200px-React-icon.svg.png"
import ts from "../Img/1-mn6bOs7s6Qbao15PMNRyOA-300x300.png"
import js from "../Img/1200px-Unofficial_JavaScript_logo_2.svg.png"
import py from "../Img/1200px-Python-logo-notext.svg.png"
import go from "../Img/logo_go.png"

const Skills = () => {
    
    React.useEffect(()=>{
        const ctx:any = document.getElementById('canvaTwo')
        ctx.getContext("2d")
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Frontend', 'Backend', 'Mobile', 'Webdesign', 'Webmarketing/SEO'],
                datasets: [
                    {
                        label: 'Compétence',
                        data: [80, 80, 35, 60, 35],
                        backgroundColor: 'rgba(33, 174, 163, 0.7)'
                    }
                ]
            },
            options: {
                legend: {
                    display: false,
                    labels: {
                        fontColor: "rgba(33, 174, 163)"
                    }
                },
                scales: {
                    yAxes: [{
                        display: false
                    }]
                },
                scale: {
                    gridLines: {
                        color: "rgba(255, 255, 255, 0.1)"
                    },
                    angleLines: {
                        color: "rgba(255, 255, 255, 0.1)"
                    },
                    ticks: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 100,
                        display: false
                    }
                }   
            }
        })
    }, [])

    return(
        <Container id="skills" style={{ height: "100%", width: "100%" }}>
            <Row style={{ height: "100%", width: "100%" }}>
                <Col xs={12} sm={6}>
                    <div className="wrap">
                        <div className="cube">
                            <Image src={node}></Image>
                            <Image src={reactLogo}></Image>
                            <Image src={py}></Image>
                            <Image src={js}></Image>
                            <Image src={ts}></Image>
                            <Image src={go}></Image>
                        </div>
                    </div>
                </Col>
                <Col style={{ height: "100%", width: "100%" }} className="d-flex align-items-center justify-content-center responsiveCanva">
                    <canvas id="canvaTwo"></canvas>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills