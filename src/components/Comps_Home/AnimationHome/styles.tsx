import styled from 'styled-components'

export const WrapperAnimationHome = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (min-width: ${(props) => props.theme.screenSize.SM}) {
    flex-direction: row;
    -ms-flex-direction: row;

    &:nth-child(odd) {
      flex-direction: row-reverse;
      -ms-flex-direction: row-reverse;
    }
  }
`
