import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';
export const Wrapper = styled.div`
    width: 100vw;
    color: white;
    height: auto;
`;

export const ImageBackground = styled(Image)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    object-fit: cover;
    z-index: -1;
`;
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }
        &::-webkit-scrollbar{
            width: 0;
        }
    }
`;
