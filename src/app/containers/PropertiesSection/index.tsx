import { useEffect, useState } from 'react';
import * as S from './index.styles';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const PropertiesSection = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [selectedOffer, setSelectedOffer] = useState<number>(-1);
    const [wasChanged, setChanged] = useState<boolean>(false);
    const [touchPosition, setTouchPosition] = useState<number>(-1);
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const properties = [
        {
            city: 'Chociw (gmina Widawa)',
            image: ['/p3.1.jpeg', '/p3.2.jpeg', '/p3.3.jpeg', '/p3.4.jpeg'],
            area: '1000',
            unit: 'm',
            price: '190000',
            description:
                'W imieniu spadkobierczyń sprzedam dom do remontu o powierzchni 100 m kw, posadowiony na działce nr 364, obręb Chociw o powierzchni 1000 m kw. Dom pobudowany z czerwonej, palonej cegły, pokryty eternitem. Podpiwniczony pod połowa domu. Ze strychem użytkowym. Złożony z trzech pokoi, kuchni i łazienki. ',
        },
    ];
    const handleSlideChange = (jump: number) => {
        setChanged(true);
        let number = activeSlide;
        number += jump;
        if (number >= 0 && number < properties.length) {
            setActiveSlide(number);
        }
    };
    useEffect(() => {
        const interval = setTimeout(() => {
            let number = activeSlide + 1;
            if (number === properties.length) {
                number = 0;
            }
            if (!wasChanged) {
                setActiveSlide(number);
            }
        }, 5000);
        return () => {
            clearTimeout(interval);
        };
    });
    const handleSelection = (index: number) => {
        setChanged(true);
        setSelectedOffer(index);
        if (index >= 0) {
            setSelectedImage(0);
        }
    };
    const handleTouchStart = (e) => {
        setTouchPosition(e.touches[0].clientX);
    };
    const handleTouchMove = (e) => {
        if (touchPosition === -1) return;
        const move = e.touches[0].clientX - touchPosition;

        if (move < -5) {
            if (selectedOffer === -1) {
                handleSlideChange(1);
            } else {
                handleImageChange(1);
            }
        }
        if (move > 5) {
            if (selectedOffer === -1) {
                handleSlideChange(-1);
            } else {
                handleImageChange(-1);
            }
        }
        setTouchPosition(-1);
    };

    const handleImageChange = (jump: number) => {
        let number = selectedImage;
        number += jump;
        if (number >= 0 && number < properties[selectedOffer].image.length) {
            setSelectedImage(number);
        }
    };
    return (
        <>
            {selectedOffer !== -1 && (
                <S.FullScreen>
                    <FaTimes
                        size="5%"
                        color="white"
                        style={{
                            top: '20px',
                            left: '20px',
                            position: 'absolute',
                            cursor: 'pointer',
                            zIndex: '9999999',
                        }}
                        onClick={() => handleSelection(-1)}
                    />
                    <S.ImagesSliderWrapper>
                        {selectedImage !== 0 && (
                            <FaArrowLeft
                                size="5%"
                                onClick={() => handleImageChange(-1)}
                                style={{
                                    left: '15px',
                                    position: 'absolute',
                                    cursor: 'pointer',
                                    zIndex: '9999999',
                                }}
                            />
                        )}
                        {properties[selectedOffer].image.map((image, index) => {
                            return (
                                <S.SlideWrapper
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={() => setTouchPosition(-1)}
                                    selected={selectedImage}
                                    key={index}
                                >
                                    <S.FullScreenImage
                                        src={image}
                                        alt="Property photo"
                                    />
                                </S.SlideWrapper>
                            );
                        })}
                        {selectedImage !==
                            properties[selectedOffer].image.length - 1 && (
                            <FaArrowRight
                                size="5%"
                                onClick={() => handleImageChange(1)}
                                style={{
                                    right: '15px',
                                    position: 'absolute',
                                    zIndex: '9999999',
                                    cursor: 'pointer',
                                }}
                            />
                        )}
                    </S.ImagesSliderWrapper>
                </S.FullScreen>
            )}
            <S.Wrapper id="properties">
                <h1>Nieruchomości</h1>
                <S.Properties>
                    <FaArrowLeft
                        size="4%"
                        style={{
                            color: activeSlide === 0 ? 'grey' : 'black',
                            cursor: activeSlide === 0 ? 'default' : 'pointer',
                            position: 'absolute',
                            left: '10px',
                            zIndex: '99999',
                        }}
                        onClick={() => handleSlideChange(-1)}
                    />

                    {properties.map((property, index) => {
                        return (
                            <S.SlideWrapper key={index} selected={activeSlide}>
                                <S.PropertyElement
                                    onClick={() => handleSelection(index)}
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={() => setTouchPosition(-1)}
                                >
                                    <S.PropertyImage
                                        src={property.image[0]}
                                        width={400}
                                        height={400}
                                        alt="Property image"
                                    />
                                    <div>
                                        <b>Miejscowość:</b> {property.city}
                                    </div>
                                    <div>
                                        <b>Powierzchnia:</b> {property.area}{' '}
                                        {property.unit}
                                        {property.unit === 'm' && <sup>2</sup>}
                                    </div>
                                    <div>
                                        <b>Cena:</b> {property.price} zł
                                    </div>
                                </S.PropertyElement>
                            </S.SlideWrapper>
                        );
                    })}
                    <FaArrowRight
                        onClick={() => handleSlideChange(1)}
                        size="4%"
                        style={{
                            color:
                                activeSlide === properties.length - 1
                                    ? 'grey'
                                    : 'black',
                            cursor:
                                activeSlide === properties.length - 1
                                    ? 'default'
                                    : 'pointer',
                            position: 'absolute',
                            right: '10px',
                        }}
                    />
                </S.Properties>
                <S.DotWrapper>
                    {Array.from({ length: properties.length }).map(
                        (_, index) => {
                            return (
                                <S.Dot
                                    choosen={
                                        index === activeSlide ? true : false
                                    }
                                    onClick={() => setActiveSlide(index)}
                                    key={index}
                                />
                            );
                        }
                    )}
                </S.DotWrapper>
            </S.Wrapper>
        </>
    );
};

export default PropertiesSection;