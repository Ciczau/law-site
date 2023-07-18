import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100vw;
    height: 80vh;
    flex-direction: column;
    display: flex;
    padding: 15px 0;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 5px 3px #00000094;
    background: url('/footer.svg'), black;
    background-position-y: bottom;
`;
export const Title = styled.div`
    font-size: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContactInput = styled.input`
    margin: 10px;
    font-size: 20px;
    padding: 5px 10px;
    width: 600px;
    max-width: 90vw;

    font-family: inherit;
    border-radius: 5px;
    outline: 0;
    border: 0;
`;
export const ContactTextArea = styled.textarea`
    margin: 10px;
    width: 600px;
    max-width: 90vw;
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 5px;
    outline: 0;
    border: 0;
    font-family: inherit;
    resize: none;
`;

export const SubmitButton = styled.button`
    padding: 5px 15px;
    font-family: inherit;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    outline: 0;
    border: 0;
`;

export const Footer = styled.footer`
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: center;
    color: black;
    justify-content: center;
    width: 100vw;
`;

export const ContactMedia = styled.div`
    display: flex;
    width: 100vw;
    margin: 15px;
    font-size: 23px;
    justify-content: space-evenly;
`;
export const Line = styled.div`
    width: 85vw;
    border-bottom: 2px solid black;
`;

export const LawSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 15px;
`;
