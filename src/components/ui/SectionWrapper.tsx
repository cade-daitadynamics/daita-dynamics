'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'light' | 'gradient' | 'dark'
  noise?: boolean
}

export function SectionWrapper({
  children,
  className,
  id,
  background = 'white',
  noise = false,
}: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const backgrounds = {
    white: 'bg-white',
    light: 'bg-slate-50',
    gradient: 'bg-gradient-to-br from-brand-purple/5 via-brand-purple-light/5 to-brand-purple/5',
    dark: 'bg-slate-900 text-white',
  }

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'section-padding relative overflow-hidden',
        backgrounds[background],
        noise && 'bg-noise',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-tight relative z-10"
      >
        {children}
      </motion.div>
    </section>
  )
}
