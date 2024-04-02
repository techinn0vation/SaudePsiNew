import Image from 'next/image'

import styled from 'styled-components'

export const WrapperHero = styled.section`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before {
    content: '';
    width: 100%;
    min-height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(
      ${(props) => props.theme.colors.Verde},
      ${(props) => props.theme.colors.Branco} 78%
    );
    z-index: -1;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    &::before {
      background: linear-gradient(
        ${(props) => props.theme.colors.Verde},
        ${(props) => props.theme.colors.Branco} 86%
      );
    }
  }
`
export const ContentHero = styled.main`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InnerContentHero = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 1.4rem;

  margin: 16.5rem 0 6rem 0;

  @media (min-width: ${(props) => props.theme.screenSize.SM}) {
    width: 52rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 68rem;
  }
`
export const BlockContentHero = styled.div`
  width: 100%;
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
    gap: 3rem;

    h1 {
      font-size: 2.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: 4.2rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }

      span {
        color: ${(props) => props.theme.colors.VerdeEscuro};
      }
    }

    p {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.1rem;
      color: ${(props) => props.theme.colors.VerdeEscuro};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  button {
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
    background-color: ${(props) => props.theme.colors.VerdeEscuro};
    cursor: pointer;

    &::first-letter {
      text-transform: capitalize;
    }

    transition: ease-in 0.03s;
    -webkit-transition: ease-in 0.03s;

    &:active {
      transform: translateY(0.2rem);
      -webkit-transform: translateY(0.2rem);
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.SM}) {
    & > div:nth-child(1) {
      h1 {
        font-size: 3.8rem;
        line-height: 5.7rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    & > div:nth-child(1) {
      h1 {
        font-size: 4.8rem;
        line-height: 7.2rem;
      }

      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
  }

  /* @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    & > div:nth-child(1) {
      h1 {
        font-size: 4.8rem;
        line-height: 7.2rem;
      }
    }
  } */

  /* @media (min-width: ${(props) => props.theme.screenSize.XXL}) {
    & > div:nth-child(1) {
      width: 90rem;
    }
  } */
`
export const FrameHero = styled(Image)`
  width: 90%;
  height: 425px;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;

  @media (min-width: ${(props) => props.theme.screenSize.SM}) {
    width: 30rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 43rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XXL}) {
    width: 45rem;
  }
`
