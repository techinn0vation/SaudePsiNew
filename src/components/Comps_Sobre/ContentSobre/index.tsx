'use client'

import React, { useEffect } from 'react'

import Headline from 'components/Ui/Headline'

import DocSobre from '../Doc_Sobre'
import {
  BodyCardPageSobre,
  ContentPageSobre,
  FrameCardPageSobre,
  HeadCardPageSobre,
  InnerCardPageSobre,
  ViewPageSobre,
  WrapperCardsPageSobre,
  WrapperPageSobre
} from './styles'

import BGV2 from 'assets/img/Doctor.webp'
import BGV1 from 'assets/img/Health.webp'
import BGV3 from 'assets/img/People.webp'
import BGV4 from 'assets/img/Peoples.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Sobre() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const blocks = document.querySelectorAll(`#BlockCardPageSobre`)

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
    <WrapperPageSobre>
      <ContentPageSobre>
        <ViewPageSobre>
          {/* Cards PageSobre */}
          <WrapperCardsPageSobre>
            {/* Card PageSobre */}
            <InnerCardPageSobre id='BlockCardPageSobre'>
              {/* Head Card PageSobre */}
              <HeadCardPageSobre>
                <FrameCardPageSobre
                  src={BGV1}
                  alt='Quem é a SaúdePsi image'
                  title='Quem é a SaúdePsi?'
                  priority={true}
                />
              </HeadCardPageSobre>
              {/* Head Card PageSobre */}
              {/* Body Card PageSobre */}
              <BodyCardPageSobre>
                <Headline
                  title={DocSobre.QuemSomos.Headline.Titulo}
                  text={DocSobre.QuemSomos.Headline.Descrição}
                />
              </BodyCardPageSobre>
              {/* Body Card PageSobre */}
            </InnerCardPageSobre>
            {/* Card PageSobre */}
            <InnerCardPageSobre id='BlockCardPageSobre'>
              {/* Head Card PageSobre */}
              <HeadCardPageSobre>
                <FrameCardPageSobre
                  src={BGV2}
                  alt='O que faz a SaúdePsi Image'
                  title='O que faz a SaúdePsi?'
                  priority={true}
                />
              </HeadCardPageSobre>
              {/* Head Card PageSobre */}
              {/* Body Card PageSobre */}
              <BodyCardPageSobre>
                <Headline
                  title={DocSobre.OqueFazemos.Headline.Titulo}
                  text={DocSobre.OqueFazemos.Headline.Descrição}
                />
              </BodyCardPageSobre>
              {/* Body Card PageSobre */}
            </InnerCardPageSobre>
            {/* Card PageSobre */}
            {/* Card PageSobre */}
            <InnerCardPageSobre id='BlockCardPageSobre'>
              {/* Head Card PageSobre */}
              <HeadCardPageSobre>
                <FrameCardPageSobre
                  src={BGV3}
                  alt='A nossa Missão SaúdePsi Image'
                  title='A nossa Missão SaúdePsi'
                  priority={true}
                />
              </HeadCardPageSobre>
              {/* Head Card PageSobre */}
              {/* Body Card PageSobre */}
              <BodyCardPageSobre>
                <Headline
                  title={DocSobre.Missão.Headline.Titulo}
                  text={DocSobre.Missão.Headline.Descrição}
                />
              </BodyCardPageSobre>
              {/* Body Card PageSobre */}
            </InnerCardPageSobre>
            {/* Card PageSobre */}
            {/* Card PageSobre */}
            <InnerCardPageSobre id='BlockCardPageSobre'>
              {/* Head Card PageSobre */}
              <HeadCardPageSobre>
                <FrameCardPageSobre
                  src={BGV4}
                  alt='A nossa Visão SaúdePsi'
                  title='A nossa Visão SaúdePsi'
                  priority={true}
                />
              </HeadCardPageSobre>
              {/* Head Card PageSobre */}
              {/* Body Card PageSobre */}
              <BodyCardPageSobre>
                <Headline
                  title={DocSobre.Visão.Headline.Titulo}
                  text={DocSobre.Visão.Headline.Descrição}
                />
              </BodyCardPageSobre>
              {/* Body Card PageSobre */}
            </InnerCardPageSobre>
            {/* Card PageSobre */}
          </WrapperCardsPageSobre>
          {/* Cards PageSobre */}
        </ViewPageSobre>
      </ContentPageSobre>
    </WrapperPageSobre>
  )
}
