import React from "react";
import CV from '../../assets/curriculum-Ivan-Camilo.pdf';

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Descargar curriculum</a>
            <a href="#contact" className="btn btn-primary">Hablemos</a>
        </div>
    )
}

export default CTA