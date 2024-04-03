'use client'

import Headline from 'components/Ui/Headline'

import ScrollAnimationHome from '../AnimationHome'
import DocHome from '../Doc_Home'
import {
  BodyCardPsicologia,
  ContentPsicologia,
  FrameCardPsicologia,
  HeadCardPsicologia,
  ViewPsicologia,
  WrapperCardsPsicologia,
  WrapperPsicologia
} from './styles'

import BGV2 from 'assets/img/Adolecente.webp'
import BGV3 from 'assets/img/Adulto.webp'
import BGV4 from 'assets/img/Idoso.webp'
import BGV1 from 'assets/img/Infatil.webp'

export default function Psicologia() {
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
            <ScrollAnimationHome>
              {/* Head Card Psicologia */}
              <HeadCardPsicologia>
                <FrameCardPsicologia
                  src={BGV1}
                  alt='Psicologia Infantil SaúdePsi'
                  title='Psicologia Infantil SaúdePsi'
                  priority={true}
                />
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
            </ScrollAnimationHome>
            {/* Card Psicologia */}
            <ScrollAnimationHome>
              {/* Head Card Psicologia */}
              <HeadCardPsicologia>
                <FrameCardPsicologia
                  src={BGV2}
                  alt='Psicologia de Adolecente SaúdePsi'
                  title='Psicologia de Adolecente SaúdePsi'
                  priority={true}
                />
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
            </ScrollAnimationHome>
            {/* Card Psicologia */}
            {/* Card Psicologia */}
            <ScrollAnimationHome>
              {/* Head Card Psicologia */}
              <HeadCardPsicologia>
                <FrameCardPsicologia
                  src={BGV3}
                  alt='Psicologia de Adulto SaúdePsi'
                  title='Psicologia de Adulto SaúdePsi'
                  priority={true}
                />
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
            </ScrollAnimationHome>
            {/* Card Psicologia */}
            {/* Card Psicologia */}
            <ScrollAnimationHome>
              {/* Head Card Psicologia */}
              <HeadCardPsicologia>
                <FrameCardPsicologia
                  src={BGV4}
                  alt='Psicologia de Idoso SaúdePsi'
                  title='Psicologia de Idoso SaúdePsi'
                  priority={true}
                />
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
            </ScrollAnimationHome>
            {/* Card Psicologia */}
          </WrapperCardsPsicologia>
          {/* Cards Psicologia */}
        </ViewPsicologia>
      </ContentPsicologia>
    </WrapperPsicologia>
  )
}
