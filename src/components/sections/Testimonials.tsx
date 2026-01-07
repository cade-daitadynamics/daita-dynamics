'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { siteContent } from '@/lib/content'

export function Testimonials() {
  const { testimonials } = siteContent

  return (
    <SectionWrapper background="light">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">
          {testimonials.headline}
        </h2>
      </motion.div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.items.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            title={testimonial.title}
            logo={testimonial.logo}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
