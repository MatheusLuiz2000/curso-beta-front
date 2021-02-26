import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Administracao/Listagem';
import AdicionarCurso from '../pages/Administracao/Criacao';
import AlterarCurso from '../pages/Administracao/Alteracao';
import VisualizarCurso from '../pages/Curso';
import BuscarCursos from '../pages/BuscaCursos';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route
          path="/dashboard/adicionarCurso"
          exact
          component={AdicionarCurso}
          isPrivate
        />
        <Route
          path="/dashboard/alterarCurso/:id"
          exact
          component={AlterarCurso}
          isPrivate
        />
        <Route path="/curso/:id" exact component={VisualizarCurso} isPrivate />
        <Route path="/buscar-cursos" exact component={BuscarCursos} isPrivate />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  );
}
