import Image from 'next/image'

import styled from 'styled-components'

export const WrapperPsicologia = styled.section`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    position: relative;

    &::before {
      content: '';
      width: 50rem;
      height: 85rem;

      background-color: ${(props) => props.theme.colors.Verde};

      position: absolute;
      top: 70rem;
      left: 0;
      opacity: 0.4;
      z-index: -1;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    position: relative;

    &::after {
      content: 'Renovação';
      writing-mode: vertical-lr;
      white-space: nowrap;

      font-size: 7rem;
      font-style: normal;
      font-weight: 700;
      line-height: 9rem;
      color: ${(props) => props.theme.colors.CinzaClaro};
      text-align: center;

      position: absolute;
      top: 85rem;
      right: 0;
      opacity: 0.6;
      z-index: -1;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    &::after {
      font-size: 13rem;
      line-height: 19rem;

      opacity: 0.6;
    }
  }
`
export const ContentPsicologia = styled.main`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
`
export const ViewPsicologia = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3rem;

  padding: 2rem 2rem 10rem 2rem;

  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    h1 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 3rem;
      color: ${(props) => props.theme.colors.VerdeEscuro};
      text-align: center;

      &::after {
        content: 'Intervenções em Psicologia';
        color: ${(props) => props.theme.colors.Verde};
      }

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.1rem;
      color: ${(props) => props.theme.colors.VerdeEscuro};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    &::after {
      content: '';
      width: 10rem;
      height: 0.2rem;
      margin: 1.6rem 0;

      background-color: ${(props) => props.theme.colors.Verde};
      border-radius: 0.2rem;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.SM}) {
    & > div:nth-child(1) {
      width: 52rem;

      h1 {
        font-size: 2.8rem;
        line-height: 4.2rem;
      }

      p {
        font-size: 1.4rem;
        line-height: 2.1rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    & > div:nth-child(1) {
      width: 64rem;

      h1 {
        font-size: 3rem;
        line-height: 4.5rem;
      }

      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    & > div:nth-child(1) {
      width: 83rem;
    }
  }
`
export const WrapperCardsPsicologia = styled.div`
  width: 100%;
  overflow: hidden;
  height: 140rem;
  padding: 1.4rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    margin-left: 36rem;

    transition: ease-in 0.03s;
    -webkit-transition: ease-in 0.03s;
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    margin-left: 60rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    margin-left: 95rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XXL}) {
    margin-left: 130rem;
  }
`
export const ViewCardsPsicologia = styled.div`
  width: 150rem;
  display: flex;
  gap: 3rem;
`
export const InnerCardPsicologia = styled.div`
  width: 100%;
  height: 56rem;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;

  flex: auto;

  position: relative;

  background-color: ${(props) => props.theme.colors.WhiteSmoke};
  border-bottom: solid 0.9rem ${(props) => props.theme.colors.Verde};
  border-radius: 2rem;
`
export const BodyCardPsicologia = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 1.4rem;

  z-index: 1;

  & > div:nth-child(1) {
    width: 100%;

    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    h1 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 3rem;
      color: ${(props) => props.theme.colors.VerdeEscuro};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.1rem;
      color: ${(props) => props.theme.colors.VerdeEscuro};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    & > div:nth-child(1) {
      h1 {
        font-size: 2.3rem;
        line-height: 3.45rem;
      }

      p {
        font-size: 1.4rem;
        line-height: 2.1rem;
      }
    }
  }
`
export const HeadCardPsicologia = styled.div`
  width: 100%;
  height: 18rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3rem;

  background-color: ${(props) => props.theme.colors.Verde};
  border-radius: 2rem 2rem 0 2rem;

  &::before {
    content: '';
    width: 3.5rem;
    height: 3.5rem;

    background-color: ${(props) => props.theme.colors.Verde};

    position: absolute;
    top: 16rem;
    right: 0;

    border-radius: 0 2rem 0 0;
  }

  &::after {
    content: '';
    width: 4rem;
    height: 3.5rem;

    background-color: ${(props) => props.theme.colors.WhiteSmoke};

    position: absolute;
    top: 18rem;
    right: 0;

    border-radius: 0 2rem 0 0;
  }
`
export const InnerHeadCardPsicologia = styled.div`
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.6rem;

  background-color: ${(props) => props.theme.colors.VerdeEscuro};
  border: solid 0.4rem ${(props) => props.theme.colors.Branco};
  border-radius: 100%;
`
export const FrameCardPsicologia = styled(Image)`
  width: 4.5rem;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
