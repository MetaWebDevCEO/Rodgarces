import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', requirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you ASAP.');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contactame para más información</h2>
          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">(403) 123 4123</span>
              <p className="info-email">Rodgarces@gmail.com</p>
            </div>
          </div>
        </div>
        <p className="contact-lead">Deja tu mensaje y me contactare contigo a la brevedad</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="nombre" placeholder="nombre" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="email" value={form.email} onChange={handleChange} required />
            <input type="tel" name="telefono" placeholder="telefono" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <select name="service" value={form.service} onChange={handleChange}>
              <option value="">Servicio Interesado</option>
              <option value="web-design">Talleres</option>
              <option value="branding">Conferencias</option>
              <option value="consulting">Consulta</option>
              <option value="capacitacion">Capacitación</option>
            </select>
          </div>
          <div className="form-row">
            <textarea name="requirements" placeholder="Describe tus requerimientos" rows="6" value={form.requirements} onChange={handleChange} required />
          </div>
          <button className="submit-btn" type="submit">
            <span className="submit-icon">↵</span> ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
