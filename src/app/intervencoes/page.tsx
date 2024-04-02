import DocIntervenções from 'components/Comps_Intervenções/Doc_Intervenções'
import {
  CardsPsicologia,
  Hero,
  Meta,
  Topicos
} from 'components/GeralComponents'

import BGHero from 'assets/img/Building.webp'

export default function IntervençõesPage() {
  return (
    <>
      <Meta
        title={DocIntervenções.Helmet.Intervenções.Titulo}
        description={DocIntervenções.Helmet.Intervenções.Descrição}
      />
      <Hero
        title={DocIntervenções.HeadlineHero.Intervenções.Titulo}
        pseudoText={DocIntervenções.HeadlineHero.Intervenções.PseudoText}
        text={DocIntervenções.HeadlineHero.Intervenções.Descrição}
        imgUrl={BGHero}
      />
      <CardsPsicologia />
      <Topicos />
    </>
  )
}
