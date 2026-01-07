'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SpeechBubbleProps {
  children: React.ReactNode
  color?: 'purple' | 'gray' | 'blue'
  className?: string
  delay?: number
}

export function SpeechBubble({
  children,
  color = 'gray',
  className,
  delay = 0,
}: SpeechBubbleProps) {
  const colors = {
    purple: 'bg-brand-purple text-white',
    gray: 'bg-slate-100 text-slate-700',
    blue: 'bg-blue-50 text-blue-900 border border-blue-100',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
      whileHover={{ scale: 1.02, rotate: 1 }}
      className={cn(
        'relative px-6 py-4 rounded-2xl shadow-lg max-w-xs',
        colors[color],
        className
      )}
    >
      <p className="text-sm md:text-base font-medium leading-snug">{children}</p>
      {/* Tail */}
      <div
        className={cn(
          'absolute w-4 h-4 rotate-45 -bottom-2 left-6',
          color === 'purple' && 'bg-brand-purple',
          color === 'gray' && 'bg-slate-100',
          color === 'blue' && 'bg-blue-50 border-b border-r border-blue-100'
        )}
      />
    </motion.div>
  )
}
