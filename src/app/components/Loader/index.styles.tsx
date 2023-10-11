import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    position: fixed;
    display: flex;
    height: 100vh;
    width: 100vw;

    background-color: #111111;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;
