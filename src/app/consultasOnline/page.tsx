import DocConsultasOnline from 'components/Comps_Consultas_Online/Doc_ConsultasOnline'
import { ConsultasOnline, Hero, Meta } from 'components/GeralComponents'

import BGHero from 'assets/img/Online.webp'

export default function ConsultasOnlinePage() {
  return (
    <>
      <Meta
        title={DocConsultasOnline.Helmet.ConsultasOnline.Titulo}
        description={DocConsultasOnline.Helmet.ConsultasOnline.Descrição}
      />
      <Hero
        title={DocConsultasOnline.HeadlineHero.ConsultasOnline.Titulo}
        pseudoText={DocConsultasOnline.HeadlineHero.ConsultasOnline.PseudoText}
        text={DocConsultasOnline.HeadlineHero.ConsultasOnline.Descrição}
        imgUrl={BGHero}
      />
      <ConsultasOnline />
    </>
  )
}
