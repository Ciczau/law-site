import { Playfair_Display_SC } from 'next/font/google';

import * as S from './index.styles';

export const font = Playfair_Display_SC({
    weight: '400',
    subsets: ['latin'],
});
const Title = ({ scrollPos, loaded, width }) => {
    const handleScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <S.Wrapper
            scrollPos={scrollPos}
            initial={{ opacity: 0.05, x: '-50%' }}
            onClick={handleScroll}
            animate={{
                opacity: 1,
                rotate: scrollPos !== 0 ? 90 : 0,
                x: loaded && (scrollPos !== 0 ? '-40%' : '0'),
                y: scrollPos !== 0 ? '300%' : ' 0',
                backgroundColor: scrollPos !== 0 ? '#9c6007' : 'transparent',
                color: !loaded
                    ? '#9c8607'
                    : scrollPos === 0
                    ? '#616161'
                    : 'white',
                top: loaded && '0',
                left: loaded && '0',
                fontSize: loaded && '31px',
                display: width < 1200 && loaded && 'none',
            }}
            transition={{
                type: 'tween',
                opacity: {
                    duration: 0.5,
                    delay: 0.1,
                },
            }}
            loaded={loaded}
        >
            <div className={font.className}>SchellerLaw</div>
        </S.Wrapper>
    );
};

export default Title;
