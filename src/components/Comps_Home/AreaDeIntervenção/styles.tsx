import Image from 'next/image'

import styled from 'styled-components'

export const WrapperAreaDeIntervenção = styled.section`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    position: relative;

    &::before {
      content: 'Resiliência';
      writing-mode: vertical-lr;
      white-space: nowrap;

      font-size: 7rem;
      font-style: normal;
      font-weight: 700;
      line-height: 9rem;
      color: ${(props) => props.theme.colors.CinzaClaro};
      text-align: center;

      position: absolute;
      top: 15rem;
      left: 0;
      opacity: 0.6;
      z-index: -1;
    }

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
      top: 78rem;
      right: 0;
      opacity: 0.6;
      z-index: -1;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    &::before {
      font-size: 10rem;
      line-height: 15rem;

      opacity: 0.7;
    }

    &::after {
      font-size: 13rem;
      line-height: 19rem;

      opacity: 0.6;
    }
  }
`
export const ContentAreaDeIntervenção = styled.main`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 2rem 2rem 10rem 2rem;
`
export const ViewAreaDeIntervenção = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3rem;

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
        content: 'Intervenção';
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
export const WrapperCardsAreaDeIntervenção = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    width: 84.5rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    width: 93rem;
  }
`
export const BodyCardAreaDeIntervenção = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

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
export const HeadCardAreaDeIntervenção = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`
export const FrameCardAreaDeIntervenção = styled(Image)`
  width: 90%;
  height: 40.5rem;

  display: block;
  margin: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
