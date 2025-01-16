import React from 'react';
import '../css/AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me-section">
            <div className="content-wrapper">
                <div className="left-column">
                    <h1>Olá! Eu sou a Thalita</h1>
                    <p className="bio-text">
                        Sou apaixonada por ler, escrever e explorar as ruas de Recife. 
                        Me formei em Sistemas para Internet pela <br />Universidade Católica de Pernambuco, e desde então venho me aprofundando em desenvolvimento web, 
                        buscando sempre aprender novas ferramentas e melhorar minhas habilidades.
                    </p>
                    <p className="interests-text">
                        Quando não estou programando, gosto de passeios tranquilos pela cidade, apreciando o que Recife tem de melhor: 
                        suas praias, arquitetura e, claro, suas histórias. Leitura e escrita são minha forma de relaxar e, muitas vezes, 
                        me ajudam a encontrar novas inspirações para os meus projetos.
                    </p>
                </div>
                <div className="right-column">
                    <section className="education">
                        <h2>Minha Formação</h2>
                        <p>
                            Me formei em <strong>Sistemas para Internet</strong> pela <strong>Universidade Católica de Pernambuco</strong>, onde aprendi fundamentos sólidos de programação e desenvolvimento, além de me envolver em projetos que me ajudaram a aprimorar minhas habilidades técnicas e criativas.
                        </p>
                    </section>
                    <section className="future-goals">
                        <h2>Meus Objetivos</h2>
                        <p>
                            Estou sempre em busca de novos desafios. Meu objetivo é continuar me desenvolvendo como profissional, contribuir com soluções inovadoras e, principalmente, trabalhar em projetos que gerem impactos!
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
