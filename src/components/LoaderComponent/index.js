import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/json/loader.json';
import { Container } from './styles';

export default function LoaderComponent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Container>
  );
}
