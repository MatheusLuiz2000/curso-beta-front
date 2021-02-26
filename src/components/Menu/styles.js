import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  box-shadow: 0 14px 28px rgb(255 255 255 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  margin-bottom: 40px;

  .logo {
    width: 190px;
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    color: #585858;
    padding-right: 15px;
  }
`;

export const List = styled.ul`
  padding-right: 25px;

  li {
    font-size: 14px;
    font-weight: 600;
    color: #585858;
    padding-right: 15px;
  }
`;
