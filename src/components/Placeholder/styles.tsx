import styled from 'styled-components'

export const TextPlaceholder = styled.div`
  width: 100%;
  height: auto;

  h1 {
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
`
