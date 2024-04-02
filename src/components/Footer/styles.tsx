import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

export const WrapperFooter = styled.footer`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.Verde};
`
export const ContentFooter = styled.main`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  padding: 10rem 2rem 10rem 2rem;

  & > p {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.1rem;
    color: ${(props) => props.theme.colors.Branco};
    text-align: center;

    &::after {
      content: 'SaúdePsi';
      color: ${(props) => props.theme.colors.VerdeEscuro};
    }

    &::first-letter {
      text-transform: capitalize;
    }
  }

  &::after {
    content: '';
    width: 10rem;
    height: 0.2rem;

    background-color: ${(props) => props.theme.colors.VerdeEscuro};
  }
`
export const FrameLogoFooter = styled(Image)`
  width: 18rem;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
export const ViewFooter = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: center;
    align-items: start;

    gap: 10rem;
  }
`
export const BlockFooter = styled.div`
  width: auto;

  min-height: auto;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;

  & > h1 {
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3rem;
    color: ${(props) => props.theme.colors.Branco};
    text-align: center;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    justify-content: start;
    align-items: start;
  }
`
export const InnerBlockFooter = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    justify-content: start;
    align-items: start;

    & > a {
      text-align: left;
    }
  }
`
export const ButtonLinkFooter = styled(Link)`
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
