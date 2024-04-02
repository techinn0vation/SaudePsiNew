import DocContacto from 'components/Comps_Contacto/Doc_Contacto'
import { FormContactos, Hero, InfoContacts } from 'components/GeralComponents'

import BGHero from 'assets/img/Equipa.webp'

export default function Contactos() {
  return (
    <>
      <Hero
        title={DocContacto.HeadlineHero.Contacto.Titulo}
        pseudoText={DocContacto.HeadlineHero.Contacto.PseudoText}
        text={DocContacto.HeadlineHero.Contacto.Descrição}
        imgUrl={BGHero}
        showButton={false}
      />
      <InfoContacts />
      <FormContactos />
    </>
  )
}
