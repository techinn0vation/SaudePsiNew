'use client'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

import Headline from 'components/Ui/Headline'

import DocHome from '../Doc_Home'
import {
  BlockProfile,
  BorderProfile,
  ButtonLinkProfile,
  ContentEquipa,
  FrameProfile,
  InnerBlockProfile,
  InnerBlockProfileRedes,
  ViewEquipa,
  WrapperEquipa,
  WrapperProfiles
} from './styles'

import BGV1 from 'assets/img/Eduardo.webp'
import BGV2 from 'assets/img/Sonia.webp'

export default function Equipa() {
  return (
    <WrapperEquipa>
      <ContentEquipa>
        <ViewEquipa>
          <Headline
            title={DocHome.Equipa.Headline.Titulo}
            text={DocHome.Equipa.Headline.Descrição}
          />
          {/* Area de Profiles */}
          <WrapperProfiles>
            {/* Bloco de Profiles */}
            <BlockProfile>
              {/* Frame Profiles */}
              <BorderProfile>
                <FrameProfile
                  src={BGV1}
                  alt='Eduardo Romba Image SaúdePsi'
                  title='Eduardo Romba Image SaúdePsi'
                  priority={true}
                />
              </BorderProfile>
              {/* Frame Profiles */}

              {/* Interno Profiles */}
              <InnerBlockProfile>
                <Headline
                  title={DocHome.Equipa.EduardoRomba.Head.Titulo}
                  text={DocHome.Equipa.EduardoRomba.Head.Descrição}
                />
                {/* Redes Profiles */}
                <InnerBlockProfileRedes>
                  <ButtonLinkProfile
                    href={DocHome.Equipa.EduardoRomba.Redes.Facebook}
                    title='Facebook Eduardo Romba SaúdePsi'
                  >
                    <FaFacebookF />
                  </ButtonLinkProfile>
                  <ButtonLinkProfile
                    href={DocHome.Equipa.EduardoRomba.Redes.Linkedin}
                    title='Linkedin Eduardo Romba SaúdePsi'
                  >
                    <FaLinkedinIn />
                  </ButtonLinkProfile>
                  <ButtonLinkProfile
                    href={DocHome.Equipa.EduardoRomba.Redes.Email}
                    title='E-mail Eduardo Romba SaúdePsi'
                  >
                    <MdAlternateEmail />
                  </ButtonLinkProfile>
                </InnerBlockProfileRedes>
                {/* Redes Profiles */}
              </InnerBlockProfile>
              {/* Interno Profiles */}
            </BlockProfile>
            {/* Bloco de Profiles */}

            {/* Bloco de Profiles */}
            <BlockProfile>
              {/* Frame Profiles */}
              <BorderProfile>
                <FrameProfile
                  src={BGV2}
                  alt='Sónia Gravanita Image SaúdePsi'
                  title='Sónia Gravanita Image SaúdePsi'
                  priority={true}
                />
              </BorderProfile>
              {/* Frame Profiles */}

              {/* Interno Profiles */}
              <InnerBlockProfile>
                <Headline
                  title={DocHome.Equipa.SoniaGravanita.Head.Titulo}
                  text={DocHome.Equipa.SoniaGravanita.Head.Descrição}
                />
                {/* Redes Profiles */}
                <InnerBlockProfileRedes>
                  <ButtonLinkProfile
                    href={DocHome.Equipa.SoniaGravanita.Redes.Facebook}
                    title='Facebook Sónia Gravanita SaúdePsi'
                  >
                    <FaFacebookF />
                  </ButtonLinkProfile>
                  <ButtonLinkProfile
                    href={DocHome.Equipa.SoniaGravanita.Redes.Linkedin}
                    title='Linkedin Sónia Gravanita SaúdePsi'
                  >
                    <FaLinkedinIn />
                  </ButtonLinkProfile>
                  <ButtonLinkProfile
                    href={DocHome.Equipa.SoniaGravanita.Redes.Email}
                    title='E-mail Sónia Gravanita SaúdePsi'
                  >
                    <MdAlternateEmail />
                  </ButtonLinkProfile>
                </InnerBlockProfileRedes>
                {/* Redes Profiles */}
              </InnerBlockProfile>
              {/* Interno Profiles */}
            </BlockProfile>
            {/* Bloco de Profiles */}
          </WrapperProfiles>
          {/* Area de Profiles */}
        </ViewEquipa>
      </ContentEquipa>
    </WrapperEquipa>
  )
}
