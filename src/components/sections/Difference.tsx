'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteContent } from '@/lib/content'

export function Difference() {
  const { difference } = siteContent

  return (
    <SectionWrapper id="difference" background="light">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-16"
      >
        <span className="inline-block text-sm font-semibold text-brand-purple uppercase tracking-wider mb-4">
          {difference.sectionTitle}
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          {difference.headline}
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {difference.description}
        </p>
      </motion.div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {difference.comparison.map((column, index) => (
          <motion.div
            key={column.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`
              relative rounded-2xl p-8 lg:p-10
              ${column.type === 'generic'
                ? 'bg-white border border-slate-200'
                : 'bg-gradient-to-br from-brand-purple to-brand-purple-deep text-white shadow-glow'
              }
            `}
          >
            {/* Card Title */}
            <h3 className={`
              font-display text-xl lg:text-2xl font-bold mb-6
              ${column.type === 'generic' ? 'text-slate-700' : 'text-white'}
            `}>
              {column.title}
            </h3>

            {/* Points List */}
            <ul className="space-y-4">
              {column.points.map((point, pointIndex) => (
                <motion.li
                  key={pointIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + pointIndex * 0.1 }}
                  className="flex items-start gap-3"
                >
                  {/* Icon */}
                  <span className={`
                    flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5
                    ${column.type === 'generic'
                      ? 'bg-slate-100 text-slate-400'
                      : 'bg-white/20 text-white'
                    }
                  `}>
                    {column.type === 'generic' ? (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>

                  {/* Text */}
                  <span className={`
                    ${column.type === 'generic' ? 'text-slate-600' : 'text-white/90'}
                  `}>
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Decorative element for Daita card */}
            {column.type === 'daita' && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Result Statement */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center text-xl lg:text-2xl font-display font-semibold text-slate-900"
      >
        {difference.result}
      </motion.p>
    </SectionWrapper>
  )
}
