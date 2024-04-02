'use client'

import {
  FaEnvelope,
  FaMapSigns,
  FaPhoneAlt
} from 'components/Comps_Contacto/IconsContactos'
import Headline from 'components/Ui/Headline'

import DocContacto from '../Doc_Contacto'
import {
  BlockContactos,
  BodyBlockContactos,
  ButtonLinkContactos,
  ContentInfoContactos,
  HeaderBlockContactos,
  IconBlockContactos,
  ViewContactos,
  WrapperInfoContactos
} from './styles'

export default function InfoContacts() {
  return (
    <WrapperInfoContactos>
      <ContentInfoContactos>
        <ViewContactos>
          <BlockContactos>
            <HeaderBlockContactos>
              <IconBlockContactos>
                <FaPhoneAlt />
              </IconBlockContactos>
            </HeaderBlockContactos>
            {/*  */}
            <BodyBlockContactos title='Contacto Via Telefone SaúdePsi'>
              <ButtonLinkContactos href={DocContacto.Telefones.LinhaUm}>
                968 579 797
              </ButtonLinkContactos>
              <ButtonLinkContactos href={DocContacto.Telefones.LinhaDois}>
                214 572 296
              </ButtonLinkContactos>
            </BodyBlockContactos>
          </BlockContactos>

          <BlockContactos>
            <HeaderBlockContactos>
              <IconBlockContactos>
                <FaEnvelope />
              </IconBlockContactos>
            </HeaderBlockContactos>
            {/*  */}
            <BodyBlockContactos title='Contacto Via E-mail SaúdePsi'>
              <ButtonLinkContactos href={DocContacto.Email.EmailUm}>
                geral@saudepsi.pt
              </ButtonLinkContactos>
              <ButtonLinkContactos href={DocContacto.Email.EmailDois}>
                consultas@saudepsi.pt
              </ButtonLinkContactos>
            </BodyBlockContactos>
          </BlockContactos>

          <BlockContactos>
            <HeaderBlockContactos>
              <IconBlockContactos>
                <FaMapSigns />
              </IconBlockContactos>
            </HeaderBlockContactos>
            {/*  */}
            <BodyBlockContactos title='Consultórios em Portugal'>
              <Headline
                title={DocContacto.Local.Cidade}
                text={DocContacto.Local.Cosultorios}
              />
            </BodyBlockContactos>
          </BlockContactos>
        </ViewContactos>
      </ContentInfoContactos>
    </WrapperInfoContactos>
  )
}
