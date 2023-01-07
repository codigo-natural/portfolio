import React from "react"
import './contact.css'
import { HiOutlineMail } from "react-icons/hi"
import { RiMessengerLine } from "react-icons/ri"
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
          <div className="contact__option">
            <a
              href="mailto:buitragoivancamilo1025@gmail.com"
              rel="noreferrer"
              target="_blank">
              < HiOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>buitragoivancamilo1025@gmail.com</h5>
              Send a Message
            </a>
          </div>

          <div className="contact__option">
            <a
              href="https://m.me/ivan.buitrago.988/"
              rel="noreferrer"
              target="_blank"
            >
              < RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Iván Camilo</h5>
              Enviar mensaje
            </a>
          </div>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <div className="contact_form-div">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              id=""
            />
          </div>
          <div className="contact_form-div">
            <label htmlFor="">email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              id=""
            />
          </div>
          <div className="contact_form-div">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              id=""
              cols=""
              rows="7"
              placeholder="Your Message"
              required>
            </textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar mensaje</button>
        </form>
      </div>
    </section >
  )
}

export default Contact