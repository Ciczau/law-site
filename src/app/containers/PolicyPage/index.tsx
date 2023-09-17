import { GlobalStyle } from 'containers/LandingPage/index.styles';
import Head from 'components/Head';

import * as S from './index.styles';

const PolicyPage = () => {
    return (
        <S.Wrapper>
            <Head />
            <GlobalStyle />
            <p>Polityka prywatności</p>
            <p>
                Nie musisz podawać nam swoich danych w celu korzystania z tej
                strony.
            </p>

            <p>
                Scheller Law nie gromadzi informacji umożliwiających
                identyfikację osób odwiedzających tę witrynę, chyba że
                informacje te zostaną przekazane bezpośrednio przez
                odwiedzającego lub za pośrednictwem przeglądarki odwiedzającego
                (której prywatność można przeglądać lub aktualizować w
                ustawieniach swojej przeglądarki).
            </p>
            <p>
                Jedyne dane osobowe, które zbieramy i przechowujemy, to
                informacje, które nam przekazujesz, wysyłając do nas e-mail lub
                korzystając z naszego formularza kontaktowego. Gdy przekazujesz
                nam te informacje, traktujemy to jako zgodę na wykorzystywanie
                ich wyłącznie w celach opisanych poniżej. Będziemy przechowywać
                dane osobowe tak długo, jak jest to konieczne lub dozwolone w
                świetle celów, dla których je nam przekazałeś. Nie będziemy
                wykorzystywać informacji dostarczonych podczas korzystania z tej
                witryny, z wyjątkiem komunikacji za pośrednictwem poczty
                elektronicznej, odpowiadania na bezpośrednie zapytania i
                analizowania ruchów na stronie. Zebrane informacje nie będą
                udostępniane ani sprzedawane osobom trzecim.
            </p>

            <p>
                Scheller Law Katarzyna Szeller zastrzega sobie prawo do zmiany
                niniejszej Polityki prywatności w dowolnym momencie bez
                uprzedniego ostrzeżenia użytkowników naszej witryny. Jeśli
                jakakolwiek nowa polityka wejdzie w życie, opublikujemy ją na
                tej stronie. Żadna nowa polityka nie będzie działać wstecz.
            </p>
            <p>Ostatnia aktualizacja: sierpień 2023</p>
        </S.Wrapper>
    );
};
export default PolicyPage;
