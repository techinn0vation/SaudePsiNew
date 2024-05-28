import Link from 'next/link'

import styled from 'styled-components'

export const ButtonWhatsApp = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.Sombra};
  border-radius: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 4rem;
    line-height: 6rem;
    color: ${(props) => props.theme.colors.WhatsApp};
  }

  // Testando Responsividade FXD *

  @media (max-width: ${(props) => props.theme.screenSize.XS}) {
    position: fixed;
    top: 85%;
    left: 75%;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XS}) {
    position: fixed;

    top: 85%;
    left: 78%;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    position: fixed;

    top: 80%;
    left: 90%;
  }
`
