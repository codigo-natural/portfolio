import React from "react"
import './contact.css'
import { HiOutlineMail } from "react-icons/hi"
import { RiMessengerLine } from "react-icons/ri"
import { FaWhatsapp } from "react-icons/fa"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oaoobcq', 'template_7kfn0sg', form.current, '18L-HqxP-qP0gwWPn')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            < HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>random@gmail.com</h5>
            <a href="mailto:buitragoivancamilo1025@gmail.com" target="_blank"> Send a Message </a>
          </article>

          <article className="contact__option">
            < RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Code_NNature</h5>
            <a href="https://m.me/ivan.buitrago.988/" target="_blank"> Enviar mensaje </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <input type="text" name="name" placeholder="Your Full Name" required id="" />
          <input type="email" name="email" placeholder="Your Email" required id="" />
          <textarea name="message" id="" cols="" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar mensaje</button>
        </form>
      </div>
    </section >
  )
}

export default Contact