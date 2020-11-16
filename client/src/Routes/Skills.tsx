import React from 'react';
import Chart from 'chart.js';
import { Container, Row, Col, Image } from 'react-bootstrap';

import node from '../Img/formation-node-js.png';
import reactLogo from '../Img/1200px-React-icon.svg.png';
import ts from '../Img/1-mn6bOs7s6Qbao15PMNRyOA-300x300.png';
import js from '../Img/1200px-Unofficial_JavaScript_logo_2.svg.png';
import py from '../Img/1200px-Python-logo-notext.svg.png';
import go from '../Img/logo_go.png';
import Axios from 'axios';
import type { IResponseGitAPI } from '../../Interfaces';

const Skills = () => {
  const allSkills = () => {
    Axios.get<IResponseGitAPI>(
      'https://polar-escarpment-38923.herokuapp.com/git/skills',
    ).then(({ data }) => {
      const {
        JavaScript,
        TypeScript,
        Python,
        PHP,
        Java,
        Kotlin,
        Go,
        Docker,
        CSS,
        HTML,
      } = data;
      const ctx: any = document.getElementById('canvaTwo');
      ctx.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['JavaScript', 'PHP', 'CSS', 'HTML'],
          datasets: [{
            data: [JavaScript, PHP, CSS, HTML],
            backgroundColor: ['rgba(33, 174, 163, 0.7)', 'red', 'green', 'blue'],
          }],
        },
        options: {
          legend: {
            labels: {
              fontColor: 'white',
            },
          },
        },
      });
      const ctx2: any = document.getElementById('canvaThree');
      ctx2.getContext('2d');
      new Chart(ctx2, {
        type: 'doughnut',
        data: {
          labels: ['TypeScript', 'Python', 'Java', 'Kotlin', 'Go', 'Docker'],
          datasets: [
            {
              label: 'Back',
              data: [TypeScript, Python, Java, Kotlin, Go, Docker],
              backgroundColor: ['rgba(33, 174, 163, 0.7)', 'yellow', 'red', 'orange', 'aqua', 'blue'],
            },
          ],
        },
        options: {
          legend: {
            labels: {
              fontColor: 'white',
            },
          },
        },
      });
    });
  };

  React.useEffect(() => {
    allSkills();
  }, []);

  return (
    <Container id="skills" style={{ height: '100%', width: '100%' }}>
      <Row style={{ height: '100%', width: '100%' }}>
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
        <Col
          xs={12}
          sm={6}
          className="d-flex flex-column justify-content-around responsiveCanva"
        >
          <h1>Selon l'api Github :</h1>
          <div>
            <h2>Frontend</h2>
            <canvas id="canvaTwo"></canvas>
          </div>
          <div>
            <h2>Backend</h2>
            <canvas id="canvaThree"></canvas>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
