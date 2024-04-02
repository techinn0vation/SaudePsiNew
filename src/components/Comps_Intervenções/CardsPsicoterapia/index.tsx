'use client'

import React, { useEffect, useRef } from 'react'

import Headline from 'components/Ui/Headline'

import DocIntervenções from '../Doc_Intervenções'
import {
  BodyCardPsicoterapia,
  ContentPsicoterapia,
  FrameCardPsicoterapia,
  HeadCardPsicoterapia,
  InnerCardPsicoterapia,
  InnerHeadCardPsicoterapia,
  ViewCardsPsicoterapia,
  ViewPsicoterapia,
  WrapperCardsPsicoterapia,
  WrapperPsicoterapia
} from './styles'

import BGV1 from 'assets/img/Comportamental.webp'
import BGV4 from 'assets/img/Familar.webp'
import BGV2 from 'assets/img/Psicologico.webp'
import BGV3 from 'assets/img/Si.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function CardsPsicoterapia() {
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
      <ContentPsicoterapia>
        <ViewPsicoterapia>
          <Headline
            title={DocIntervenções.IntervençãoPsicoterapia.Headline.Titulo}
            text={DocIntervenções.IntervençãoPsicoterapia.Headline.Descrição}
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
                      alt='Intervenções na Área Comportamental SaúdePsi Image'
                      title='Intervenções na Área Comportamental SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicoterapia>
                </HeadCardPsicoterapia>
                {/* Head Card Psicoterapia */}
                {/* Body Card Psicoterapia */}
                <BodyCardPsicoterapia>
                  <Headline
                    title={
                      DocIntervenções.IntervençãoPsicoterapia.Comportamental
                        .Titulo
                    }
                    text={
                      DocIntervenções.IntervençãoPsicoterapia.Comportamental
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
                      src={BGV2}
                      alt='Intervenções nas Áreas Psicologicas SaúdePsi Image'
                      title='Intervenções nas Áreas Psicologicas SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicoterapia>
                </HeadCardPsicoterapia>
                {/* Head Card Psicoterapia */}
                {/* Body Card Psicoterapia */}
                <BodyCardPsicoterapia>
                  <Headline
                    title={
                      DocIntervenções.IntervençãoPsicoterapia.Psicodinâmica
                        .Titulo
                    }
                    text={
                      DocIntervenções.IntervençãoPsicoterapia.Psicodinâmica
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
                      alt='Intervenções nas Áreas Psicologicas SaúdePsi Image'
                      title='Intervenções nas Áreas Psicologicas SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicoterapia>
                </HeadCardPsicoterapia>
                {/* Head Card Psicoterapia */}
                {/* Body Card Psicoterapia */}
                <BodyCardPsicoterapia>
                  <Headline
                    title={
                      DocIntervenções.IntervençãoPsicoterapia.Aceitação.Titulo
                    }
                    text={
                      DocIntervenções.IntervençãoPsicoterapia.Aceitação
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
                      src={BGV4}
                      alt='Intervenções nas Áreas Familiares SaúdePsi Image'
                      title='Intervenções nas Áreas Familiares SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicoterapia>
                </HeadCardPsicoterapia>
                {/* Head Card Psicoterapia */}
                {/* Body Card Psicoterapia */}
                <BodyCardPsicoterapia>
                  <Headline
                    title={
                      DocIntervenções.IntervençãoPsicoterapia.Familiar.Titulo
                    }
                    text={
                      DocIntervenções.IntervençãoPsicoterapia.Familiar.Descrição
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
        {/*  */}
      </ContentPsicoterapia>
    </WrapperPsicoterapia>
  )
}
