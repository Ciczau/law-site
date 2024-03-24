import Header from '../../components/Header';
import * as S from './index.styles';
import ContactSection from '../../containers/ContactSection';

const ITPage = () => {
    return (
        <S.Wrapper>
            <S.Content>
                <h1>Pomoc prawna dla IT</h1>
                <h3>
                    Branża informatyczna musi działać zgodnie z prawem i być
                    chroniona przez prawo.
                </h3>
                <h3>Dlatego informatycy potrzebują:</h3>
                <ol>
                    <li>
                        ochrony praw autorskich dla twórców aplikacji, systemów,
                        programów;
                    </li>
                    <li>
                        umowy licencyjnej na prawo do korzystania z prawa
                        autorskiego;
                    </li>
                    <li>
                        treści umów z kontrahentami na tworzenie programów,
                        aplikacji, systemów;
                    </li>
                    <li>
                        regulaminów dla sklepów internetowych i stron
                        internetowych;
                    </li>
                    <li>polityki RODO;</li>
                    <li>
                        regulaminów zwrotów i reklamacji dla handlu
                        internetowego;
                    </li>
                    <li>
                        założenia działalności gospodarczej lub rejestracji
                        spółek dla twórców IT;
                    </li>
                    <li>pomocy przy wszelkich zaistniałych sporach.</li>
                </ol>
            </S.Content>
            <ContactSection />
        </S.Wrapper>
    );
};

export default ITPage;
