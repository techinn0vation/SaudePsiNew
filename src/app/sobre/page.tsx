import DocSobre from 'components/Comps_Sobre/Doc_Sobre'
import { Sobre, Hero } from 'components/GeralComponents'

import BGHero from 'assets/img/Team.webp'

export default function SobreNos() {
  return (
    <>
      <Hero
        title={DocSobre.HeadlineHero.Sobre.Titulo}
        pseudoText={DocSobre.HeadlineHero.Sobre.PseudoText}
        text={DocSobre.HeadlineHero.Sobre.Descrição}
        imgUrl={BGHero}
      />
      <Sobre />
    </>
  )
}
