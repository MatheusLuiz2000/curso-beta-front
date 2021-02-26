import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerLogin, List } from './styles';

// Images
import Logo from '../../assets/images/logo.png';
import Profile from '../../assets/images/profile.svg';

export default function Menu() {
  return (
    <Container>
      <Link to="/dashboard">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <ContainerLogin>
        <List>
          <Link to="/dashboard">
            <li>Inicio</li>
          </Link>
          <Link to="/dashboard/adicionarCurso">
            <li>Adicionar Curso</li>
          </Link>
          <Link to="/buscar-cursos">
            <li>Buscar Cursos</li>
          </Link>
        </List>
        <img src={Profile} alt="User" />
      </ContainerLogin>
    </Container>
  );
}
