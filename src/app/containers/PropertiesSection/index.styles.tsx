import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
export const Wrapper = styled.section`
    width: 100vw;
    height: auto;
    padding: 15px;
    color: black;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0px 0px 5px 3px #ffffff7b;
    display: flex;
`;
export const Properties = styled.div`
    align-items: center;
    width: 100vw;
    overflow: hidden;
    position: relative;
    flex-wrap: nowrap;
    display: flex;
`;

export const PropertyElement = styled(motion.div)`
    display: flex;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 3px #00000044;
    cursor: pointer;
    flex-direction: column;
    margin: 50px;
    @media screen and (max-width: 767px) {
        padding: 5px;
    }
`;

export const PropertyImage = styled.img`
    max-width: 80vw;
    width: 700px;
    object-fit: cover;
    height: 500px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 3px #00000039;
`;

export const DotWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
`;

export const Dot = styled.div`
    width: ${(props) => (props.choosen === true ? '22px' : '17px')};
    margin: 3px;
    height: ${(props) => (props.choosen === true ? '22px' : '17px')};

    border-radius: 50%;
    background-color: ${(props) =>
        props.choosen === true ? '#474747' : '#919191'};
    transition: all 0.1s ease;
`;

export const FullScreen = styled(motion.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;
    left: 0;
    background-color: #131313f9;
`;

export const FullScreenImage = styled.img`
    height: auto;
    width: auto;
    max-width: 80vw;
`;

export const SlideWrapper = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 0;
    transform: ${(props) => {
        return `translateX(${-props.selected * 100}%)`;
    }};
    transition: 0.3s ease;
`;

export const ImagesSliderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
`;
export const CloseIcon = styled(FaTimes)`
    top: 20px;
    left: 20px;
    position: absolute;
    cursor: pointer;
    z-index: 10;
    width: 30px;
    height: 30px;
`;
export const LeftArrowIcon = styled(FaArrowLeft)`
    left: 15px;
    position: absolute;
    width: 30px;
    height: 30px;
    color: ${(props) => (props.active ? 'black' : 'gray')};
    z-index: 10;
    cursor: pointer;
`;
export const RightArrowIcon = styled(FaArrowRight)`
    right: 15px;
    position: absolute;
    width: 30px;
    height: 30px;
    color: ${(props) => (props.active ? 'black' : 'gray')};
    z-index: 10;
    cursor: pointer;
`;
