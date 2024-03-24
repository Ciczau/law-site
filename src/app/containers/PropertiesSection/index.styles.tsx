import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaLink, FaTimes } from 'react-icons/fa';
export const Wrapper = styled.section`
    width: 100vw;
    height: auto;
    padding: 15px;
    color: black;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
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
    width: 750px;
    max-width: 80vw;
    position: relative;
    flex-direction: column;
    margin: 10px;
    @media screen and (max-width: 600px) {
        padding: 5px;
        max-width: 92vw;
    }
    p {
        margin-top: 15px;
        white-space: pre-line;
    }
`;

export const PropertyImage = styled.img`
    width: 100%;
    object-fit: cover;
    height: 500px;
    z-index: 1;
    position: relative;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 3px #00000039;
`;
export const LinkCopy = styled(FaLink)`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 45px;
    height: 45px;
    border: 0;
    outline: 0;
    background-color: #fcf800;
    z-index: 5;
    padding: 10px;
    font-size: 16px;
    text-transform: uppercase;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 3px #00000040;
    transition: 0.2s ease;
    &:active {
        transform: scale(0.9);
    }
`;
export const DotWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
`;

export const Dot = styled.div<{ choosen: boolean }>`
    width: ${(props) => (props.choosen === true ? '22px' : '17px')};
    margin: 3px;
    height: ${(props) => (props.choosen === true ? '22px' : '17px')};

    border-radius: 50%;
    background-color: ${(props) =>
        props.choosen === true ? '#474747' : '#919191'};
    transition: all 0.1s ease;
`;

export const FullScreen = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    top: 0;
    display: flex;
    flex-direction: column;
    z-index: 11;
    position: fixed;
    padding: 10px;
    overflow-y: scroll;
    backdrop-filter: blur(10px);
    left: 0;
    background-color: #141414df;
`;

export const FullScreenImage = styled.img`
    max-height: 80vh;
    max-width: 80vw;
`;

export const SlideWrapper = styled.div<{ selected: number }>`
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
export const LeftArrowIcon = styled(FaArrowLeft)<{
    active?: boolean;
    modal: boolean;
}>`
    left: 15px;
    position: absolute;
    width: 30px;
    height: 30px;
    color: ${(props) => (props.active ? 'black' : 'gray')};
    z-index: ${(props) => (props.modal ? '10' : '1')};
    cursor: pointer;
    @media screen and (max-width: 600px) {
        display: none;
    }
`;
export const RightArrowIcon = styled(FaArrowRight)<{
    active?: boolean;
    modal: boolean;
}>`
    right: 15px;
    position: absolute;
    width: 30px;
    height: 30px;
    color: ${(props) => (props.active ? 'black' : 'gray')};
    z-index: 10;
    cursor: pointer;
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const MiniaturesWrapper = styled.div`
    width: 100vw;
    height: 20vh;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    flex-grow: 1;

    flex-wrap: nowrap;
    flex-shrink: 0;
    justify-content: center;
`;
export const Miniature = styled(Image)<{ selected: boolean }>`
    height: 15vh;
    width: 15vh;
    cursor: pointer;
    border-radius: 5px;
    object-fit: cover;
    margin: 10px;
    opacity: ${(props) => (props.selected ? '1' : '0.5')};
`;
