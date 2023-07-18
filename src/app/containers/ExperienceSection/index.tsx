import { useEffect, useState } from 'react';
import * as S from './index.styles';

const ExperienceSection = () => {
    const experience = [
        {
            title: 'Prawo cywilne',
            content: ['Chuj1', 'Chuj2', 'Chuj3'],
        },
        {
            title: 'Prawo inne',
            content: ['Chuj1', 'Chuj2', 'Chuj3'],
        },
        {
            title: 'Prawo chuja',
            content: ['Chuj1', 'Chuj2', 'Chuj3'],
        },
    ];
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
                                return <div key={item}>{item}</div>;
                            })}
                        </div>
                    </S.CategoryWrapper>
                );
            })}
        </S.Wrapper>
    );
};

export default ExperienceSection;
