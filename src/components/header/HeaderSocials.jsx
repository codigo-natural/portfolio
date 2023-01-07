import React from "react";
import {FaUnsplash} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.instagram.com/ivan__camilo/" rel="noreferrer" target='_blank'>< FaInstagram /></a>
            <a href="https://github.com/codigo-natural" target='_blank'>< BsGithub /></a>
            <a href="https://unsplash.com/@camilo_0101" target='_blank'>< FaUnsplash /></a>
        </div>
    )
}

export default HeaderSocials