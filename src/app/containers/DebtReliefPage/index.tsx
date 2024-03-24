import Header from '../../components/Header';
import * as S from './index.styles';
import ContactSection from '../../containers/ContactSection';

const DebtReliefPage = () => {
    return (
        <S.Wrapper>
            <S.Content>
                <h1>Oddłużanie osób fizycznych</h1>
                <h3>
                    Jeżeli myślisz, że otrzymane od wierzyciela kolejne wezwanie
                    do zapłaty lub zawiadomienie komornika o zajęciu mienia,
                    rachunku bankowego, wynagrodzenia za pracę, nadpłaty podatku
                    oznacza że Twój świat się zawalił to jesteś w błędzie.
                    Działając sukcesywnie i cierpliwie można pozbyć się długów.
                </h3>
                <h3>
                    Przede wszystkim trzeba mieć świadomość, że zaciągnięte
                    zobowiązania należy regulować na bieżąco.
                </h3>
                <h3>
                    Są jednak sytuacje, gdy pożyczkobiorca utraci dochód, pracę,
                    pogorszy mu się zdrowie, pojawiają się inne zobowiązania,
                    zwiększą się wydatki, co powoduje, że stabilność finansowa
                    zostaje zachwiana. Wówczas mogę negocjować z wierzycielami,
                    wnosić o zmniejszenie rat. umorzenie odsetek, zgłosić
                    ubezpieczającemu kredyt lub pożyczkę zaistnienie zdarzenia
                    losowego, wnosić prośbę do wierzyciela o zawieszenie
                    postępowania egzekucyjnego, przygotować mienie nieruchome do
                    sprzedaży celem zaspokojenia długu z części otrzymanej ceny
                    i ostatecznie złożyć wniosek o upadłość konsumencką.
                </h3>
                <h3>
                    Termin „upadłość konsumencka” jest powszechnie używany w
                    publicystyce prawniczej, praktyce sądowej oraz literaturze
                    naukowej dla określenia postępowania upadłościowego
                    prowadzonego wobec osób fizycznych nieprowadzących
                    działalności gospodarczej, uregulowanego w Tytule V, Części
                    III, ustawy – Prawo upadłościowe i naprawcze.
                </h3>
                <h3>
                    Upadłość ogłasza się w stosunku do dłużnika, który stał się
                    niewypłacalny. Dłużnik jest niewypłacalny, jeżeli utracił
                    zdolność do wykonywania swoich wymagalnych zobowiązań
                    pieniężnych. Należy także wiedzieć, że postępowanie
                    upadłościowe prowadzone jest tak, aby roszczenia wierzycieli
                    zostały zaspokojone w jak najwyższym stopniu, a nie tak, by
                    “wyzerować” długi jednym postanowieniem sądu
                </h3>
            </S.Content>
            <ContactSection />
        </S.Wrapper>
    );
};

export default DebtReliefPage;
