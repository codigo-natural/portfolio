import React from "react";
import './footer.css';
import { RiTwitterLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Code_Nature</a>

            <div className="footer__socials">
                <a href="https://www.instagram.com/ivan__camilo/" target="_blank">< FiInstagram /></a>
                <a href="https://web.facebook.com/ivan.buitrago.988/" target="_blank">< FiFacebook /></a>
                <a href="https://twitter.com/IvnCami19622110" target="_blank"> < RiTwitterLine /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Code_Nature. Derechos reservados</small></div>
        </footer>
    )
}

export default Footer