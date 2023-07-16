import Header from 'components/Header';
import * as S from './index.styles';
import AboutSection from 'containers/AboutSection';
import bg from '../../public/background.jpg';
import { useState, useEffect } from 'react';
import ExperienceSection from 'containers/ExperienceSection';
import Head from 'components/Head';
import { IBM_Plex_Sans, Architects_Daughter, Dekko } from 'next/font/google';
import PropertiesSection from 'containers/PropertiesSection';
const font = Dekko({
    weight: '400',
    subsets: ['latin'],
});
const LandingPage = () => {
    const [scrollPos, setScrollPos] = useState<number>(0);
    useEffect(() => {
        setScrollPos(window.scrollY);
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
            <S.ImageBackground src={bg} />
            {window.innerWidth > 767 && <Head scrollPos={scrollPos} />}

            <S.Wrapper>
                <div className={font.className}>
                    <Header scrollPos={scrollPos} />
                    <AboutSection />
                    <PropertiesSection />
                    <ExperienceSection />
                </div>
            </S.Wrapper>
        </>
    );
};

export default LandingPage;
