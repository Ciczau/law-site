import { useEffect, useState } from 'react'
import * as S from './index.styles'
import { experience } from 'consts/experience'

const ExperienceSection = () => {
  const [isOpened, setOpened] = useState<Array<boolean>>([])
  useEffect(() => {
    let tab: Array<boolean> = []
    for (let i = 0; i < experience.length; i++) {
      tab.push(false)
    }
    setOpened(tab)
  }, [])
  const handleOpen = (index: number) => {
    let tab = [...isOpened]
    tab[index] = !tab[index]
    setOpened(tab)
  }
  const renderExperience = () => {
    return (
      <>
        {experience.map((exp, index) => {
          return (
            <S.CategoryWrapper key={index} onClick={() => handleOpen(index)}>
              <S.CategoryTitle>{exp.title}</S.CategoryTitle>

              <div
                style={{
                  maxHeight: isOpened[index] ? '2000px' : '0px',
                  transition: '0.5s ease-in-out',
                  overflow: 'hidden',
                }}
              >
                {exp.content.map((item) => {
                  return <li key={item}>{item}</li>
                })}
              </div>
            </S.CategoryWrapper>
          )
        })}
      </>
    )
  }
  return (
    <S.Wrapper id="experience">
      <S.Title>Doświadczenie zawodowe</S.Title>
      {renderExperience()}
    </S.Wrapper>
  )
}

export default ExperienceSection
