import React from "react";
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from "./HeaderSocials";
import { MdWavingHand } from 'react-icons/md';
import 'animate.css';


const Header = () => {
  return (
    <header>
      <div id="" className="container header__container">
        <p>
          <MdWavingHand
            style={{
              color: 'var(--color-white)',
              fontSize: '1.4rem'
            }}
            className='animate__animated animate__tada animate__infinite' />
          Hola soy
        </p>
        <h1>Ivan Camilo</h1>
        <h5 className="text-light"> Desarrollador web </h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="people" />
        </div>

        <a href="#about" className="scroll__down">
          Desplazarse </a>
      </div>

    </header>
  )
}

export default Header