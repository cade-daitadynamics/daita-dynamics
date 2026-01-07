'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/lib/content'

export function SuccessStories() {
  const { stories } = siteContent

  return (
    <SectionWrapper id="stories" background="gradient" noise>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left column - Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-brand-purple mb-4"
          >
            Case studies
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {stories.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 leading-relaxed mb-8"
          >
            {stories.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button href={stories.cta.href} variant="secondary">
              {stories.cta.label}
            </Button>
          </motion.div>
        </div>

        {/* Right column - Accordion */}
        <div className="bg-slate-50/50 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
          <Accordion items={stories.items} />
        </div>
      </div>
    </SectionWrapper>
  )
}
