import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  iframe {
    width: 95%;
    border: none;
    height: 500px;
  }
`;

export const ContainerInformacoes = styled.div`
  width: 100%;
  margin-bottom: 40px;
  padding-left: 50px;

  h1 {
    font-size: 45px;
    color: #ef0000;
    margin-bottom: 50px;
    text-align: center;
  }

  h2 {
    margin-bottom: 10px;
    text-align: left;
    font-size: 35px;
  }

  .descricao {
    margin-bottom: 25px;
  }

  p {
    font-size: 17px;
    color: #a5a5a5;
  }

  .icon-text b {
    font-size: 18px;
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  button {
    margin-top: 50px;
  }
`;

export const ContainerStars = styled.div`
  h3 {
    font-size: 20px;
    margin: 40px 0px 20px 0px;
  }

  svg {
    font-size: 25px;
    margin-right: 8px;
    cursor: pointer;

    :hover {
      fill: #ffe000;
    }
  }
`;
