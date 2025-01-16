import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Introduction.css';
import logo from '../assets/icon.png';

const Introduction = () => {
  return (
    <section className="introduction-section">
      <div className="content-wrapper">
        <div className="left-column">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Bem-vindo ao meu portfólio!</h1>
          <p className="intro-text">
            Sou uma desenvolvedora apaixonada por criar soluções inovadoras que combinam tecnologia e criatividade.
          </p>
          <Link to="/projects" className="btn-primary">Veja meus Projetos</Link>
        </div>
        <div className="right-column">
          <section className="skills">
            <h2>Minhas Habilidades</h2>
            <ul>
              <li>🌐 Frontend: React, JavaScript, HTML, CSS, Next, TypeScript</li>
              <li>🔙 Backend: Node.js, PHP, Express, Nest</li>
              <li>🔧 Ferramentas: Git, Docker, Webpack</li>
              <li>🎨 Design Responsivo e UX/UI</li>
              <li>⚙️ Integrações com APIs e Bancos de Dados</li>
            </ul>
          </section>
          <section className="objective">
            <h2>Meu Objetivo</h2>
            <p>
              Criar soluções que melhorem a vida das pessoas, aprender continuamente e me desafiar em projetos impactantes.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
