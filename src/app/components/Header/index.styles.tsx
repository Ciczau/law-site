import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100vw;
    padding: ${(props) => (props.scrollPos === 0 ? '21px' : '15px')};
    display: flex;
    z-index: 9999;
    height: auto;
    position: fixed;
    transition: all 0.3s;
    color: #ffd717;

    justify-content: center;
    backdrop-filter: blur(10px);
    align-items: center;
    background-color: #000000;
    box-shadow: 0px 0px 5px 3px #25252571;
`;

export const HeaderContent = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    transition: all 0.3s ease;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;
export const HeaderElement = styled.div`
    cursor: pointer;
`;
