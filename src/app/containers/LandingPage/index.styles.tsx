import styled from 'styled-components';
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
