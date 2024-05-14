import DocHome from 'components/Comps_Home/Doc_Home'
import {
  AreaDeIntervenção,
  Consultorios,
  Equipa,
  Meta,
  Hero,
  Psicologia,
  Psicoterapia
} from 'components/GeralComponents'

import BGHero from 'assets/img/Sofa.webp'

export default function HomePage() {
  return (
    <>
      <Meta
        title={DocHome.Helmet.Home.Titulo}
        description={DocHome.Helmet.Home.Descrição}
      />
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
