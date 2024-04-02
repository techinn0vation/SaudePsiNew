'use client'

import React, { useEffect } from 'react'

import Headline from 'components/Ui/Headline'

import DocIntervenções from '../Doc_Intervenções'
import {
  BodyCardTopicos,
  ContentTopicos,
  FrameCardTopicos,
  HeadCardTopicos,
  InnerCardTopicos,
  ViewTopicos,
  WrapperCardsTopicos,
  WrapperTopicos
} from './styles'

import BGV4 from 'assets/img/Anorexia.webp'
import BGV2 from 'assets/img/Bipolar.webp'
import BGV5 from 'assets/img/Bulimia.webp'
import BGV3 from 'assets/img/Obsessivo.webp'
import BGV1 from 'assets/img/Personalidade.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Topicos() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const blocks = document.querySelectorAll(`#BlockCardTopicos`)

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
    <WrapperTopicos>
      <ContentTopicos>
        <ViewTopicos>
          <Headline
            title={DocIntervenções.Topicos.Headline.Titulo}
            text={DocIntervenções.Topicos.Headline.Descrição}
          />
          {/* Cards Topicos */}
          <WrapperCardsTopicos>
            {/* Card Topicos */}
            <InnerCardTopicos id='BlockCardTopicos'>
              {/* Head Card Topicos */}
              <HeadCardTopicos>
                <FrameCardTopicos
                  src={BGV1}
                  alt='Transtorno de Personalidade SaúdePsi'
                  title='Transtorno de Personalidade SaúdePsi'
                  priority={true}
                />
              </HeadCardTopicos>
              {/* Head Card Topicos */}
              {/* Body Card Topicos */}
              <BodyCardTopicos>
                <Headline
                  title={DocIntervenções.Topicos.Personalidade.Titulo}
                  text={DocIntervenções.Topicos.Personalidade.Descrição}
                />
              </BodyCardTopicos>
              {/* Body Card Topicos */}
            </InnerCardTopicos>
            {/* Card Topicos */}
            <InnerCardTopicos id='BlockCardTopicos'>
              {/* Head Card Topicos */}
              <HeadCardTopicos>
                <FrameCardTopicos
                  src={BGV2}
                  alt='Transtorno Bipolar SaúdePsi'
                  title='Transtorno Bipolar SaúdePsi'
                  priority={true}
                />
              </HeadCardTopicos>
              {/* Head Card Topicos */}
              {/* Body Card Topicos */}
              <BodyCardTopicos>
                <Headline
                  title={DocIntervenções.Topicos.Bipolar.Titulo}
                  text={DocIntervenções.Topicos.Bipolar.Descrição}
                />
              </BodyCardTopicos>
              {/* Body Card Topicos */}
            </InnerCardTopicos>
            {/* Card Topicos */}
            {/* Card Topicos */}
            <InnerCardTopicos id='BlockCardTopicos'>
              {/* Head Card Topicos */}
              <HeadCardTopicos>
                <FrameCardTopicos
                  src={BGV3}
                  alt='Transtorno Compulsivo e Obsessivo SaúdePsi'
                  title='Transtorno Compulsivo e Obsessivo SaúdePsi'
                  priority={true}
                />
              </HeadCardTopicos>
              {/* Head Card Topicos */}
              {/* Body Card Topicos */}
              <BodyCardTopicos>
                <Headline
                  title={DocIntervenções.Topicos.Obsessivo.Titulo}
                  text={DocIntervenções.Topicos.Obsessivo.Descrição}
                />
              </BodyCardTopicos>
              {/* Body Card Topicos */}
            </InnerCardTopicos>
            {/* Card Topicos */}
            {/* Card Topicos */}
            <InnerCardTopicos id='BlockCardTopicos'>
              {/* Head Card Topicos */}
              <HeadCardTopicos>
                <FrameCardTopicos
                  src={BGV4}
                  alt='Anorexia Nervosa SaúdePsi'
                  title='Anorexia Nervosa SaúdePsi'
                  priority={true}
                />
              </HeadCardTopicos>
              {/* Head Card Topicos */}
              {/* Body Card Topicos */}
              <BodyCardTopicos>
                <Headline
                  title={DocIntervenções.Topicos.Anorexia.Titulo}
                  text={DocIntervenções.Topicos.Anorexia.Descrição}
                />
              </BodyCardTopicos>
              {/* Body Card Topicos */}
            </InnerCardTopicos>
            {/* Card Topicos */}
            <InnerCardTopicos id='BlockCardTopicos'>
              {/* Head Card Topicos */}
              <HeadCardTopicos>
                <FrameCardTopicos
                  src={BGV5}
                  alt='Bulimia Nervosa SaúdePsi'
                  title='Bulimia Nervosa SaúdePsi'
                  priority={true}
                />
              </HeadCardTopicos>
              {/* Head Card Topicos */}
              {/* Body Card Topicos */}
              <BodyCardTopicos>
                <Headline
                  title={DocIntervenções.Topicos.Bulimia.Titulo}
                  text={DocIntervenções.Topicos.Bulimia.Descrição}
                />
              </BodyCardTopicos>
              {/* Body Card Topicos */}
            </InnerCardTopicos>
            {/* Card Topicos */}
          </WrapperCardsTopicos>
          {/* Cards Topicos */}
        </ViewTopicos>
      </ContentTopicos>
    </WrapperTopicos>
  )
}
