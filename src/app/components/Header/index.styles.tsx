import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';

export const Wrapper = styled.header<{ scrollPos: number }>`
    width: 100vw;
    padding: ${(props) => (props.scrollPos === 0 ? '15px ' : '10px 15px')};
    display: flex;
    z-index: 2;
    height: auto;
    position: fixed;
    transition: all 0.3s;
    color: #b1b1b0;
    color: ${(props) => (props.scrollPos === 0 ? '#b1b1b0' : '#ffffff')};

    backdrop-filter: blur(10px);
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) =>
        props.scrollPos === 0 ? '#000000' : '#00000090'};
    box-shadow: 0px 0px 5px 3px #5f5f5f83;
    @media (min-width: 768px) {
        justify-content: space-between;
    }
`;

export const HeaderContent = styled.div<{ scrollPos: number }>`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    transition: all 0.3s ease;
    @media screen and (max-width: 1240px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;
export const HeaderElement = styled.a<{ active: boolean }>`
    cursor: pointer;
    color: ${(props) => (props.active ? 'white' : '#b1b1b0')};
    text-decoration: none;
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

    transition: all 0.15s ease;
    &:hover {
        color: white;
    }
    @media (max-width: 992px) {
        font-size: 16px;
    }
    @media (max-width: 1340px) {
        font-size: 16px;
    }
`;
export const MenuIcon = styled(FaBars)`
    height: 25px;
    width: 25px;
    color: white;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
`;
export const Menu = styled(motion.div)`
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #1f1f1f;
    justify-content: center;
    align-items: center;
    z-index: 10;
    transition: all 0.3s ease;
    @media (min-width: 768px) {
        display: none;
    }
`;
export const CloseIcon = styled(IoClose)`
    width: 35px;
    margin: 10px;
    height: 35px;
    cursor: pointer;
    color: white;
`;
export const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin: 10px;
    a {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        font-size: 20px;
        margin: 10px;
    }
`;
