import { useState, useEffect } from 'react';
import { Lora } from 'next/font/google';

import Header from 'components/Header';
import Title from 'components/Title';
import Loader from 'components/Loader';
import ExperienceSection from 'containers/ExperienceSection';
import AboutSection from 'containers/AboutSection';
import PropertiesSection from 'containers/PropertiesSection';
import ContactSection from 'containers/ContactSection';
import { cacheImages } from 'hooks/cacheImages';
import bg from '/public/bg.jpg';

import * as S from './index.styles';
import { useRouter } from 'next/router';
import CustomHead from 'components/Head/Head';

const font = Lora({
    weight: '400',
    subsets: ['latin'],
});
const LandingPage = () => {
    const [scrollPos, setScrollPos] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [propertyQuery, setPropertyQuery] = useState<number | null>(null);

    const router = useRouter();

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
    const loadImages = async () => {
        const imagesArray: string[] = [];
        if (bg.blurDataURL) {
            imagesArray.push(bg.blurDataURL);
            await cacheImages(imagesArray, setLoaded);
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        loadImages();
    }, []);
    useEffect(() => {
        if (loaded) {
            document.body.style.overflowY = 'scroll';
        }
    }, [loaded]);

    useEffect(() => {
        const section = router?.query.section;
        const property = router?.query.property;
        if (
            typeof section === 'string' &&
            typeof property === 'string' &&
            section === 'properties' &&
            loaded
        ) {
            const properties = document.getElementById('properties');
            if (properties) {
                setPropertyQuery(Number(property));
                properties.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [router, loaded]);
    return (
        <div className={font.className}>
            <S.GlobalStyle />
            <CustomHead />
            <Loader loaded={loaded} />

            <>
                <S.ImageBackground src={bg} alt="background" />

                <S.Wrapper>
                    <Title
                        scrollPos={scrollPos}
                        loaded={loaded}
                        width={windowWidth}
                    />

                    <Header scrollPos={scrollPos} />
                    <AboutSection />
                    <PropertiesSection openedProperty={propertyQuery} />
                    <ExperienceSection />
                    <ContactSection />
                </S.Wrapper>
            </>
        </div>
    );
};

export default LandingPage;
