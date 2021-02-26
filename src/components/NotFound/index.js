import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/json/not_found.json';
import { Container } from './styles';

export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={600} width={600} />
    </Container>
  );
}
