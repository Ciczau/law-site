import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
`;

export const WelcomeWrapper = styled.div`
    color: #000000;
    width: 100vw;
    background-image: linear-gradient(#00000039, #00000039),
        url('/header-bg.jpg');
    background-size: cover;
    background-position: center;
    margin-top: 50px;
    padding: 16vh 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(3px);
    text-align: center;
    @media screen and (max-width: 767px) {
        margin-top: 0;
        padding: 16vh 5vw;
    }
    h1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const DescriptionWrapper = styled.div`
    width: 100vw;
    text-shadow: 0px 5px 3px #0000004e;
    background-color: #616161;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height: auto;
    padding: 35px 15vw;
    @media screen and (max-width: 767px) {
        padding: 35px 15px;
    }
    h1 {
        margin-bottom: 30px;
    }
`;

export const Paragraph = styled.p`
    margin: 15px 0;
`;
