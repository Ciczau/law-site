import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100vw;
    height: auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.div`
    font-size: 30px;
    margin: 15px;
`;

export const CategoryWrapper = styled.div`
    padding: 15px;
    margin: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 5px 3px #0000004c;
    background-color: #b49a06d1;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s cubic-bezier(0, 1, 0, 1);
    max-width: 90vw;
`;
export const CategoryTitle = styled.div`
    font-size: 20px;
`;
