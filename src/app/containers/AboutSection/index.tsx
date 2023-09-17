import { Eagle_Lake } from 'next/font/google';

import * as S from './index.styles';

const font = Eagle_Lake({
    weight: '400',

    subsets: ['latin'],
});
const AboutSection = () => {
    return (
        <S.Wrapper id="about">
            <S.WelcomeWrapper>
                <h1 className={font.className}>
                    <div>Szanowni Państwo, nazywam się&nbsp;</div>
                    <div>Katarzyna Wiktoria Szeller.</div>
                </h1>
            </S.WelcomeWrapper>
            <S.DescriptionWrapper>
                <h2>
                    <b>
                        Jestem prawnikiem, który zajmuje się regulowaniem stanów
                        prawnych nieruchomości oraz pośredniczeniem w ich
                        sprzedaży. Priorytetowy obszar działania to powiat
                        <i>zduńskowolski</i>, <i>łaski</i>, <i>sieradzki</i>{' '}
                        oraz<i>Warszawa.</i>
                    </b>
                </h2>
                <S.Paragraph>
                    Oprócz tego poszukuję, w ramach zakupu na własny rachunek
                    nieruchomości zabytkowych i rolnych, a także wynajmuję
                    własne nieruchomości.
                </S.Paragraph>
                <S.Paragraph>
                    Według danych Krajowej Rady Adwokackiej w Polsce liczba
                    adwokatów czynnych zawodowo wynosi 21460, zaś radców
                    prawnych 46838, zaś w samej Warszawie działa ponad 900 biur
                    pośrednictwa nieruchomości. Mnie się udaje łączyć obowiązki
                    prawnika oraz pośrednika do sprzedaży nieruchomości.
                </S.Paragraph>
                <S.Paragraph>
                    Dorastałam w domu, gdzie wszędzie leżały akta sądowe, a ja
                    pomagałam uzasadniać orzeczenia sądowe. W domu gdzie gościli
                    sędziowie Sądu Najwyższego oraz uznani publicyści komentarzy
                    do aktów normatywnych. Po studiach, przez wiele lat
                    działalności prawniczej zajmowałam się różnymi dziedzinami
                    prawa, ale to dopiero prawo rzeczowe, jakim jest prawo
                    własności, uzmysłowiło mi, że nawet prawo może być
                    intrygujące i logiczne.
                </S.Paragraph>
                <S.Paragraph>
                    Zgodnie z art. 113 ust. 6 ustawy z dnia 21 sierpnia 1997 r.
                    o gospodarce nieruchomościami: przez nieruchomość o
                    nieuregulowanym stanie prawnym rozumie się nieruchomość, dla
                    której ze względu na brak księgi wieczystej, zbioru
                    dokumentów albo innych dokumentów nie można ustalić osób,
                    którym przysługują do niej prawa rzeczowe.
                </S.Paragraph>
            </S.DescriptionWrapper>
        </S.Wrapper>
    );
};

export default AboutSection;
