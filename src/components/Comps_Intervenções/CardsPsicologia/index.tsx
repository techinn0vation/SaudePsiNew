'use client'

import React, { useEffect, useRef } from 'react'

import Headline from 'components/Ui/Headline'

import CardsPsicoterapia from '../CardsPsicoterapia'
import DocIntervenções from '../Doc_Intervenções'
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

import BGV3 from 'assets/img/Escolar.webp'
import BGV1 from 'assets/img/Lotus.webp'
import BGV4 from 'assets/img/Personal.webp'
import BGV2 from 'assets/img/Trabalho.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function CardsPsicologia() {
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
            title={DocIntervenções.IntervençãoPsicologia.Headline.Titulo}
            text={DocIntervenções.IntervençãoPsicologia.Headline.Descrição}
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
                      alt='Saúde Mental Image SaúdePsi'
                      title='Saúde Mental Image SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicologia>
                </HeadCardPsicologia>
                {/* Head Card Psicologia */}
                {/* Body Card Psicologia */}
                <BodyCardPsicologia>
                  <Headline
                    title={
                      DocIntervenções.IntervençãoPsicologia.SaudeMental.Titulo
                    }
                    text={
                      DocIntervenções.IntervençãoPsicologia.SaudeMental
                        .Descrição
                    }
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
                      alt='Intervenções na Área Profissional SaúdePsi Image'
                      title='Intervenções na Área Profissional SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicologia>
                </HeadCardPsicologia>
                {/* Head Card Psicologia */}
                {/* Body Card Psicologia */}
                <BodyCardPsicologia>
                  <Headline
                    title={
                      DocIntervenções.IntervençãoPsicologia.Trabalho.Titulo
                    }
                    text={
                      DocIntervenções.IntervençãoPsicologia.Trabalho.Descrição
                    }
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
                      alt='Intervenções na Área Escolar SaúdePsi Image'
                      title='Intervenções na Área Escolar SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicologia>
                </HeadCardPsicologia>
                {/* Head Card Psicologia */}
                {/* Body Card Psicologia */}
                <BodyCardPsicologia>
                  <Headline
                    title={DocIntervenções.IntervençãoPsicologia.Escolar.Titulo}
                    text={
                      DocIntervenções.IntervençãoPsicologia.Escolar.Descrição
                    }
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
                      alt='Intervenções no Desenvolvimento SaúdePsi Image'
                      title='Intervenções no Desenvolvimento SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicologia>
                </HeadCardPsicologia>
                {/* Head Card Psicologia */}
                {/* Body Card Psicologia */}
                <BodyCardPsicologia>
                  <Headline
                    title={
                      DocIntervenções.IntervençãoPsicologia.Desenvolvimento
                        .Titulo
                    }
                    text={
                      DocIntervenções.IntervençãoPsicologia.Desenvolvimento
                        .Descrição
                    }
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
        <CardsPsicoterapia />
      </ContentPsicologia>
    </WrapperPsicologia>
  )
}
