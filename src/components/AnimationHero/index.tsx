import React, { useEffect, ReactNode } from 'react'

import { WrapperGsap } from './styles'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface GsapProps {
  children: ReactNode
}

const AnimationHero: React.FC<GsapProps> = ({ children }) => {
  useEffect(() => {
    const blocks = document.querySelectorAll(`#hero`)

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

  return <WrapperGsap id='hero'>{children}</WrapperGsap>
}

export default AnimationHero
