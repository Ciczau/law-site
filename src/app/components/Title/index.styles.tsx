import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    position: fixed;
    z-index: 6;
    font-size: 30px;
    padding: 15px;
    color: ${(props) => (props.scrollPos === 0 ? '#616161' : 'white')};
    opacity: ${(props) => (props.scrollPos ? '0.6' : '1')};
    border-radius: ${(props) => (props.scrollPos === 0 ? '0' : '5px 5px 0 0')};
    background-color: ${(props) =>
        props.scrollPos === 0 ? 'none' : '#9c6007'};
    cursor: pointer;
    transition: 0.4s ease;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;
