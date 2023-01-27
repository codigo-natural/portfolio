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
          Mi nombre es Camilo y soy un desarrollador web con experiencia en la creación y implementación de proyectos en línea. Mi interés en el campo comenzó en 2019, cuando tuve la oportunidad de aprender sobre el lenguaje de programación JavaScript en mi último año de educación secundaria. Desde entonces, he continuado desarrollando mis habilidades y conocimientos en el campo del desarrollo web, buscando siempre mejorar y ampliar mi experiencia en el campo.
          </p>

          <a href="#contact" className="btn btn-primary">Hablemos</a>
        </div>

      </div>
    </section>
  )
}

export default About