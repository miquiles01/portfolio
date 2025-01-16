import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h1>Entre em Contato</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Escreva sua mensagem"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
