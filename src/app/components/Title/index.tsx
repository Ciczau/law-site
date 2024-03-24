import { Playfair_Display_SC } from 'next/font/google';

import * as S from './index.styles';
import { useRouter } from 'next/router';

export const font = Playfair_Display_SC({
    weight: '400',
    subsets: ['latin'],
});
const Title = () => {
    const router = useRouter();
    return (
        <S.Wrapper onClick={() => router.push('/')}>
            <div className={font.className}>SchellerLaw</div>
        </S.Wrapper>
    );
};

export default Title;
