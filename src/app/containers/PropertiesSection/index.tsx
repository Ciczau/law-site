import { useEffect, useState } from 'react';
import { properties } from 'components/properties';

import * as S from './index.styles';

type Props = {
    openedProperty: number | null;
};

const PropertiesSection = ({ openedProperty }: Props) => {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [selectedOffer, setSelectedOffer] = useState<number>(-1);
    const [wasChanged, setChanged] = useState<boolean>(false);
    const [touchPosition, setTouchPosition] = useState<number>(-1);
    const [selectedImage, setSelectedImage] = useState<number>(0);
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
        const overflowValue = index === -1 ? 'scroll' : 'hidden';
        document.body.style.overflowY = overflowValue;
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
        if (properties.length && properties[selectedOffer] && number >= 0 && number < properties[selectedOffer]?.image.length) {
            setSelectedImage(number);
        }
    };

    useEffect(() => {
        if (
            openedProperty &&
            openedProperty >= 0 &&
            openedProperty < properties.length
        ) {
            setActiveSlide(openedProperty);
            setChanged(true);
            console.log(openedProperty);
        }
    }, [openedProperty]);

    const copyLink = (e, propertyIndex: number) => {
        e.stopPropagation();
        navigator.clipboard.writeText(
            `https://www.schellerlaw.pl/nieruchomosci?property=${propertyIndex}`
        );
    };
    const renderProperties = () => {
        return (
            <>
                {properties.map((property, index) => {
                    return (
                        <S.SlideWrapper key={index} selected={activeSlide}>
                            <S.PropertyElement
                                onClick={() => handleSelection(index)}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={() => setTouchPosition(-1)}
                            >
                                <S.LinkCopy
                                    size="100%"
                                    onClick={(e) => copyLink(e, index)}
                                />
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
                                <p>{property.description}</p>
                            </S.PropertyElement>
                        </S.SlideWrapper>
                    );
                })}
            </>
        );
    };
    const renderPropertyImage = () => {
        return (
            <>
                {properties.length && properties[selectedOffer] && properties[selectedOffer].image.map((image, index) => {
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
            </>
        );
    };
    const renderDots = () => {
        return (
            <S.DotWrapper>
                {Array.from({ length: properties.length }).map((_, index) => {
                    return (
                        <S.Dot
                            choosen={index === activeSlide ? true : false}
                            onClick={() => setActiveSlide(index)}
                            key={index}
                        />
                    );
                })}
            </S.DotWrapper>
        );
    };
    const renderMiniatures = () => {
        return (
            <>
                {properties.length && properties[selectedOffer] && properties[selectedOffer]?.image.map((image, index) => {
                    return (
                        <S.Miniature
                            key={index}
                            alt="Property image"
                            src={image}
                            width={250}
                            height={250}
                            selected={selectedImage === index ? true : false}
                            onClick={() => setSelectedImage(index)}
                        />
                    );
                })}
            </>
        );
    };
    return (
        <>
            {selectedOffer !== -1 && (
                <S.FullScreen>
                    <S.CloseIcon
                        size="100%"
                        onClick={() => handleSelection(-1)}
                    />
                    <S.ImagesSliderWrapper>
                        {selectedImage !== 0 && (
                            <S.LeftArrowIcon
                                size="100%"
                                onClick={() => handleImageChange(-1)}
                                modal={true}
                            />
                        )}
                        {renderPropertyImage()}
                        {properties.length && properties[selectedOffer] && selectedImage !==
                            properties[selectedOffer]?.image.length - 1 && (
                            <S.RightArrowIcon
                                size="100%"
                                onClick={() => handleImageChange(1)}
                                modal={true}
                            />
                        )}
                    </S.ImagesSliderWrapper>
                    <S.MiniaturesWrapper>
                        {renderMiniatures()}
                    </S.MiniaturesWrapper>
                </S.FullScreen>
            )}
            <S.Wrapper id="properties">
                <h2>Nieruchomości</h2>

                <S.Properties>
                    <S.LeftArrowIcon
                        size="100%"
                        active={activeSlide === 0 ? false : true}
                        modal={false}
                        onClick={() => handleSlideChange(-1)}
                    />

                    {renderProperties()}
                    <S.RightArrowIcon
                        onClick={() => handleSlideChange(1)}
                        size="100%"
                        active={
                            activeSlide === properties.length - 1 ? false : true
                        }
                        modal={false}
                    />
                </S.Properties>
                {renderDots()}
            </S.Wrapper>
        </>
    );
};

export default PropertiesSection;
