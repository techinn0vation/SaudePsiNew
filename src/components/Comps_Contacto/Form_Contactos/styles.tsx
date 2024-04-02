import styled from 'styled-components'

export const WrapperFormContactos = styled.section`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    position: relative;

    &::before {
      content: '';
      width: 85%;
      height: 50%;
      position: absolute;
      top: 33%;
      right: 0;
      background-color: ${(props) => props.theme.colors.Verde};
      opacity: 0.2;
      z-index: -1;
    }
  }
`
export const ContentFormContactos = styled.main`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  padding: 10rem 2rem 10rem 2rem;
`
export const ViewFormContactos = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

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

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    & > div:nth-child(1) {
      h1 {
        font-size: 3rem;
        line-height: 4.5rem;
      }
    }
  }
`
export const InnerViewFormContactos = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
export const BlockFormContactos = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 38rem;

    background-color: ${(props) => props.theme.colors.WhiteSmoke};
    padding: 2rem;

    border-top: solid 0.5rem ${(props) => props.theme.colors.Verde};
    border-bottom: solid 0.5rem ${(props) => props.theme.colors.Verde};
    border-left: solid 0.5rem ${(props) => props.theme.colors.Verde};
    border-right: 0.5rem solid transparent;

    border-image: linear-gradient(
        to top,
        ${(props) => props.theme.colors.Verde},
        transparent 20%,
        transparent 80%,
        ${(props) => props.theme.colors.Verde}
      )
      1;
  }
`
export const InnerBlockFormContactos = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
// ===========
export const DrawerFormSelect = styled.select`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 1.4rem 0.9rem;
  outline: none;
  cursor: pointer;

  background-color: transparent;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.1rem;
  color: ${(props) => props.theme.colors.VerdeEscuro};

  border-bottom: solid 0.2rem ${(props) => props.theme.colors.Verde};
`
export const OptionDrawer = styled.option`
  /* font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.1rem;
  color: ${(props) => props.theme.colors.VerdeEscuro};
  padding: 1.4rem 0.9rem;
  outline: none;
  cursor: text;

  padding: 1.4rem; */
`
// ===========

export const InputFieldForm = styled.input`
  width: 100%;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.1rem;
  color: ${(props) => props.theme.colors.VerdeEscuro};
  text-align: left;

  padding: 1.4rem 0.9rem;
  outline: none;
  cursor: text;

  background-color: transparent;
  border-bottom: solid 0.2rem ${(props) => props.theme.colors.Verde};
`
export const BoxTextMensagemForm = styled.textarea`
  width: 100%;
  height: 27rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.1rem;
  color: ${(props) => props.theme.colors.VerdeEscuro};
  text-align: left;

  padding: 1.4rem 0.9rem;
  outline: none;
  cursor: text;
  resize: none;

  background-color: transparent;
  border: solid 0.2rem ${(props) => props.theme.colors.Verde};
  border-radius: 0.9rem;
`
export const ButtonSendMensagemForm = styled.button`
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

  transition: ease-in 0.03s;
  -webkit-transition: ease-in 0.03s;

  &:active {
    transform: translateY(0.2rem);
    -webkit-transform: translateY(0.2rem);
  }
`
