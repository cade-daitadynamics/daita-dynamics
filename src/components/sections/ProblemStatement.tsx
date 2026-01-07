'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SpeechBubble } from '@/components/ui/SpeechBubble'
import { siteContent } from '@/lib/content'

export function ProblemStatement() {
  const { problem } = siteContent

  return (
    <SectionWrapper background="white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Speech Bubbles */}
        <div className="relative h-[400px] lg:h-[500px]">
          {/* First bubble - top left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0"
          >
            <SpeechBubble color="purple" delay={0.1}>
              {problem.bubbles[0].text}
            </SpeechBubble>
          </motion.div>

          {/* Second bubble - center right */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-32 right-0 lg:right-4"
          >
            <SpeechBubble color="gray" delay={0.3}>
              {problem.bubbles[1].text}
            </SpeechBubble>
          </motion.div>

          {/* Third bubble - bottom left */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-8 left-4"
          >
            <SpeechBubble color="blue" delay={0.5}>
              {problem.bubbles[2].text}
            </SpeechBubble>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-brand-purple/10 to-brand-magenta/10 blur-2xl" />
          <div className="absolute bottom-32 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-brand-purple/10 to-brand-purple-light/10 blur-2xl" />
        </div>

        {/* Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8"
          >
            {problem.headline}
          </motion.h2>

          <div className="space-y-4">
            {problem.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className={cn(
                  'text-slate-600 leading-relaxed',
                  paragraph === 'We get it.' && 'text-lg font-semibold text-slate-800'
                )}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-8 text-xl font-display font-semibold text-gradient"
          >
            {problem.closingStatement}
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
