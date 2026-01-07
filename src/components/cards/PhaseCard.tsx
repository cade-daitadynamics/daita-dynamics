'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PhaseCardProps {
  number: string
  title: string
  subtitle: string
  description: string
  icon: 'crawl' | 'walk' | 'run'
  index: number
}

const icons = {
  crawl: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="24" cy="24" r="20" className="stroke-brand-purple/20" strokeWidth="2" />
      <path
        d="M16 28c0-4.418 3.582-8 8-8s8 3.582 8 8"
        className="stroke-brand-purple"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="22" r="2" className="fill-brand-purple" />
      <circle cx="28" cy="22" r="2" className="fill-brand-purple" />
    </svg>
  ),
  walk: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="24" cy="12" r="4" className="fill-brand-magenta" />
      <path
        d="M24 16v10m0 0l-4 10m4-10l4 10m-8-8l-4 4m12-4l4 4"
        className="stroke-brand-magenta"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  run: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="28" cy="10" r="4" className="fill-brand-purple" />
      <path
        d="M20 38l4-12 6 4 8-14M20 38l-6-6M30 30l6 8"
        className="stroke-brand-purple"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22h8"
        className="stroke-brand-purple/50"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
}

export function PhaseCard({
  number,
  title,
  subtitle,
  description,
  icon,
  index,
}: PhaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        'relative bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300',
        'border border-slate-100',
        index > 0 && 'lg:ml-8'
      )}
    >
      {/* Connector line (visible on desktop for non-first cards) */}
      {index > 0 && (
        <div className="hidden lg:block absolute -left-8 top-1/2 w-8 h-0.5 bg-gradient-to-r from-slate-200 to-slate-100" />
      )}

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-3">
          {icons[icon]}
        </div>

        <div className="flex-1">
          {/* Number & Title */}
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-sm font-medium text-slate-400">{number}</span>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-900">
              {title}
            </h3>
          </div>

          {/* Subtitle */}
          <p className="text-sm font-medium text-brand-purple mb-3">{subtitle}</p>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Gradient accent */}
      <div
        className={cn(
          'absolute top-0 right-0 w-24 h-24 rounded-tr-3xl rounded-bl-full opacity-[0.03]',
          icon === 'crawl' && 'bg-brand-purple',
          icon === 'walk' && 'bg-brand-magenta',
          icon === 'run' && 'bg-brand-purple'
        )}
      />
    </motion.div>
  )
}
