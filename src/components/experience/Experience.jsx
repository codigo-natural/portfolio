import React from "react";
import './experience.css';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiSass, DiReact, DiJavascript1 } from 'react-icons/di';
import { FaBootstrap, FaGitSquare } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Mis Abilidades</h2>

      <div className="container experience__container">
        <div className="experience__details">
          <AiFillHtml5 className="i" />
          <p>HTML</p>
          <small>Markup Language</small>
        </div>
        <div style={{ background: 'var(--color-primary)', color: 'var(--color-bg)' }} className="experience__details">
          <DiCss3 className='i' />
          <p>CSS</p>
          <small>Style Sheets</small>
        </div>
        <div style={{ background: 'var(--color-white)', color: 'var(--color-bg)' }} className="experience__details">
          <DiSass className='i' />
          <p>SASS/SCSS</p>
          <small>Stylesheet Language</small>
        </div>
        <div style={{ background: 'var(--color-light)', color: 'var(--color-bg)' }} className="experience__details">
          <FaBootstrap className='i' />
          <p>Bootstrap</p>
          <small>CSS framework</small>
        </div>
        <div style={{ border: '1px solid var(--color-primary)', background: 'transparent', color: 'var(--color-primary)' }} className="experience__details">
          <DiJavascript1 className='i' />
          <p>JavaScript</p>
          <small>Programming Language</small>
        </div>
        <div className="experience__details">
          <DiReact className='i' />
          <p>React</p>
          <small>JS Library</small>
        </div>
        <div style={{ background: 'var(--color-primary)', color: 'var(--color-bg)' }} className="experience__details">
          <FaGitSquare className='i' />
          <p>Git</p>
          <small>Version control system</small>
        </div>
        <div style={{ background: 'var(--color-white)', color: 'var(--color-bg)' }} className="experience__details">
          <AiFillGithub className='i' />
          <p>GitHub</p>
          <small>Hosting service</small>
        </div>
      </div>
    </section >
  )
}

export default Experience