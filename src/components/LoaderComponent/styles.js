import styled from 'styled-components';

export const Container = styled.div`
  div {
    :first-child {
      position: absolute;
      top: 57%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    svg {
      max-width:100%;
    }
  }
`;
