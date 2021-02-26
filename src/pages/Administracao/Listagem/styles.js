import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #ef0000;
  }
`;

export const ContainerNovoCurso = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 40px;
  margin-bottom: 50px;
`;

export const ContainerVideos = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  margin: 30px 0px;
`;

export const ContainerAcoesBotoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;

  svg {
    font-size: 21.5px;
    color: red;
    margin: 0px 5px;
  }
`;

export const Box = styled.div`
  width: 400px;
  max-width: 400px;
  box-shadow: 0 14px 28px rgb(255 255 255 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  margin: 25px 50px;
  border-radius: 5px;

  h2 {
    text-align: center;
    padding-top: 20px;
  }

  iframe {
    border: none;
    border-radius: 5px;
  }

  button {
    background-color: transparent;
    border: none;
  }

  .button-assistir {
    width: 100%;
    margin-top: 30px;
  }

  p {
    font-weight: 500;
    color: darkgrey;
    font-size: 14.5px;
  }

  .descricao {
    margin: 20px 0px;
  }
`;

export const ContainerFiltros = styled.div``;
