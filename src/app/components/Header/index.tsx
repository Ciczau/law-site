import * as S from './index.styles';

const Header = ({ scrollPos }) => {
    const headerElements = ['O mnie', 'Doświadczenie zawodowe', 'Kontakt'];
    return (
        <S.Wrapper scrollPos={scrollPos}>
            <S.HeaderContent scrollPos={scrollPos}>
                {headerElements.map((el) => {
                    return <S.HeaderElement key={el}>{el}</S.HeaderElement>;
                })}
            </S.HeaderContent>
        </S.Wrapper>
    );
};
export default Header;
