import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f5f6fa;
`;

export const BoxLogin = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 50px 50px;
  box-shadow: 0 14px 28px rgb(255 255 255 / 25%),
    0 10px 10px rgb(47 47 47 / 22%);
  background-color: rgb(249, 249, 249);

  .logo {
    width: 270px;
    margin-bottom: 25px;
  }

  h2 {
    color: rgb(123, 123, 123);
    font-weight: 500;
    margin-bottom: 50px;
    font-size: 17px;
    text-align: center;
  }
`;

export const Input = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  background-color: rgb(255, 255, 255);
  color: rgb(115, 115, 115);
  width: 100%;
  font-size: 15px;
  padding: 12px 10px;
  text-align: center;
  box-shadow: rgb(255 255 255 / 30%) 0px 19px 38px,
    rgb(138 138 138 / 22%) 0px 15px 12px;
  border-bottom: 2px solid rgb(204 33 35);
  margin: 20px 0px;
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  background-color: transparent;
  color: rgb(204 33 35);
  border: none;
  text-transform: uppercase;
  padding: 13px 25px;
  font-size: 15px;
  width: 100%;
  transition: all 0.2s ease 0s;
  cursor: pointer;
`;
