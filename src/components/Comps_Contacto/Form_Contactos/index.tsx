'use client'

import React, { useState } from 'react'

import Headline from 'components/Ui/Headline'

import DocContacto from '../Doc_Contacto'
import {
  BlockFormContactos,
  BoxTextMensagemForm,
  ButtonSendMensagemForm,
  ContentFormContactos,
  DrawerFormSelect,
  InnerBlockFormContactos,
  InnerViewFormContactos,
  InputFieldForm,
  OptionDrawer,
  ViewFormContactos,
  WrapperFormContactos
} from './styles'

import { mainFont } from 'styles/FontConfig'

export default function FormContactos() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [assuntoSelecionado, setAssuntoSelecionado] = useState(
    `${DocContacto.Value.Selecione}`
  )

  const handleEnviar = () => {
    const mensagemWhatsApp = `
      Olá, Me chamo ${nome}. O meu email é ${email}.
      Estou interessado em marcar uma consulta de ${assuntoSelecionado}.
      A minha mensagem é: ${mensagem}
    `

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=351968579797&text=${encodeURIComponent(
      mensagemWhatsApp
    )}`

    window.location.href = urlWhatsApp

    setAssuntoSelecionado('')
  }

  return (
    <WrapperFormContactos>
      <ContentFormContactos>
        <ViewFormContactos>
          <Headline
            title={DocContacto.Formulario.Titulo}
            text={DocContacto.Formulario.Descrição}
          />
          <InnerViewFormContactos>
            <BlockFormContactos title='Formulário de Contacto SaúdePsi'>
              <InputFieldForm
                placeholder='Nome Completo'
                type='text'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <InputFieldForm
                placeholder='Escreva o seu E-mail'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InnerBlockFormContactos>
                <DrawerFormSelect
                  value={assuntoSelecionado}
                  onChange={(e) => setAssuntoSelecionado(e.target.value)}
                >
                  <OptionDrawer>{DocContacto.Value.Selecione}</OptionDrawer>
                  <OptionDrawer>
                    {DocContacto.Value.PsicologiaInfantil}
                  </OptionDrawer>
                  <OptionDrawer>
                    {DocContacto.Value.PsicologiaAdolecente}
                  </OptionDrawer>
                  <OptionDrawer>
                    {DocContacto.Value.PsicologiaAdulto}
                  </OptionDrawer>
                  <OptionDrawer>
                    {DocContacto.Value.PsicologiaIdoso}
                  </OptionDrawer>
                  <OptionDrawer>
                    {DocContacto.Value.AvaliaçãoPsicologica}
                  </OptionDrawer>
                  <OptionDrawer>{DocContacto.Value.TerapiaCasal}</OptionDrawer>
                  <OptionDrawer>
                    {DocContacto.Value.Neuropsicologia}
                  </OptionDrawer>
                  <OptionDrawer>{DocContacto.Value.Hipnose}</OptionDrawer>
                </DrawerFormSelect>
              </InnerBlockFormContactos>
              <BoxTextMensagemForm
                className={mainFont.className}
                placeholder='Escreva a sua mensagem'
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
              <ButtonSendMensagemForm onClick={handleEnviar}>
                enviar
              </ButtonSendMensagemForm>
            </BlockFormContactos>
          </InnerViewFormContactos>
        </ViewFormContactos>
      </ContentFormContactos>
    </WrapperFormContactos>
  )
}
