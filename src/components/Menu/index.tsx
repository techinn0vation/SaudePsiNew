'use client'
import { useEffect, useState } from 'react'

import {
  ContentHeader,
  WrapperHeader,
  LogoBranding,
  ControlHamburger,
  RowHamburger,
  WrapperLinks,
  DisplayLink,
  ViewLogoBranding,
  InnerBlockLinks
} from './styles'

import Brand from 'assets/img/Brand.png'

export default function Menu() {
  const [isActive, setIsActive] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeLink')
    if (storedActiveLink) {
      setActiveLink(storedActiveLink)
    }
  }, [])

  const toggleHamburger = () => {
    setIsActive(!isActive)
  }

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
    setIsActive(false)
    localStorage.setItem('activeLink', link)
  }

  return (
    <WrapperHeader>
      <ContentHeader>
        <ViewLogoBranding>
          <LogoBranding
            src={Brand}
            alt='SaúdePsi Logo'
            title='Logo SaúdePsi'
            priority={true}
          />
        </ViewLogoBranding>
        <ControlHamburger onClick={toggleHamburger}>
          <RowHamburger active={isActive} />
          <RowHamburger active={isActive} />
          <RowHamburger active={isActive} />
        </ControlHamburger>
        <WrapperLinks active={isActive}>
          <InnerBlockLinks>
            <DisplayLink
              href='/home'
              title='Home Link SaúdePsi'
              className={activeLink === 'Home' ? 'active' : ''}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </DisplayLink>
            <DisplayLink
              href='/sobre'
              title='Sobre Link SaúdePsi'
              className={activeLink === 'Sobre' ? 'active' : ''}
              onClick={() => handleLinkClick('Sobre')}
            >
              Sobre
            </DisplayLink>
            <DisplayLink
              href='/consultasOnline'
              title='Consultas Link SaúdePsi'
              className={activeLink === 'ConsultasOnline' ? 'active' : ''}
              onClick={() => handleLinkClick('ConsultasOnline')}
            >
              consultas
            </DisplayLink>
            <DisplayLink
              href='/intervencoes'
              title='Intervenções Link SaúdePsi'
              className={activeLink === 'Intervenções' ? 'active' : ''}
              onClick={() => handleLinkClick('Intervenções')}
            >
              intervenções
            </DisplayLink>
            <DisplayLink
              href='/contactos'
              title='Contactos Link SaúdePsi'
              className={activeLink === 'Contactos' ? 'active' : ''}
              onClick={() => handleLinkClick('Contactos')}
            >
              contactos
            </DisplayLink>
          </InnerBlockLinks>
        </WrapperLinks>
      </ContentHeader>
    </WrapperHeader>
  )
}
