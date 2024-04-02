import DocHome from 'components/Comps_Home/Doc_Home'
import {
  AreaDeIntervenção,
  Consultorios,
  Equipa,
  Hero,
  Psicologia,
  Psicoterapia
} from 'components/GeralComponents'

import BGHero from 'assets/img/Problem.png'

export default function HomePage() {
  return (
    <>
      <Hero
        title={DocHome.HeadlineHero.Home.Titulo}
        pseudoText={DocHome.HeadlineHero.Home.PseudoText}
        text={DocHome.HeadlineHero.Home.Descrição}
        imgUrl={BGHero}
      />
      <Psicologia />
      <AreaDeIntervenção />
      <Psicoterapia />
      <Equipa />
      <Consultorios />
    </>
  )
}
