import React, { useEffect, useRef } from 'react'

import Headline from 'components/Ui/Headline'

import DocConsultasOnline from '../Doc_ConsultasOnline'
import {
  WrapperPsicoterapia,
  ViewPsicoterapia,
  WrapperCardsPsicoterapia,
  ViewCardsPsicoterapia,
  InnerCardPsicoterapia,
  HeadCardPsicoterapia,
  InnerHeadCardPsicoterapia,
  FrameCardPsicoterapia,
  BodyCardPsicoterapia
} from './styles'

import BGV1 from 'assets/img/Amplo.webp'
import BGV4 from 'assets/img/Comunicaçao.webp'
import BGV2 from 'assets/img/Relogio.webp'
import BGV3 from 'assets/img/Shy.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function ConstPsicoterapia() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current

      gsap.to(carousel, {
        xPercent: -100 * (carousel.children.length - 1),
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: carousel,
          start: 'top top',
          end: () => `+=${carousel.offsetWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false
        }
      })
    }
  }, [])

  return (
    <WrapperPsicoterapia>
      <ViewPsicoterapia>
        <Headline
          title={DocConsultasOnline.PsicoterapiaOnline.Headline.Titulo}
          text={DocConsultasOnline.PsicoterapiaOnline.Headline.Descrição}
        />
        {/* Cards Psicoterapia */}
        <WrapperCardsPsicoterapia>
          <ViewCardsPsicoterapia ref={carouselRef}>
            <InnerCardPsicoterapia>
              {/* Head Card Psicoterapia */}
              <HeadCardPsicoterapia>
                <InnerHeadCardPsicoterapia>
                  <FrameCardPsicoterapia
                    src={BGV1}
                    alt='Acesso Conveniente Image'
                    title='Acesso Conveniente SaúdePsi'
                    priority={true}
                  />
                </InnerHeadCardPsicoterapia>
              </HeadCardPsicoterapia>
              {/* Head Card Psicoterapia */}
              {/* Body Card Psicoterapia */}
              <BodyCardPsicoterapia>
                <Headline
                  title={
                    DocConsultasOnline.PsicoterapiaOnline.AcessoAmplo.Titulo
                  }
                  text={
                    DocConsultasOnline.PsicoterapiaOnline.AcessoAmplo.Descrição
                  }
                />
              </BodyCardPsicoterapia>
              {/* Body Card Psicoterapia */}
            </InnerCardPsicoterapia>
            {/*  */}
            <InnerCardPsicoterapia>
              {/* Head Card Psicoterapia */}
              <HeadCardPsicoterapia>
                <InnerHeadCardPsicoterapia>
                  <FrameCardPsicoterapia
                    src={BGV2}
                    alt='Comunidade de Apoio SaúdePsi Image'
                    title='Comunidade de Apoio SaúdePsi'
                    priority={true}
                  />
                </InnerHeadCardPsicoterapia>
              </HeadCardPsicoterapia>
              {/* Head Card Psicoterapia */}
              {/* Body Card Psicoterapia */}
              <BodyCardPsicoterapia>
                <Headline
                  title={
                    DocConsultasOnline.PsicoterapiaOnline.Flexibilidade.Titulo
                  }
                  text={
                    DocConsultasOnline.PsicoterapiaOnline.Flexibilidade
                      .Descrição
                  }
                />
              </BodyCardPsicoterapia>
              {/* Body Card Psicoterapia */}
            </InnerCardPsicoterapia>
            {/*  */}
            <InnerCardPsicoterapia>
              {/* Head Card Psicoterapia */}
              <HeadCardPsicoterapia>
                <InnerHeadCardPsicoterapia>
                  <FrameCardPsicoterapia
                    src={BGV3}
                    alt='Confidencialidade SaúdePsi Image'
                    title='Confidencialidade SaúdePsi'
                    priority={true}
                  />
                </InnerHeadCardPsicoterapia>
              </HeadCardPsicoterapia>
              {/* Head Card Psicoterapia */}
              {/* Body Card Psicoterapia */}
              <BodyCardPsicoterapia>
                <Headline
                  title={DocConsultasOnline.PsicoterapiaOnline.Estigma.Titulo}
                  text={DocConsultasOnline.PsicoterapiaOnline.Estigma.Descrição}
                />
              </BodyCardPsicoterapia>
              {/* Body Card Psicoterapia */}
            </InnerCardPsicoterapia>
            {/*  */}
            <InnerCardPsicoterapia>
              {/* Head Card Psicoterapia */}
              <HeadCardPsicoterapia>
                <InnerHeadCardPsicoterapia>
                  <FrameCardPsicoterapia
                    src={BGV4}
                    alt='Variedade de Recursos SaúdePsi Image'
                    title='Variedade de Recursos SaúdePsi'
                    priority={true}
                  />
                </InnerHeadCardPsicoterapia>
              </HeadCardPsicoterapia>
              {/* Head Card Psicoterapia */}
              {/* Body Card Psicoterapia */}
              <BodyCardPsicoterapia>
                <Headline
                  title={
                    DocConsultasOnline.PsicoterapiaOnline.Comunicação.Titulo
                  }
                  text={
                    DocConsultasOnline.PsicoterapiaOnline.Comunicação.Descrição
                  }
                />
              </BodyCardPsicoterapia>
              {/* Body Card Psicoterapia */}
            </InnerCardPsicoterapia>
            {/*  */}
          </ViewCardsPsicoterapia>
        </WrapperCardsPsicoterapia>
        {/* Cards Psicoterapia */}
      </ViewPsicoterapia>
    </WrapperPsicoterapia>
  )
}
