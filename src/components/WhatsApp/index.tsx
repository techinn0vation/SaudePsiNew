import { IoLogoWhatsapp } from 'react-icons/io'

import { ButtonWhatsApp } from './styles'

export default function WhatsApp() {
  const message = encodeURIComponent(
    'Olá, gostaria de agendar uma consulta de Psicologia/Psicoterapia.'
  )
  const phoneNumber = '351968579797'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <ButtonWhatsApp
      href={whatsappUrl}
      title='WhatsApp SaúdePsi Consultas de Psicologia e Psicoterapia'
    >
      <IoLogoWhatsapp />
    </ButtonWhatsApp>
  )
}
