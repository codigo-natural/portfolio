import React from "react";
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hola, soy</h5>
                <h1>Ivan Camilo</h1>
                <h5 className="text-light"> Desarrollador web </h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="my picture" />
                </div>

                <a href="#about" className="scroll__down">
                    Desplazarse </a>
            </div>

        </header>
    )
}

export default Header