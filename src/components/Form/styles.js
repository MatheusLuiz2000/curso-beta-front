import styled from 'styled-components';

export const InputContainer = styled.div`
  &.error {
    input {
      border-bottom: 2px solid #ef0000;
    }
    label,
    small {
      color: #ef0000;
    }

    small {
      font-size: 12px;
      font-weight: 600;
    }
  }
  label {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.25px;
    cursor: pointer;
    display: block;
    margin-top: 28px;
    margin-bottom: 12px;
    color: rgb(144 144 144);
  }

  input {
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.125px;
    width: 400px;
    display: block;
    max-width: 400px;
    background-color: white;
    box-sizing: border-box;
    box-shadow: none;
    color: rgb(79, 79, 79);
    height: 52px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(220, 220, 220);
    border-image: initial;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 6px;
    box-shadow: 0 14px 28px rgba(255, 255, 255, 0.25),
      0 10px 10px rgba(160, 160, 160, 0.22);
    outline: 0;

    :hover {
      border-bottom: 2px solid #ef0000;
    }
  }
`;
