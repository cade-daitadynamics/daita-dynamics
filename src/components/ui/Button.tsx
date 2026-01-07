'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-[#8B5CF6] hover:bg-[#7C3AED] text-white shadow-lg hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]',
      secondary: 'bg-white text-slate-800 border-2 border-slate-200 hover:border-brand-purple hover:text-brand-purple shadow-sm hover:shadow-md',
      ghost: 'text-slate-600 hover:text-brand-purple hover:bg-brand-purple/5',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const Component = href ? motion.a : motion.button
    const linkProps = href ? { href } : {}

    return (
      <Component
        ref={ref as any}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...linkProps}
        {...(props as any)}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export { Button }
