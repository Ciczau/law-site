import { Playfair_Display_SC } from 'next/font/google';

import * as S from './index.styles';

const font = Playfair_Display_SC({
    weight: '400',
    subsets: ['latin'],
});
const Title = ({ scrollPos }) => {
    const handleScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <S.Wrapper
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
            <div className={font.className}>SchellerLaw</div>
        </S.Wrapper>
    );
};

export default Title;
