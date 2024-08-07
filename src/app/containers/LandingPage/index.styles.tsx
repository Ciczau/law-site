import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';
export const Wrapper = styled.div`
    color: white;
    height: auto;

    overflow: hidden;
`;

export const ImageBackground = styled(Image)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    object-position: 70%;
    object-fit: cover;
    z-index: -1;
`;
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        box-sizing: border-box;
        &::-webkit-scrollbar {
            width: 2;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
       
        }
        
    }

`;
