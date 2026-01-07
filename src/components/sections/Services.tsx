'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { siteContent } from '@/lib/content'

export function Services() {
  const { services } = siteContent

  return (
    <SectionWrapper id="services" background="white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">
          {services.headline}
        </h2>
      </motion.div>

      {/* Service Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {services.items.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon as 'data' | 'automation' | 'ai'}
            index={index}
          />
        ))}
      </div>

      {/* System Agnostic Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 px-8 py-6"
      >
        <p className="text-center text-slate-700">
          <span className="font-semibold text-slate-900">We are system agnostic.</span>{' '}
          We can work with{' '}
          <span className="font-semibold text-brand-purple">any system</span> you work,
          building solutions that fit your business.
        </p>

        {/* Decorative dots */}
        <div className="absolute top-2 left-4 flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-brand-purple/30" />
          <div className="w-2 h-2 rounded-full bg-brand-magenta/30" />
          <div className="w-2 h-2 rounded-full bg-brand-purple/30" />
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
