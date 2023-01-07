import React from "react";
import './about.css';
import ME from '../../assets/me-about.png';
import { FiAward } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id="about">
            <h2>Hacerca de mi</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FiAward className="about-icon" />
                            <h5>Experiencia</h5>
                            <small>3+ Años trabajando</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about-icon" />
                            <h5>Proyectos</h5>
                            <small>20+ Completados</small>
                        </article>

                    </div>
                    <p>
                        ¡Hola! Mi nombre es Camilo y disfruto creando cosas que viven en internet. Mi interés en el desarrollo web comenzó en 2019 cuando en el colegio a final de grado nos ensellaron algo de lo que tenia que ver con operaciones en javaScript, desde entonces empezo mi interez por la tecnologia web.
                    </p>

                    <a href="#contact" className="btn btn-primary">Hablemos</a>
                </div>

            </div>
        </section>
    )
}

export default About