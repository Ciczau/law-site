import * as S from './index.styles';

const Header = ({ scrollPos }) => {
    const headerElements = [
        {
            name: 'O mnie',
            id: 'about',
        },
        {
            name: 'Nieruchomości',
            id: 'properties',
        },
        {
            name: 'Doświadczenie zawodowe',
            id: 'experience',
        },
        {
            name: 'Kontakt',
            id: 'contact',
        },
    ];
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <S.Wrapper scrollPos={scrollPos}>
            <S.HeaderContent scrollPos={scrollPos}>
                {headerElements.map((el) => {
                    return (
                        <S.HeaderElement
                            key={el.id}
                            onClick={() => handleScroll(el.id)}
                        >
                            {el.name}
                        </S.HeaderElement>
                    );
                })}
            </S.HeaderContent>
        </S.Wrapper>
    );
};
export default Header;
