import React from "react"
import { Col, Image } from "react-bootstrap"

const DetailsProjets: React.FunctionComponent<{ nom: string, images: any[], lien: string }> = ({ nom, images, lien }) => {
    return(
        <Col sm={6} className="mb-5 mb-sm-0 reveal" style={{ opacity: 0 }}>
            <h2 className="h4">{nom}</h2>
            <div className="d-flex flex-row align-items-center mb-2">
                {images.map(image => {
                    return <Image key={image} src={image} fluid style={{ width: "9%", marginLeft: "2%"}}/>
                })}
            </div>                        
            <a href={lien} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{lien}</a>
        </Col>
    )
}

export default DetailsProjets