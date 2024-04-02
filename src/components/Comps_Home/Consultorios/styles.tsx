import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

export const WrapperConsultorios = styled.section`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 6rem;

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
      opacity: 0.5;
      z-index: -1;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    position: relative;

    &::after {
      content: 'Paz interior';
      writing-mode: vertical-lr;
      white-space: nowrap;

      font-size: 12rem;
      font-style: normal;
      font-weight: 700;
      line-height: 13rem;
      color: ${(props) => props.theme.colors.CinzaClaro};
      text-align: center;

      position: absolute;
      top: 95rem;
      right: 0;
      opacity: 0.6;
      z-index: -1;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.XXL}) {
    &::after {
      font-size: 13rem;
      line-height: 19rem;

      opacity: 0.7;
    }
  }
`
export const ContentConsultorios = styled.main`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 2rem 2rem 10rem 2rem;
`
export const ViewConsultorios = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3rem;

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
        content: 'Psicologia & Psicoterapia';
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
      width: 60rem;

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
`
export const WrapperCardsConsultorios = styled.div`
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

  padding: 2rem;
`
export const ViewCardsConsultorios = styled.div`
  width: 150rem;
  display: flex;
  gap: 4rem;
`

export const InnerCardConsultorio = styled.div`
  width: 100%;
  height: 58.6rem;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3rem;

  background-color: ${(props) => props.theme.colors.WhiteSmoke};
  border-radius: 0 0 1.4rem 1.4rem;
  border-bottom: solid 1.2rem ${(props) => props.theme.colors.Verde};

  padding: 0 1.4rem 5rem 1.4rem;
  margin-top: 3rem;
`
export const HeadCardConsultorio = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const FrameCardConsultorio = styled(Image)`
  width: 100%;
  height: auto;

  display: block;
  margin: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;

  box-shadow: 0.9rem 0.9rem 0 0 ${(props) => props.theme.colors.Verde};
`
export const BodyCardConsultorio = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  & > h1 {
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

  & > div:nth-child(-n + 3) {
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
`
export const BlockButtonsCardConsultorio = styled.div`
  width: auto;

  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const ButtonLinkConsultorio = styled(Link)`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.1rem;
  color: ${(props) => props.theme.colors.Branco};
  text-align: center;
  text-decoration: none;

  &::first-letter {
    text-transform: capitalize;
  }

  padding: 0.875rem 2rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.Verde};
  cursor: pointer;

  &::first-letter {
    text-transform: capitalize;
  }

  &:active {
    transform: translateY(0.2rem);
    -webkit-transform: translateY(0.2rem);
  }
`
