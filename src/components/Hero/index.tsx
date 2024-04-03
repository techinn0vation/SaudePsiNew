'use client'

import { StaticImageData } from 'next/image'

import AnimationHero from 'components/AnimationHero'
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
  showButton?: boolean
}

export default function Hero({
  title,
  text,
  imgUrl,
  pseudoText,
  showButton = true
}: PropsHero) {
  return (
    <AnimationHero>
      <WrapperHero>
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
    </AnimationHero>
  )
}
