import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  let dados = localStorage.getItem('adm');

  if (!dados && isPrivate) {
    return <Redirect to="/" />;
  }

  if (dados) {
    dados = JSON.parse(dados);

    if ((!dados.email || !dados.token) && isPrivate) {
      return <Redirect to="/" />;
    }
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.protoTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
