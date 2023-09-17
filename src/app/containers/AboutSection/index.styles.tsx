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
    color: white;
    width: 100vw;
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
    background-color: #000000;
    color: white;
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
`;

export const Paragraph = styled.p`
    margin: 15px 0;
`;
