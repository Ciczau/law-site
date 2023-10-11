import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    position: fixed;
    z-index: 31;
    font-size: 50px;
    top: 45vh;
    left: 50vw;
    transform: translateX(-50%);
    padding: 15px;
    color: #9c8607;
    opacity: ${(props) => (props.scrollPos ? '0.6' : '1')};
    border-radius: ${(props) => (props.scrollPos === 0 ? '0' : '5px 5px 0 0')};
    background-color: ${(props) =>
        props.scrollPos === 0 ? 'none' : '#9c6007'};
    cursor: pointer;
    transition: 0.4s ease;
`;
