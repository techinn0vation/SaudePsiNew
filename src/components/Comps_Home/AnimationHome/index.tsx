import React, { useEffect, ReactNode } from 'react'

import { WrapperAnimationHome } from './styles'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface GsapProps {
  children: ReactNode
}

const ScrollAnimationHome: React.FC<GsapProps> = ({ children }) => {
  useEffect(() => {
    const blocks = document.querySelectorAll(`#BlockCardPsicologia`)

    blocks.forEach((block) => {
      gsap.to(block, {
        opacity: 0,
        scrollTrigger: {
          trigger: block,
          start: 'top top',
          end: '+=100',
          toggleActions: 'play none none reverse'
        }
      })
    })
  }, [])

  return (
    <WrapperAnimationHome id='BlockCardPsicologia'>
      {children}
    </WrapperAnimationHome>
  )
}

export default ScrollAnimationHome
