import React, { useState, useEffect } from 'react';
import './style.css';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import projeto from '../Images/projeto_samsung.jpg';
import qrcode from '../Images/qrcode.png';
import lista from '../Images/lista.png';
import gerador from '../Images/Gerador.png';
import boxshadow from '../Images/boxshadow.png'
import formulario from '../Images/formulario.png'

const projects = [
  {
    img: projeto,
    title: "Projeto Samsung",
    paragraphy: "Clone página Samsung utilizando html, css e JavaScript puro, com o objetivo de selecionar a cor desejada do aparelho.",
    link: "https://github.com/AdrielyQueiroz/Page_Samsung"
  },
  {
    img: qrcode,
    title: "Projeto QR Code",
    paragraphy: "Projeto QR Code básico utilizando html, css e JavaScript puro, com conhecimentos adquiridos pela Udemy.",
    link: "https://github.com/AdrielyQueiroz/Qr_code"
  },
  {
    img: lista,
    title: "Lista de Tarefas",
    paragraphy: "Lista de Tarefas para adicionar, remover, pesquisar, filtrar, concluir e editar tarefas utilizando html, css e JavaScript puro.",
    link: "https://github.com/AdrielyQueiroz/Lista_de_tarefas"
  },
  {
    img: gerador,
    title: "Gerador de Senha",
    paragraphy: "Projeto Gerador de Senha utilizando html, css e JavaScript puro.",
    link: "https://github.com/AdrielyQueiroz/Gerador_senha"
  },
  {
    img: boxshadow,
    title: "Gerador de Box Shadow",
    paragraphy: "Projeto Gerador de Box Shadow utilizando html, css e JavaScript puro, onde o usuário tem a opção de escolher o deslocamento da sombra, a itensidade, cor e sombra interna. Além disso, gera as regras para copiar e colar no seu arquivo css.",
    link: "https://github.com/AdrielyQueiroz/Box_Shadow"
  },
  {
    img: formulario,
    title: "Formulário Avaliativo",
    paragraphy: "Formulário Avaliativo Multistep inicializado com React, onde o usuário consegue retroceder e avançar mantendo seus dados.",
    link: "https://github.com/AdrielyQueiroz/form_avalia"
  }
];

const Projects = () => {
  const getVisibleCount = () => (window.innerWidth <= 768 ? 1 : 3);

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (startIndex + visibleCount < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);

  return (
    <div className='container-projects' id='projects'>
      <h4>Projetos</h4>
      <div className='carousel-wrapper'>
        <button onClick={prevSlide} className='arrow left'><FaArrowLeft /></button>

        <div className='carousel-track'>
          {visibleProjects.map((project, index) => (
            <div key={index} className='product-image'>
              <img src={project.img} alt={project.title} className='img' />
              <div className="overlay">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icons" />
                </a>
                <h1 className='text'>{project.title}</h1>
                <p className='text'>{project.paragraphy}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className='arrow right'><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Projects;

