import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100vw;
    padding: ${(props) => (props.scrollPos === 0 ? '21px' : '15px')};
    display: flex;
    z-index: 2;
    height: auto;
    position: fixed;
    transition: all 0.3s;
    color: #b1b1b0;
    color: ${(props) => (props.scrollPos === 0 ? '#b1b1b0' : '#ffffff')};
    justify-content: center;
    backdrop-filter: blur(10px);
    align-items: center;
    background-color: ${(props) =>
        props.scrollPos === 0 ? '#000000' : '#00000090'};
    box-shadow: 0px 0px 5px 3px #5f5f5f83;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

export const HeaderContent = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    transition: all 0.3s ease;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;
export const HeaderElement = styled.div`
    cursor: pointer;
    transition: all 0.15s ease;
    &:hover {
        color: white;
    }
`;
