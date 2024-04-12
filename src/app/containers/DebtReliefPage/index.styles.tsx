import styled from 'styled-components';

export const Wrapper = styled.div`
    height: auto;
    overflow: hidden;
`;

export const Content = styled.div`
    padding: 100px 15vw;
    text-align: center;
    display: flex;
    color: #ffffff;
    background-color: #616161;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 767px) {
        padding: 100px 15px;
    }
    h3 {
        margin: 20px 0;
    }
`;
