'use client'

import React, { useEffect, useRef } from 'react'
import LazyLoad from 'react-lazyload'

import Placeholder from 'components/Placeholder'
import Title from 'components/Ui/CustomTitle'
import Headline from 'components/Ui/Headline'

import DocHome from '../Doc_Home'
import {
  BlockButtonsCardConsultorio,
  BodyCardConsultorio,
  ButtonLinkConsultorio,
  ContentConsultorios,
  FrameCardConsultorio,
  HeadCardConsultorio,
  InnerCardConsultorio,
  ViewCardsConsultorios,
  ViewConsultorios,
  WrapperCardsConsultorios,
  WrapperConsultorios
} from './styles'

import BGV3 from 'assets/img/Lisboa-v2.webp'
import BGV2 from 'assets/img/Lisboa.webp'
import BGV4 from 'assets/img/Oeiras.webp'
import BGV1 from 'assets/img/Sintra.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Consultorios() {
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
    <WrapperConsultorios>
      <ContentConsultorios>
        <ViewConsultorios>
          <Headline
            title={DocHome.Consultorios.Headline.Titulo}
            text={DocHome.Consultorios.Headline.Descrição}
          />
          {/* Cards Consultorios */}
          <WrapperCardsConsultorios>
            <ViewCardsConsultorios ref={carouselRef}>
              <InnerCardConsultorio>
                <HeadCardConsultorio>
                  <LazyLoad
                    height={200}
                    offset={100}
                    once
                    debounce={500}
                    placeholder={<Placeholder />}
                  >
                    <FrameCardConsultorio
                      src={BGV1}
                      alt='Consultório Sintra SaúdePsi Image'
                      title='Consultório Sintra SaúdePsi'
                      priority={true}
                    />
                  </LazyLoad>
                </HeadCardConsultorio>
                {/*  */}
                <BodyCardConsultorio>
                  <Title title={DocHome.Consultorios.Cards.Sintra.Titulo} />

                  {/* Headline */}
                  <Headline
                    title={DocHome.Consultorios.Cards.Sintra.Headline.Titulo}
                    text={DocHome.Consultorios.Cards.Sintra.Headline.Descrição}
                  />
                  {/* Headline */}

                  {/* Headline */}
                  <Headline
                    title={DocHome.Consultorios.Cards.Sintra.Horario.Titulo}
                    text={DocHome.Consultorios.Cards.Sintra.Horario.Descrição}
                  />
                  {/* Headline */}

                  <BlockButtonsCardConsultorio>
                    <ButtonLinkConsultorio
                      href={DocHome.Consultorios.Cards.Lisboa.Links.Ligar}
                      title='Consultório em Sintra'
                    >
                      ligar
                    </ButtonLinkConsultorio>
                  </BlockButtonsCardConsultorio>
                </BodyCardConsultorio>
              </InnerCardConsultorio>
              {/*  */}
              <InnerCardConsultorio>
                <HeadCardConsultorio>
                  <LazyLoad
                    height={200}
                    offset={100}
                    once
                    debounce={500}
                    placeholder={<Placeholder />}
                  >
                    <FrameCardConsultorio
                      src={BGV2}
                      alt='Consultório Lisboa SaúdePsi Image'
                      title='Consultório Lisboa SaúdePsi'
                      priority={true}
                    />
                  </LazyLoad>
                </HeadCardConsultorio>
                {/*  */}
                <BodyCardConsultorio>
                  <Title title={DocHome.Consultorios.Cards.Lisboa.Titulo} />

                  {/* Headline */}
                  <Headline
                    title={DocHome.Consultorios.Cards.Lisboa.Headline.Titulo}
                    text={DocHome.Consultorios.Cards.Lisboa.Headline.Descrição}
                  />
                  {/* Headline */}

                  {/* Headline */}
                  <Headline
                    title={DocHome.Consultorios.Cards.Lisboa.Horario.Titulo}
                    text={DocHome.Consultorios.Cards.Lisboa.Horario.Descrição}
                  />
                  {/* Headline */}

                  <BlockButtonsCardConsultorio>
                    <ButtonLinkConsultorio
                      href={DocHome.Consultorios.Cards.Lisboa.Links.Ligar}
                      title='Consultório em Lisboa'
                    >
                      ligar
                    </ButtonLinkConsultorio>
                  </BlockButtonsCardConsultorio>
                </BodyCardConsultorio>
              </InnerCardConsultorio>
              {/*  */}
              <InnerCardConsultorio>
                <HeadCardConsultorio>
                  <LazyLoad
                    height={200}
                    offset={100}
                    once
                    debounce={500}
                    placeholder={<Placeholder />}
                  >
                    <FrameCardConsultorio
                      src={BGV3}
                      alt='Consultório Lisboa SaúdePsi Image'
                      title='Consultório Lisboa SaúdePsi'
                      priority={true}
                    />
                  </LazyLoad>
                </HeadCardConsultorio>
                {/*  */}
                <BodyCardConsultorio>
                  <Title title={DocHome.Consultorios.Cards.Alverca.Titulo} />

                  {/* Headline */}
                  <Headline
                    title={DocHome.Consultorios.Cards.Alverca.Headline.Titulo}
                    text={DocHome.Consultorios.Cards.Alverca.Headline.Descrição}
                  />
                  {/* Headline */}

                  {/* Headline */}
                  <Headline
                    title={DocHome.Consultorios.Cards.Alverca.Horario.Titulo}
                    text={DocHome.Consultorios.Cards.Alverca.Horario.Descrição}
                  />
                  {/* Headline */}

                  <BlockButtonsCardConsultorio>
                    <ButtonLinkConsultorio
                      href={DocHome.Consultorios.Cards.Lisboa.Links.Ligar}
                      title='Consultório em Lisboa'
                    >
                      ligar
                    </ButtonLinkConsultorio>
                  </BlockButtonsCardConsultorio>
                </BodyCardConsultorio>
              </InnerCardConsultorio>
              {/*  */}
              <InnerCardConsultorio>
                <HeadCardConsultorio>
                  <LazyLoad
                    height={200}
                    offset={100}
                    once
                    debounce={500}
                    placeholder={<Placeholder />}
                  >
                    <FrameCardConsultorio
                      src={BGV4}
                      alt='Consultório Oeiras SaúdePsi Image'
                      title='Consultório Oeiras SaúdePsi'
                      priority={true}
                    />
                  </LazyLoad>
                </HeadCardConsultorio>
                {/*  */}
                <BodyCardConsultorio>
                  <Title title={DocHome.Consultorios.Cards.Oeiras.Titulo} />

                  {/* Headline */}
                  <Headline
                    title={DocHome.Consultorios.Cards.Oeiras.Headline.Titulo}
                    text={DocHome.Consultorios.Cards.Oeiras.Headline.Descrição}
                  />
                  {/* Headline */}

                  {/* Headline */}
                  <Headline
                    title={DocHome.Consultorios.Cards.Oeiras.Horario.Titulo}
                    text={DocHome.Consultorios.Cards.Oeiras.Horario.Descrição}
                  />
                  {/* Headline */}

                  <BlockButtonsCardConsultorio>
                    <ButtonLinkConsultorio
                      href={DocHome.Consultorios.Cards.Lisboa.Links.Ligar}
                      title='Consultório em Oeiras'
                    >
                      ligar
                    </ButtonLinkConsultorio>
                  </BlockButtonsCardConsultorio>
                </BodyCardConsultorio>
              </InnerCardConsultorio>
              {/*  */}
            </ViewCardsConsultorios>
          </WrapperCardsConsultorios>
          {/* Cards Consultorios */}
        </ViewConsultorios>
      </ContentConsultorios>
    </WrapperConsultorios>
  )
}
