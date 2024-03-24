import styled from 'styled-components';

export const Wrapper = styled.div`
    height: auto;
    overflow: hidden;
`;

export const Content = styled.div`
    margin: 100px 0;
    text-align: center;
    padding: 0 15vw;
    @media screen and (max-width: 767px) {
        margin-top: 50px;
    }
    h3 {
        margin: 20px 0;
    }
`;
