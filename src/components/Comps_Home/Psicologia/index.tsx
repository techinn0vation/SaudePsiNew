'use client'

import React, { useEffect } from 'react'
import LazyLoad from 'react-lazyload'

import Placeholder from 'components/Placeholder'
import Headline from 'components/Ui/Headline'

import DocHome from '../Doc_Home'
import {
  BodyCardPsicologia,
  ContentPsicologia,
  FrameCardPsicologia,
  HeadCardPsicologia,
  InnerCardPsicologia,
  ViewPsicologia,
  WrapperCardsPsicologia,
  WrapperPsicologia
} from './styles'

import BGV2 from 'assets/img/Adolecente.webp'
import BGV3 from 'assets/img/Adulto.webp'
import BGV4 from 'assets/img/Idoso.webp'
import BGV1 from 'assets/img/Infatil.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Psicologia() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const blocks = document.querySelectorAll(`#BlockCardPsicologia`)

    blocks.forEach((block) => {
      gsap.to(block, {
        opacity: 0,
        scrollTrigger: {
          trigger: block,
          start: 'top top',
          end: '+=5',
          toggleActions: 'play none none reverse'
        }
      })
    })
  }, [])

  return (
    <WrapperPsicologia>
      <ContentPsicologia>
        <ViewPsicologia>
          <Headline
            title={DocHome.Psicologia.Headline.Titulo}
            text={DocHome.Psicologia.Headline.Descrição}
          />
          {/* Cards Psicologia */}
          <WrapperCardsPsicologia>
            {/* Card Psicologia */}
            <InnerCardPsicologia id='BlockCardPsicologia'>
              {/* Head Card Psicologia */}
              <HeadCardPsicologia>
                <LazyLoad
                  height={200}
                  offset={100}
                  once
                  debounce={500}
                  placeholder={<Placeholder />}
                >
                  <FrameCardPsicologia
                    src={BGV1}
                    alt='Psicologia Infantil SaúdePsi'
                    title='Psicologia Infantil SaúdePsi'
                    priority={true}
                  />
                </LazyLoad>
              </HeadCardPsicologia>
              {/* Head Card Psicologia */}
              {/* Body Card Psicologia */}
              <BodyCardPsicologia>
                <Headline
                  title={DocHome.Psicologia.Cards.PsicInfantil.Headline.Titulo}
                  text={
                    DocHome.Psicologia.Cards.PsicInfantil.Headline.Descrição
                  }
                />
              </BodyCardPsicologia>
              {/* Body Card Psicologia */}
            </InnerCardPsicologia>
            {/* Card Psicologia */}
            <InnerCardPsicologia id='BlockCardPsicologia'>
              {/* Head Card Psicologia */}
              <HeadCardPsicologia>
                <LazyLoad
                  height={200}
                  offset={100}
                  once
                  debounce={500}
                  placeholder={<Placeholder />}
                >
                  <FrameCardPsicologia
                    src={BGV2}
                    alt='Psicologia de Adolecente SaúdePsi'
                    title='Psicologia de Adolecente SaúdePsi'
                    priority={true}
                  />
                </LazyLoad>
              </HeadCardPsicologia>
              {/* Head Card Psicologia */}
              {/* Body Card Psicologia */}
              <BodyCardPsicologia>
                <Headline
                  title={
                    DocHome.Psicologia.Cards.PsicAdolecente.Headline.Titulo
                  }
                  text={
                    DocHome.Psicologia.Cards.PsicAdolecente.Headline.Descrição
                  }
                />
              </BodyCardPsicologia>
              {/* Body Card Psicologia */}
            </InnerCardPsicologia>
            {/* Card Psicologia */}
            {/* Card Psicologia */}
            <InnerCardPsicologia id='BlockCardPsicologia'>
              {/* Head Card Psicologia */}
              <HeadCardPsicologia>
                <LazyLoad
                  height={200}
                  offset={100}
                  once
                  debounce={500}
                  placeholder={<Placeholder />}
                >
                  <FrameCardPsicologia
                    src={BGV3}
                    alt='Psicologia de Adulto SaúdePsi'
                    title='Psicologia de Adulto SaúdePsi'
                    priority={true}
                  />
                </LazyLoad>
              </HeadCardPsicologia>
              {/* Head Card Psicologia */}
              {/* Body Card Psicologia */}
              <BodyCardPsicologia>
                <Headline
                  title={DocHome.Psicologia.Cards.PsicAdulto.Headline.Titulo}
                  text={DocHome.Psicologia.Cards.PsicAdulto.Headline.Descrição}
                />
              </BodyCardPsicologia>
              {/* Body Card Psicologia */}
            </InnerCardPsicologia>
            {/* Card Psicologia */}
            {/* Card Psicologia */}
            <InnerCardPsicologia id='BlockCardPsicologia'>
              {/* Head Card Psicologia */}
              <HeadCardPsicologia>
                <LazyLoad
                  height={200}
                  offset={100}
                  once
                  debounce={500}
                  placeholder={<Placeholder />}
                >
                  <FrameCardPsicologia
                    src={BGV4}
                    alt='Psicologia de Idoso SaúdePsi'
                    title='Psicologia de Idoso SaúdePsi'
                    priority={true}
                  />
                </LazyLoad>
              </HeadCardPsicologia>
              {/* Head Card Psicologia */}
              {/* Body Card Psicologia */}
              <BodyCardPsicologia>
                <Headline
                  title={DocHome.Psicologia.Cards.PsicIdoso.Headline.Titulo}
                  text={DocHome.Psicologia.Cards.PsicIdoso.Headline.Descrição}
                />
              </BodyCardPsicologia>
              {/* Body Card Psicologia */}
            </InnerCardPsicologia>
            {/* Card Psicologia */}
          </WrapperCardsPsicologia>
          {/* Cards Psicologia */}
        </ViewPsicologia>
      </ContentPsicologia>
    </WrapperPsicologia>
  )
}
