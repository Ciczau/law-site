import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: black;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Loader = styled.div`
    border: 4px solid #a1ac0953;
    border-top: 4px solid #e9bf06;
    border-radius: 50%;
    width: 30px;
    margin: 20px 0;
    height: 30px;
    animation: ${spin} 1s linear infinite;
`;
