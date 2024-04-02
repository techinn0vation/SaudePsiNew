'use client'

import { Helmet } from 'react-helmet'

interface MetaProps {
  title: string
  description: string
}
export default function Meta({ title, description }: MetaProps) {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta httpEquiv='X-UA-Compatible' content='Safari' />
        <meta httpEquiv='X-UA-Compatible' content='Chrome' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Content-Language' content='pt_PT' />
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='Consultas de psicologia, Consultas de psicoterapia, terapias, depressão, ansiedade, psicólogos, psicólogos em Oeiras, psicólogos em Lisboa, psicólogos em Sintra, transtorno de ansiedade, terapia cognitivo-comportamental, TCC, terapia de aceitação e compromisso, ACT, terapia de comportamento dialético, DBT, psicoterapia infantil, psicoterapia adolescente, terapia de casal, terapia familiar, saúde mental, bem-estar emocional, autoestima, gestão do stress, transtorno do espectro autista, TDAH, transtorno bipolar, distúrbios do sono, fobia social, terapia online, psicologia clínica, psicologia positiva, tratamento psicológico'
        />
        <meta
          name='author'
          content='InovaSoft Digital - Marketing e Publicidade'
        />
        <meta property='og:url' content='https://saudepsi.pt' />
        <meta property='og:locale' content='pt_PT' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta
          property='og:image'
          content='https://saudepsi.pt/consulta-de-psicologia-intro.jpg'
        />
        <title>{title}</title>
        <link
          rel='shortcut icon'
          href='/assets/img/Brasao.png'
          type='image/png'
        />{' '}
      </Helmet>
    </>
  )
}
