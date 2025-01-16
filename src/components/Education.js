import React from 'react';
import '../css/Education.css'; 

const Education = () => {
  return (
    <section className="education-section">
      <div className="container">
        <h2>Minha Formação</h2>
        <ul className="education-list">
          <li>📚 Ensino Médio - EREM Dantas Barreto</li>
          <li>🎓 Técnico em Administração - Instituto Federal de Pernambuco</li>
          <li>💻 Sistemas para Internet - Universidade Católica de Pernambuco</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
