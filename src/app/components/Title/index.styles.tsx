import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
    z-index: 31;
    font-size: 30px;

    color: #979797;

    cursor: pointer;
    transition: 0.4s ease;
    @media (min-width: 768px) {
        display: none;
        font-size: 35px;
    }
    @media (min-width: 1240px) {
        display: block;
    }
`;
