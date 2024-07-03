import { useRouter } from 'next/router';
import * as S from './index.styles';
import Title from 'components/Title';
import { useEffect, useState } from 'react';

const headerElements = [
    {
        name: 'O mnie',
        page: '/#about',
    },
    {
        name: 'Doświadczenie',
        page: '/#experience',
    },
    {
        name: 'Oddłużanie osób fizycznych',
        page: '/oddluzanie-osob-fizycznych',
    },
    {
        name: 'Pomoc prawna dla IT',
        page: '/it',
    },
];

const Header = ({ path }) => {
    const [scrollPos, setScrollPos] = useState<number>(0);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const router = useRouter();
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
    const renderHeader = () => {
        return headerElements.map((el) => {
            return (
                <S.HeaderElement
                    key={el.name}
                    href={el.page}
                    active={
                        path === el.page ||
                        (el.page.includes('#') && router.asPath === '/')
                    }
                >
                    {el.name}
                </S.HeaderElement>
            );
        });
    };
    return (
        <>
            <S.Menu
                initial={{ x: '-100%' }}
                animate={{ x: menuOpen ? '0' : '-100%' }}
            >
                <S.CloseIcon onClick={() => setMenuOpen(false)} />
                <S.MenuItems>{renderHeader()}</S.MenuItems>
            </S.Menu>

            <S.Wrapper scrollPos={scrollPos}>
                <S.MenuIcon onClick={() => setMenuOpen(true)} />
                <Title />
                <S.HeaderContent scrollPos={scrollPos}>
                    {renderHeader()}{' '}
                </S.HeaderContent>
                <div />
            </S.Wrapper>
        </>
    );
};
export default Header;
