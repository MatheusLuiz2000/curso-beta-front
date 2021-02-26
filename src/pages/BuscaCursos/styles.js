import styled from 'styled-components';

export const ContainerFiltros = styled.div`
  padding: 20px 50px;

  form {
    display: flex;
    align-items: flex-end;

    width: 100%;
    justify-content: space-between;

    .form-group {
      width: 300px;
    }
  }
`;

export const ContainerPaginate = styled.div``;

export const ContainerCursos = styled.div`
  text-align: center;
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

export const ContainerNotFound = styled.div`
  margin-top: 50px;

  h1 {
    font-size: 35px;
    color: #cf2327;
  }
`;
