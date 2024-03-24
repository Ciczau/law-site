import { Playfair_Display_SC } from 'next/font/google';
import * as S from './index.styles';
import { motion } from 'framer-motion';
import Title from 'components/Title';
export const font = Playfair_Display_SC({
    weight: '400',
    subsets: ['latin'],
});
const Loader = ({ loaded }) => {
    return (
        <div className={font.className}>
            <S.Wrapper
                animate={{ x: loaded && [0, -2500] }}
                transition={{ duration: 0.6 }}
            >
                <Title />
            </S.Wrapper>
        </div>
    );
};
export default Loader;
