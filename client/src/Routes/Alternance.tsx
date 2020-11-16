import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Chart from 'chart.js';

import Localisation from '../Img/Plan de travail 1.png';
import Sablier from '../Img/Plan de travail 1_1.png';
import Papyrus from '../Img/Plan de travail 1_2.png';

import { revealFunction } from '../Components/Functions';

const Alternance = () => {
  React.useEffect(() => {
    const ctx: any = document?.getElementById('canvaOne');
    ctx.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['1 semaine en école', '3 semaines en entreprises'],
        datasets: [{
          data: [1, 3],
          backgroundColor: ['red', 'green'],
        }],
      },
      options: {
        legend: {
          position: 'right',
          labels: {
            fontColor: 'white',
          },
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  React.useEffect(() => {
    revealFunction('animAlternance', 'anim');
  }, []);

  return (
    <Container id="alternance">
      <div>
        <Row>
          <p className="h5">
            De septembre 2020 à Août 2021, j'integrerai une 3ème année d'un
            Bachelor développeur digital. Je suis donc à la recherche d'un poste
            en tant que développeur web dans le cadre de ce dîplome.
          </p>
        </Row>
        <Row>
          <Col
            sm={6}
            xs={12}
            className="d-flex flex-row align-items-center animAlternance"
            style={{ opacity: 0 }}
          >
            <Row>
              <Col xs={2} sm={2} className="d-flex align-items-center">
                <Image src={Papyrus} fluid id="papyrus" />
              </Col>
              <Col xs={10} sm={10}>
                <p>Contrat ?</p>
                <p>Professionalisation ou d'apprentissage</p>
              </Col>
            </Row>
          </Col>
          <Col
            sm={6}
            xs={12}
            className="d-flex flex-row align-items-center animAlternance"
            style={{ opacity: 0 }}
          >
            <Row>
              <Col xs={2} sm={2} className="d-flex align-items-center">
                <Image src={Sablier} fluid id="sablier" />
              </Col>
              <Col xs={10} sm={10}>
                <p>Durée ?</p>
                <p>Contrat d'un an</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-sm-5">
          <Col
            sm={6}
            xs={12}
            className="d-flex flex-row align-items-center animAlternance"
            style={{ opacity: 0 }}
          >
            <Row>
              <Col xs={2} sm={2} className="d-flex align-items-center">
                <Image src={Localisation} />
              </Col>
              <Col xs={10} sm={10}>
                <p>Localisation ?</p>
                <p>Région Île-de-France</p>
              </Col>
            </Row>
          </Col>
          <Col sm={6} xs={12} className="mt-3 mt-sm-0">
            <canvas id="canvaOne"></canvas>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Alternance;
