import { useEffect, useState } from 'react';
import * as S from './index.styles';

const experience = [
    {
        title: 'Scheller Law',
        content: [
            'Wynajem własnych nieruchomości/warszawski Muranów.',
            'Kupno nieruchomości na własny rachunek.',
            'Pomoc prawna w obrocie nieruchomościami.',
            'Pomoc prawna oraz ochrona przed windykacją i licytacją nieruchomości',
            'Pośrednictwo w obrocie nieruchomościami.',
            'Regulowanie stanów prawnych nieruchomości.',
            'Postępowania spadkowe.',
            'Postępowania wieczystoksięgowe w tym postępowania o uzgodnienie treści księgi',
            'wieczystej z rzeczywistym stanem prawnym.',
            'Działy spadków.',
            'Zniesienie współwłasności.',
        ],
    },
    {
        title: 'Equator Sp. z o.o. Zielona Góra',
        content: [
            'zakres czynności: windykacja/mediacja/obrót nieruchomościami',
        ],
    },
    {
        title: 'Kancelaria Radców Prawnych z siedzibą w Warszawie',
        content: [
            'Prawo Cywilne;',
            'Prawo Administracyjne;',
            'Prawo Rodzinne i Opiekuńcze;',
            'Prawo Upadłościowe;',
            'Prawo Pracy i Ubezpieczeń Społecznych;',
            'Prawo Podatkowe;',
            'Prawo Aktów Stanu Cywilnego;',
            'Uznanie rozwodów orzeczonych w USA;',
            'Transkrypcja zagranicznych aktów stanu cywilnego do polskiego rejestru;',
            'Reprezentacja obwinionych w postępowaniu wyjaśniającym i dyscyplinarnym ze szczególnym uwzględnieniem postępowań prowadzonych wobec nauczycieli oraz przedstawicieli służb mundurowych (żołnierzy, funkcjonariuszy Policji, Straży Granicznej), a także reprezentacja obwinionych w postępowaniu odwoławczym, w tym przed właściwymi sądami;',
            'Reprezentacja konsumentów oraz przedsiębiorców w sprawach wynikających z umów – w tym roszczeń związanych z rękojmią za wady towaru, odstąpieniem od umowy zawartej na odległość lub poza lokalem przedsiębiorstwa, świadczenia usług turystycznych, hotelarskich oraz przewozowych – w tym w toku procesu reklamacyjnego, a także postępowań przed właściwymi sądami, sądami polubownymi lub arbitrażowymi oraz postępowań mediacyjnych;',
            'Reprezentacja podatników w trakcie kontroli podatkowej, kontroli celno-skarbowej, postępowania podatkowego, a także postępowania przed właściwym sądem administracyjnym;',
            'Reprezentacja dłużników oraz wierzycieli na każdym etapie postępowania:',
            'pozasądowe rozstrzyganie sporu (negocjacje, mediacje, ugoda, wezwanie do zapłaty)',
            'postępowanie sądowe (w tym postępowanie upominawcze, nakazowe oraz elektroniczne postępowanie upominawcze)',
            'postępowanie zabezpieczające (zabezpieczenie majątku dłużnika na poczet przyszłego zaspokojenia wierzyciela)',
            'postępowanie egzekucyjne (nadzór nad prowadzoną egzekucją);',
            'Postępowania rozwodowe;',
            'Postępowania o podział majątku i ustalenie nierównych udziałów;',
            'Postępowania spadkowe;',
            'Postępowania o dział spadku;',
            'Postępowania o uznanie spadkobiercy za niegodnego dziedziczenia;',
            'Postępowania o wyłączenie małżonka od dziedziczenia;',
            'Postępowania o uzgodnienie treści księgi wieczystej z rzeczywistym stanem prawnym;',
            'Roszczenia odszkodowawcze etc.',
        ],
    },
    {
        title: 'Texapol Polska z siedzibą w Warszawie',
        content: [
            'Postępowania sądowe i administracyjne w imieniu obywateli USA',
        ],
    },
    {
        title: ' Profit Max Sp. z o.o. z siedzibą w Warszawie',
        content: [
            'Postępowania w zakresie uzyskiwania odszkodowań, zadośćuczynień i rent za zgony osób najbliższych oraz uszczerbek na zdrowiu osób poszkodowanych w wypadkach komunikacyjnych.',
        ],
    },
    {
        title: 'E.F.A. Nieruchomości Warszawa',
        content: [
            'Regulowanie stanów prawnych nieruchomości położonych w obszarze m.st. WARSZAWY oraz w gminie Piaseczno oraz obsługa umów pośrednictwa',
        ],
    },
];
const ExperienceSection = () => {
    const [isOpened, setOpened] = useState<Array<boolean>>([]);
    useEffect(() => {
        let tab: Array<boolean> = [];
        for (let i = 0; i < experience.length; i++) {
            tab.push(false);
        }
        setOpened(tab);
    }, []);
    const handleOpen = (index: number) => {
        let tab = [...isOpened];
        tab[index] = !tab[index];
        setOpened(tab);
    };
    return (
        <S.Wrapper id="experience">
            <S.Title>Doświadczenie zawodowe</S.Title>
            {experience.map((exp, index) => {
                return (
                    <S.CategoryWrapper
                        key={index}
                        onClick={() => handleOpen(index)}
                    >
                        <S.CategoryTitle>{exp.title}</S.CategoryTitle>

                        <div
                            style={{
                                opacity: isOpened[index] ? 1 : 0,
                                maxHeight: isOpened[index] ? '1000px' : '0px',
                                transition: '0.5s ease-in-out',
                            }}
                        >
                            {exp.content.map((item) => {
                                return <li key={item}>{item}</li>;
                            })}
                        </div>
                    </S.CategoryWrapper>
                );
            })}
        </S.Wrapper>
    );
};

export default ExperienceSection;
