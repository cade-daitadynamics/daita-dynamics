'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteContent } from '@/lib/content'

export function OurStory() {
  const { story } = siteContent

  return (
    <SectionWrapper id="about" background="white">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Content - spans 3 columns */}
        <div className="lg:col-span-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-brand-purple mb-4"
          >
            About us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {story.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl font-medium text-slate-800 mb-8 leading-relaxed"
          >
            {story.tagline}
          </motion.p>

          <div className="space-y-4">
            {story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-slate-600 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Founder Image - spans 2 columns */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="sticky top-32">
            <div className="relative">
              {/* Founder image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 relative">
                {/* Actual founder image */}
                <Image
                  src={story.founder.image}
                  alt={story.founder.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-display text-xl font-semibold">
                    {story.founder.name}
                  </p>
                  <p className="text-white/80">{story.founder.title}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-purple/20 to-brand-magenta/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-brand-purple/20 to-brand-purple-light/20 rounded-2xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
