import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
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
    background-color: black;
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

export const SubmitButton = styled.input`
    padding: 5px 15px;
    font-family: inherit;
    margin-top: 10px;
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
    color: #ffffff;
    justify-content: center;
    width: 100vw;
`;
export const PhoneIcon = styled(FaPhone)`
    width: 25px;

    margin-right: 8px;
`;
export const MailIcon = styled(FaEnvelope)`
    width: 25px;
    margin-right: 8px;
`;
export const ContactMedia = styled.div`
    display: flex;
    width: 100vw;
    margin: 15px;
    font-size: 23px;
    justify-content: space-evenly;
    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterLink = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
        color: #3f3f3f;
    }
`;
export const Line = styled.div`
    width: 85vw;
    border-bottom: 1px solid #555454;
`;

export const LawSection = styled.div`
    display: flex;

    justify-content: space-between;
    width: 90vw;
    margin: 15px;
    div {
        cursor: pointer;
    }
`;
