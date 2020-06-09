import React from "react"
import Chart from "chart.js"
import { Container } from "react-bootstrap"

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
        <Container className="d-flex align-items-center justify-content-center" style={{ height: "100%", width: "100%" }}>
            <canvas id="canvaTwo"></canvas>
        </Container>
    )
}

export default Skills