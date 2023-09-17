import Header from 'components/Header';
import * as S from './index.styles';
import AboutSection from 'containers/AboutSection';
import bg from '/public/bg.jpg';
import { useState, useEffect } from 'react';
import ExperienceSection from 'containers/ExperienceSection';
import {
    IBM_Plex_Sans,
    Architects_Daughter,
    Dekko,
    Lora,
} from 'next/font/google';
import PropertiesSection from 'containers/PropertiesSection';
import ContactSection from 'containers/ContactSection';
import Title from 'components/Title';
import Head from 'next/head';
const font = Lora({
    weight: '400',
    subsets: ['latin'],
});
const LandingPage = () => {
    const [scrollPos, setScrollPos] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    useEffect(() => {
        setScrollPos(window.scrollY);
        setWindowWidth(window.innerWidth);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <S.ImageBackground src={bg} alt="background" />
            {windowWidth > 767 && <Title scrollPos={scrollPos} />}
            <Head>
                <title>Katarzyna Szeller</title>
                <meta />
            </Head>
            <S.Wrapper>
                <div className={font.className}>
                    <Header scrollPos={scrollPos} />
                    <AboutSection />
                    <PropertiesSection />
                    <ExperienceSection />
                    <ContactSection />
                </div>
            </S.Wrapper>
        </>
    );
};

export default LandingPage;
