'use client'

import React, { useEffect, useRef } from 'react'

import Headline from 'components/Ui/Headline'

import DocHome from '../Doc_Home'
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

import BGV3 from 'assets/img/Adult.webp'
import BGV4 from 'assets/img/Couple.webp'
import BGV1 from 'assets/img/Ludo.webp'
import BGV2 from 'assets/img/Young.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Psicoterapia() {
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
            title={DocHome.Psicoterapia.Headline.Titulo}
            text={DocHome.Psicoterapia.Headline.Descrição}
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
                      alt='Ludoterapia SaúdePsi Image'
                      title='Ludoterapia SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicoterapia>
                </HeadCardPsicoterapia>
                {/* Head Card Psicoterapia */}
                {/* Body Card Psicoterapia */}
                <BodyCardPsicoterapia>
                  <Headline
                    title={
                      DocHome.Psicoterapia.Cards.Ludoterapia.Headline.Titulo
                    }
                    text={
                      DocHome.Psicoterapia.Cards.Ludoterapia.Headline.Descrição
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
                      alt='Psicoterapia do Adolecente SaúdePsi Image'
                      title='Psicoterapia do Adolecente SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicoterapia>
                </HeadCardPsicoterapia>
                {/* Head Card Psicoterapia */}
                {/* Body Card Psicoterapia */}
                <BodyCardPsicoterapia>
                  <Headline
                    title={
                      DocHome.Psicoterapia.Cards.PsicDoAdolescente.Headline
                        .Titulo
                    }
                    text={
                      DocHome.Psicoterapia.Cards.PsicDoAdolescente.Headline
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
                      alt='Psicoterapia do Adulto SaúdePsi Image'
                      title='Psicoterapia do Adulto SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicoterapia>
                </HeadCardPsicoterapia>
                {/* Head Card Psicoterapia */}
                {/* Body Card Psicoterapia */}
                <BodyCardPsicoterapia>
                  <Headline
                    title={
                      DocHome.Psicoterapia.Cards.PsicDoAdulto.Headline.Titulo
                    }
                    text={
                      DocHome.Psicoterapia.Cards.PsicDoAdulto.Headline.Descrição
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
                      alt='Terapia de Casal SaúdePsi Image'
                      title='Terapia de Casal SaúdePsi'
                      priority={true}
                    />
                  </InnerHeadCardPsicoterapia>
                </HeadCardPsicoterapia>
                {/* Head Card Psicoterapia */}
                {/* Body Card Psicoterapia */}
                <BodyCardPsicoterapia>
                  <Headline
                    title={
                      DocHome.Psicoterapia.Cards.PsicDeCasal.Headline.Titulo
                    }
                    text={
                      DocHome.Psicoterapia.Cards.PsicDeCasal.Headline.Descrição
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
      </ContentPsicoterapia>
    </WrapperPsicoterapia>
  )
}
