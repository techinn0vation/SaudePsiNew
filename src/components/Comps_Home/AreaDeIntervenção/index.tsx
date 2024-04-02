'use client'

import React, { useEffect } from 'react'

import Headline from 'components/Ui/Headline'

import DocHome from '../Doc_Home'
import {
  BodyCardAreaDeIntervenção,
  ContentAreaDeIntervenção,
  FrameCardAreaDeIntervenção,
  HeadCardAreaDeIntervenção,
  InnerCardAreaDeIntervenção,
  ViewAreaDeIntervenção,
  WrapperCardsAreaDeIntervenção,
  WrapperAreaDeIntervenção
} from './styles'

import BGV3 from 'assets/img/Ansiedade.webp'
import BGV2 from 'assets/img/DepInfatil.webp'
import BGV1 from 'assets/img/Depressão.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AreaDeIntervenção() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const blocks = document.querySelectorAll(`#BlockCardIntervenção`)

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
    <WrapperAreaDeIntervenção>
      <ContentAreaDeIntervenção>
        <ViewAreaDeIntervenção>
          <Headline
            title={DocHome.AreaDeIntervenção.Headline.Titulo}
            text={DocHome.AreaDeIntervenção.Headline.Descrição}
          />
          {/* Cards AreaDeIntervenção */}
          <WrapperCardsAreaDeIntervenção>
            {/* Card AreaDeIntervenção */}
            <InnerCardAreaDeIntervenção id='BlockCardIntervenção'>
              {/* Head Card AreaDeIntervenção */}
              <HeadCardAreaDeIntervenção>
                <FrameCardAreaDeIntervenção
                  src={BGV1}
                  alt='Àrea de Intervenção Depressão SaúdePsi'
                  title='Àrea de Intervenção Depressão SaúdePsi'
                  priority={true}
                />
              </HeadCardAreaDeIntervenção>
              {/* Head Card AreaDeIntervenção */}
              {/* Body Card AreaDeIntervenção */}
              <BodyCardAreaDeIntervenção>
                <Headline
                  title={
                    DocHome.AreaDeIntervenção.Cards.Depressão.Headline.Titulo
                  }
                  text={
                    DocHome.AreaDeIntervenção.Cards.Depressão.Headline.Descrição
                  }
                />
              </BodyCardAreaDeIntervenção>
              {/* Body Card AreaDeIntervenção */}
            </InnerCardAreaDeIntervenção>
            {/* Card AreaDeIntervenção */}
            <InnerCardAreaDeIntervenção id='BlockCardIntervenção'>
              {/* Head Card AreaDeIntervenção */}
              <HeadCardAreaDeIntervenção>
                <FrameCardAreaDeIntervenção
                  src={BGV2}
                  alt='Àrea de Intervenção Depressão  Infantil SaúdePsi'
                  title='Àrea de Intervenção Depressão Infantil SaúdePsi'
                  priority={true}
                />
              </HeadCardAreaDeIntervenção>
              {/* Head Card AreaDeIntervenção */}
              {/* Body Card AreaDeIntervenção */}
              <BodyCardAreaDeIntervenção>
                <Headline
                  title={
                    DocHome.AreaDeIntervenção.Cards.DepressãoInfantil.Headline
                      .Titulo
                  }
                  text={
                    DocHome.AreaDeIntervenção.Cards.DepressãoInfantil.Headline
                      .Descrição
                  }
                />
              </BodyCardAreaDeIntervenção>
              {/* Body Card AreaDeIntervenção */}
            </InnerCardAreaDeIntervenção>
            {/* Card AreaDeIntervenção */}
            {/* Card AreaDeIntervenção */}
            <InnerCardAreaDeIntervenção id='BlockCardIntervenção'>
              {/* Head Card AreaDeIntervenção */}
              <HeadCardAreaDeIntervenção>
                <FrameCardAreaDeIntervenção
                  src={BGV3}
                  alt='Àrea de Intervenção Ansiedade e Pânico SaúdePsi'
                  title='Àrea de Intervenção Ansiedade e Pânico SaúdePsi'
                  priority={true}
                />
              </HeadCardAreaDeIntervenção>
              {/* Head Card AreaDeIntervenção */}
              {/* Body Card AreaDeIntervenção */}
              <BodyCardAreaDeIntervenção>
                <Headline
                  title={
                    DocHome.AreaDeIntervenção.Cards.AnsiedadePanico.Headline
                      .Titulo
                  }
                  text={
                    DocHome.AreaDeIntervenção.Cards.AnsiedadePanico.Headline
                      .Descrição
                  }
                />
              </BodyCardAreaDeIntervenção>
              {/* Body Card AreaDeIntervenção */}
            </InnerCardAreaDeIntervenção>
            {/* Card AreaDeIntervenção */}
          </WrapperCardsAreaDeIntervenção>
          {/* Cards AreaDeIntervenção */}
        </ViewAreaDeIntervenção>
      </ContentAreaDeIntervenção>
    </WrapperAreaDeIntervenção>
  )
}
