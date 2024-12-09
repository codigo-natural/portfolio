import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, User } from 'lucide-react';
// Necesitarás instalar emailjs-com
import emailjs from 'emailjs-com';

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'portfolio contact ', // Reemplazar con tu ID de servicio de EmailJS
        'template_7kfn0sg', // Reemplazar con tu ID de plantilla
        formData,
        '18L-HqxP-qP0gwWPn' // Reemplazar con tu clave pública de EmailJS
      );
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000); // Restaurar estado después de 5 segundos
    } catch (error) {
      setError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      console.error('Error al enviar el correo:', error);
    }
  };

  return (
    // <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
    <div className="relative min-h-screen text-gray-100">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div> */}
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Contáctanos</h2>
            <p className="text-gray-400">Desde las montañas de Boyacá hasta tu bandeja de entrada</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-amber-500 transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">Ubicación</h3>
                  <p className="text-gray-400">Boyacá, Colombia</p>
                </div>
              </div>
              {/* <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-amber-500 transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-gray-400">+57 3204833432</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-amber-500 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-400">contacto-ivancamilo@gmail.com</p>
                </div>
              </div> */}
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <User className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors duration-300"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <span>{isSubmitted ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}</span>
                <Send className="w-5 h-5" />
              </button>
              {error && <p className="text-red-500 text-center">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
