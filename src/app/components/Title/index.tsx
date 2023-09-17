import { Playfair_Display_SC } from 'next/font/google';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const Wrapper = styled(motion.div)`
    position: fixed;
    z-index: 10000;
    font-size: 30px;
    padding: 15px;
    color: ${(props) => (props.scrollPos === 0 ? '#616161' : 'white')};
    opacity: ${(props) => (props.scrollPos ? '0.6' : '1')};
    border-radius: ${(props) => (props.scrollPos === 0 ? '0' : '5px 5px 0 0')};
    background-color: ${(props) =>
        props.scrollPos === 0 ? 'none' : '#9c6007'};
    cursor: pointer;
    transition: 0.4s ease;
`;
const font = Playfair_Display_SC({
    weight: '400',
    subsets: ['latin'],
});
const Title = ({ scrollPos }) => {
    const handleScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <Wrapper
            scrollPos={scrollPos}
            onClick={handleScroll}
            animate={{
                rotate: scrollPos !== 0 ? 90 : 0,
                x: scrollPos !== 0 ? '-40%' : '0',
                y: scrollPos !== 0 ? '300%' : ' 0',
                backgroundColor: scrollPos !== 0 ? '#9c6007' : 'transparent',
            }}
            transition={{ type: 'tween' }}
        >
            <div className={font.className}>ShellerLaw</div>
        </Wrapper>
    );
};

export default Title;
