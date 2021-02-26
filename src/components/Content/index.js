import React from 'react';

import { Container } from './styles';
// Components
import Menu from '../Menu';

export default function Content({ children }) {
  return (
    <Container>
      <Menu />
      {children}
    </Container>
  );
}
