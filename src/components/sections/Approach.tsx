'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { PhaseCard } from '@/components/cards/PhaseCard'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/lib/content'

export function Approach() {
  const { approach } = siteContent

  return (
    <SectionWrapper id="approach" background="light" noise>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left column - Content */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-brand-purple mb-4"
          >
            Our methodology
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            {approach.sectionTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl font-display text-slate-700 mb-4"
          >
            {approach.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 leading-relaxed mb-8"
          >
            {approach.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-slate-700 font-medium mb-6"
          >
            {approach.ctaQuestion}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button href={approach.cta.href}>{approach.cta.label}</Button>
          </motion.div>
        </div>

        {/* Right column - Phase Cards */}
        <div className="space-y-6">
          {approach.phases.map((phase, index) => (
            <PhaseCard
              key={phase.number}
              number={phase.number}
              title={phase.title}
              subtitle={phase.subtitle}
              description={phase.description}
              icon={phase.icon as 'crawl' | 'walk' | 'run'}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
