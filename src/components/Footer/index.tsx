'use client'

import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import DocHome from 'components/Comps_Home/Doc_Home'
import Text from 'components/Ui/CustomText'
import Title from 'components/Ui/CustomTitle'

import {
  BlockFooter,
  ButtonLinkFooter,
  ContentFooter,
  FrameLogoFooter,
  InnerBlockFooter,
  ViewFooter,
  WrapperFooter,
  WrapperSocialFields
} from './styles'

import BGV1 from 'assets/img/Brand.png'

export default function Footer() {
  // Configuração do botão WhatsApp
  const message = encodeURIComponent(
    'Olá, gostaria de agendar uma consulta de Psicologia/Psicoterapia.'
  )
  const phoneNumber = '351968579797'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <WrapperFooter>
      <ContentFooter>
        <FrameLogoFooter
          src={BGV1}
          alt='Logo Footer SaúdePsi'
          title='Logo Footer SaúdePsi'
          priority={true}
        />
        <ViewFooter>
          <BlockFooter>
            <Title title={DocHome.Footer.Consultas.Titulo} />
            <InnerBlockFooter>
              <ButtonLinkFooter
                href='/home'
                title='Psicologia Infantil SaúdePsi'
              >
                psicologia Infantil
              </ButtonLinkFooter>
              <ButtonLinkFooter
                href='/home'
                title='Psicologia do Adolescente SaúdePsi'
              >
                psicologia do Adolescente
              </ButtonLinkFooter>
              <ButtonLinkFooter
                href='/home'
                title='Psicologia do Adulto SaúdePsi'
              >
                psicologia do Adulto
              </ButtonLinkFooter>
              <ButtonLinkFooter
                href='/home'
                title='Psicologia do Idoso SaúdePsi'
              >
                psicologia do Idoso
              </ButtonLinkFooter>
            </InnerBlockFooter>
          </BlockFooter>

          <BlockFooter>
            <Title title={DocHome.Footer.Intervenções.Titulo} />
            <InnerBlockFooter>
              <ButtonLinkFooter
                href='/home'
                title='Ansiedade e Pânico SaúdePsi'
              >
                ansiedade e Pânico
              </ButtonLinkFooter>
              <ButtonLinkFooter
                href='/intervencoes'
                title='Transtorno de Personalidade SaúdePsi'
              >
                transtorno de Personalidade
              </ButtonLinkFooter>
              <ButtonLinkFooter
                href='/intervencoes'
                title='Transtorno Bipolar SaúdePsi'
              >
                transtorno Bipolar
              </ButtonLinkFooter>
              <ButtonLinkFooter
                href='/intervencoes'
                title='Anorexia Nervosa SaúdePsi'
              >
                anorexia Nervosa
              </ButtonLinkFooter>
            </InnerBlockFooter>
          </BlockFooter>

          <BlockFooter>
            <Title title={DocHome.Footer.Contactos.Titulo} />
            <InnerBlockFooter>
              <ButtonLinkFooter
                href={DocHome.Footer.Contactos.Linhas.LinhaPrimaria}
                title='Contacto Telefonico SaúdePsi'
              >
                +351 214 572 296
              </ButtonLinkFooter>
              <ButtonLinkFooter
                href={DocHome.Footer.Contactos.Linhas.LinhaSecundaria}
                title='Contacto Telefonico SaúdePsi'
              >
                +351 968 579 797
              </ButtonLinkFooter>
              <ButtonLinkFooter
                href={DocHome.Footer.Contactos.Email}
                title='Contacto E-mail SaúdePsi'
              >
                geral@saudepsi.pt
              </ButtonLinkFooter>
            </InnerBlockFooter>
          </BlockFooter>
        </ViewFooter>
        {/*  */}
        <BlockFooter>
          <Title title='Siga-nos nas nossas redes sociais' />
          <WrapperSocialFields>
            <ButtonLinkFooter
              href={whatsappUrl}
              title='WhatsApp SaúdePsi Consultas de Psicologia e Psicoterapia'
            >
              <FaWhatsapp />
            </ButtonLinkFooter>
            <ButtonLinkFooter
              href=''
              title='Instagram SaúdePsi Consultas de Psicologia e Psicoterapia'
            >
              <FaInstagram />
            </ButtonLinkFooter>
          </WrapperSocialFields>
        </BlockFooter>
        {/*  */}
        <Text
          text='copyright © 2024. Todos os direitos reservados à '
          onClick={() => {}}
        />
      </ContentFooter>
    </WrapperFooter>
  )
}
