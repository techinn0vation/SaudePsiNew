'use client'

import React, { useEffect, useRef } from 'react'

import Headline from 'components/Ui/Headline'

import ConstPsicoterapia from '../ConstPsicoterapia'
import DocConsultasOnline from '../Doc_ConsultasOnline'
import {
  BodyCardPsicologia,
  ContentPsicologia,
  FrameCardPsicologia,
  HeadCardPsicologia,
  InnerCardPsicologia,
  InnerHeadCardPsicologia,
  ViewCardsPsicologia,
  ViewPsicologia,
  WrapperCardsPsicologia,
  WrapperPsicologia
} from './styles'

import BGV2 from 'assets/img/Grupo.webp'
import BGV1 from 'assets/img/Pc.webp'
import BGV3 from 'assets/img/Privacidade.webp'
import BGV4 from 'assets/img/Recursos.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function ConsultasOnline() {
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
    <WrapperPsicologia>
      <ContentPsicologia>
        <ViewPsicologia>
          <Headline
            title={DocConsultasOnline.Headline.Titulo}
            text={DocConsultasOnline.Headline.Descrição}
          />
          {/* Cards Psicologia */}
          <WrapperCardsPsicologia>
            <ViewCardsPsicologia ref={carouselRef}>
              <InnerCardPsicologia>
                {/* Head Card Psicologia */}
                <HeadCardPsicologia>
                  <InnerHeadCardPsicologia>
                    <FrameCardPsicologia
                      src={BGV1}
                      alt='Acesso Conveniente Image'
                      title='Acesso Conveniente SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicologia>
                </HeadCardPsicologia>
                {/* Head Card Psicologia */}
                {/* Body Card Psicologia */}
                <BodyCardPsicologia>
                  <Headline
                    title={DocConsultasOnline.Acesso.Titulo}
                    text={DocConsultasOnline.Acesso.Descrição}
                  />
                </BodyCardPsicologia>
                {/* Body Card Psicologia */}
              </InnerCardPsicologia>
              {/*  */}
              <InnerCardPsicologia>
                {/* Head Card Psicologia */}
                <HeadCardPsicologia>
                  <InnerHeadCardPsicologia>
                    <FrameCardPsicologia
                      src={BGV2}
                      alt='Comunidade de Apoio SaúdePsi Image'
                      title='Comunidade de Apoio SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicologia>
                </HeadCardPsicologia>
                {/* Head Card Psicologia */}
                {/* Body Card Psicologia */}
                <BodyCardPsicologia>
                  <Headline
                    title={DocConsultasOnline.Comunidade.Titulo}
                    text={DocConsultasOnline.Comunidade.Descrição}
                  />
                </BodyCardPsicologia>
                {/* Body Card Psicologia */}
              </InnerCardPsicologia>
              {/*  */}
              <InnerCardPsicologia>
                {/* Head Card Psicologia */}
                <HeadCardPsicologia>
                  <InnerHeadCardPsicologia>
                    <FrameCardPsicologia
                      src={BGV3}
                      alt='Confidencialidade SaúdePsi Image'
                      title='Confidencialidade SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicologia>
                </HeadCardPsicologia>
                {/* Head Card Psicologia */}
                {/* Body Card Psicologia */}
                <BodyCardPsicologia>
                  <Headline
                    title={DocConsultasOnline.Confidencialidade.Titulo}
                    text={DocConsultasOnline.Confidencialidade.Descrição}
                  />
                </BodyCardPsicologia>
                {/* Body Card Psicologia */}
              </InnerCardPsicologia>
              {/*  */}
              <InnerCardPsicologia>
                {/* Head Card Psicologia */}
                <HeadCardPsicologia>
                  <InnerHeadCardPsicologia>
                    <FrameCardPsicologia
                      src={BGV4}
                      alt='Variedade de Recursos SaúdePsi Image'
                      title='Variedade de Recursos SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicologia>
                </HeadCardPsicologia>
                {/* Head Card Psicologia */}
                {/* Body Card Psicologia */}
                <BodyCardPsicologia>
                  <Headline
                    title={DocConsultasOnline.Recursos.Titulo}
                    text={DocConsultasOnline.Recursos.Descrição}
                  />
                </BodyCardPsicologia>
                {/* Body Card Psicologia */}
              </InnerCardPsicologia>
              {/*  */}
            </ViewCardsPsicologia>
          </WrapperCardsPsicologia>
          {/* Cards Psicologia */}
        </ViewPsicologia>
        {/*  */}
        <ConstPsicoterapia />
      </ContentPsicologia>
    </WrapperPsicologia>
  )
}
