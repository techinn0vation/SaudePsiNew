'use client'

import { StaticImageData } from 'next/image'
import React, { useEffect } from 'react'

import DocHome from 'components/Comps_Home/Doc_Home'
import HeadlineHero from 'components/Ui/HeadlineHero'

import Button from '../Ui/Button'
import {
  BlockContentHero,
  ContentHero,
  FrameHero,
  InnerContentHero,
  WrapperHero
} from './styles'

export interface PropsHero {
  title: string
  text: string
  imgUrl: StaticImageData
  pseudoText: string
  showButton?: boolean // Nova propriedade para controlar a exibição do botão
}

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero({
  title,
  text,
  imgUrl,
  pseudoText,
  showButton = true
}: PropsHero) {
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
    <WrapperHero id='BlockCardPsicologia'>
      <ContentHero>
        <InnerContentHero>
          <BlockContentHero>
            <HeadlineHero
              title={{
                mainText: `${title}`,
                pseudoText: `${pseudoText}`
              }}
              text={text}
            />
            {showButton && (
              <Button
                text='marcar consulta'
                onClick={() => {}}
                href={DocHome.HeadlineHero.Home.Link}
              />
            )}
          </BlockContentHero>
          <FrameHero
            src={imgUrl}
            alt='Image Hero SaúdePsi Psicologia e Psicoterapia'
            title='Image Hero SaúdePsi Psicologia e Psicoterapia'
            priority={true}
          />
        </InnerContentHero>
      </ContentHero>
    </WrapperHero>
  )
}
