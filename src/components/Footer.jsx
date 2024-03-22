import React, { useState } from 'react';
import { contactSocialMedia } from '../constants';

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto p-6 rounded-lg shadow-md" id='contact'>
      <h2 className="h2 text-center mb-12">Contacto</h2>
      <div className='relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem] '>
        <div className='w-[19rem] max-lg:w-full h-full px-6 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3'>
          <h3 className='text-color-2'>¡Hablemos!</h3>
          <p>Estoy emocionado de conocerte y hablar sobre tus ideas y proyectos. Contáctame para obtener más información, discutir oportunidades de colaboración o recibir asesoramiento en cualquier área.</p>
          <p>¡Espero tu mensaje para empezar!</p>
          <br />
          <ul className="flex items-center justify-between">
            {contactSocialMedia.map((item, index) => (
              <li
                key={index}
                className="rounded-2xl flex items-center justify-center
                    p-0.25 md:w-[4.5rem] md:h-[4.5rem]
                    w-10 h-10"
              >
                <a
                  key={index}
                  href={item.url}
                  className="flex items-center justify-center w-full h-full bg-n-5 rounded-[1rem]"
                >
                  <img
                    src={item.icon}
                    width={40}
                    height={40}
                    alt={item}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                className="block w-full px-4 py-2 border rounded-md bg-transparent focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="block w-full px-4 py-2 border rounded-md bg-transparent focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje"
                rows={4}
                className="block w-full px-4 py-2 border rounded-md bg-transparent focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div >
  );
};
