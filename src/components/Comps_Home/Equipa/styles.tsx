import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

export const WrapperEquipa = styled.section`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;

  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;

    background-color: ${(props) => props.theme.colors.Verde};

    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    z-index: -1;
  }
`
export const ContentEquipa = styled.main`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 5rem 2rem 10rem 2rem;
`
export const ViewEquipa = styled.div`
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
export const WrapperProfiles = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;
  }
`
export const BlockProfile = styled.div`
  width: auto;
  min-height: auto;

  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  &:nth-child(2) {
    flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: column;
    -ms-flex-direction: column;

    &:nth-child(2) {
      flex-direction: column;
      -ms-flex-direction: column;
    }
  }
`
export const FrameProfile = styled(Image)`
  width: 10rem;
  height: 10rem;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;

  border: solid 0.5rem ${(props) => props.theme.colors.Branco};
  border-radius: 100%;
`
export const BorderProfile = styled.div`
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem;

  background-color: ${(props) => props.theme.colors.Verde};
  border-radius: 100%;
`
export const InnerBlockProfile = styled.div`
  width: auto;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5em;

    h1 {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.VerdeEscuro};
      text-align: center;
      text-transform: capitalize;
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
export const InnerBlockProfileRedes = styled.div`
  width: auto;

  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1.4rem;
`
export const ButtonLinkProfile = styled(Link)`
  width: auto;

  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.Branco};
  }

  padding: 0.9rem;

  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.Verde};
  cursor: pointer;

  transition: ease-in 0.03s;
  -webkit-transition: ease-in 0.03s;

  &:active {
    transform: translateY(0.2rem);
    -webkit-transform: translateY(0.2rem);
  }
`
