'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon: 'data' | 'automation' | 'ai'
  index: number
  useCases?: readonly string[]
}

const icons = {
  data: (
    <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
      <rect x="8" y="8" width="40" height="8" rx="2" className="fill-brand-purple/20" />
      <rect x="8" y="20" width="40" height="8" rx="2" className="fill-brand-purple/30" />
      <rect x="8" y="32" width="40" height="8" rx="2" className="fill-brand-purple/40" />
      <rect x="8" y="44" width="40" height="4" rx="1" className="fill-brand-purple" />
      <circle cx="44" cy="12" r="3" className="fill-brand-magenta" />
      <circle cx="44" cy="24" r="3" className="fill-brand-purple" />
      <circle cx="44" cy="36" r="3" className="fill-brand-purple-light" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
      <circle cx="28" cy="28" r="16" className="stroke-brand-magenta/30" strokeWidth="2" />
      <circle cx="28" cy="28" r="8" className="stroke-brand-magenta" strokeWidth="2" />
      <circle cx="28" cy="28" r="3" className="fill-brand-magenta" />
      <path d="M28 12v4M28 40v4M12 28h4M40 28h4" className="stroke-brand-magenta" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 18l3 3M35 35l3 3M18 38l3-3M35 21l3-3" className="stroke-brand-purple/60" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 8l2 4-2 1-2-1 2-4z" className="fill-brand-purple" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
      <path
        d="M28 8l20 12v16L28 48 8 36V20L28 8z"
        className="stroke-brand-purple/30"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M28 16l12 8v10l-12 8-12-8V24l12-8z"
        className="stroke-brand-purple"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="28" cy="28" r="4" className="fill-brand-purple" />
      <path d="M28 24v-8M28 32v8M24 28h-8M32 28h8" className="stroke-brand-purple-light/60" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="16" r="2" className="fill-brand-purple-light" />
      <circle cx="28" cy="40" r="2" className="fill-brand-purple-light" />
      <circle cx="16" cy="28" r="2" className="fill-brand-purple-light" />
      <circle cx="40" cy="28" r="2" className="fill-brand-purple-light" />
    </svg>
  ),
}

export function ServiceCard({ title, description, icon, index, useCases }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-100 overflow-hidden"
    >
      {/* Icon */}
      <div className="w-16 h-16 mb-6 relative">
        {icons[icon]}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-purple-light/5 rounded-2xl -z-10 scale-125" />
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl font-semibold text-slate-900 mb-4 group-hover:text-brand-purple transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed">{description}</p>

      {/* Use Cases */}
      {useCases && useCases.length > 0 && (
        <ul className="mt-6 space-y-2">
          {useCases.map((useCase, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
              <svg
                className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{useCase}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Hover gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-purple/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
