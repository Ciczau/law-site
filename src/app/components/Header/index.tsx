import * as S from './index.styles';

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

const Header = ({ scrollPos }) => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const renderHeader = () => {
        return (
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
        );
    };
    return <S.Wrapper scrollPos={scrollPos}>{renderHeader()}</S.Wrapper>;
};
export default Header;
