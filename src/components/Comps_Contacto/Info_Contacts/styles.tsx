import Link from 'next/link'

import styled from 'styled-components'

export const WrapperInfoContactos = styled.section`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    position: relative;

    &::before {
      content: 'Contacte-nos';
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
      content: 'SaúdePsi';
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
      opacity: 0.8;
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
export const ContentInfoContactos = styled.main`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  padding: 10rem 2rem 10rem 2rem;

  &::after {
    content: '';
    width: 20rem;
    height: 0.2rem;
    margin: 1.6rem 0;

    background-color: ${(props) => props.theme.colors.Verde};
    border-radius: 0.2rem;
  }
`
export const ViewContactos = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media (min-width: ${(props) => props.theme.screenSize.SM}) {
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: start;
    align-items: start;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 70rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    width: 76.8rem;
  }
`
export const BlockContactos = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  &:nth-child(3) > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

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
      white-space: nowrap;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }
`
export const HeaderBlockContactos = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const IconBlockContactos = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.Verde};
  border-radius: 100%;
  padding: 0.9rem;

  svg {
    font-size: 2rem;
    line-height: 3rem;
    color: ${(props) => props.theme.colors.Branco};
  }
`
export const BodyBlockContactos = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ButtonLinkContactos = styled(Link)`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.1rem;
  color: ${(props) => props.theme.colors.VerdeEscuro};
  text-align: center;
  text-decoration: none;

  &::first-letter {
    text-transform: capitalize;
  }

  cursor: pointer;

  &::first-letter {
    text-transform: capitalize;
  }
`
