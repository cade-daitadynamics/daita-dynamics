'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteContent } from '@/lib/content'

export function Contact() {
  const { contact } = siteContent

  return (
    <SectionWrapper id="contact" background="light" noise>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left column - Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {contact.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 mb-4"
          >
            {contact.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mb-8"
          >
            If you have any questions, you can reach out to{' '}
            <a
              href={`mailto:${contact.email}`}
              className="text-brand-purple hover:text-brand-magenta transition-colors font-medium underline decoration-brand-purple/30 hover:decoration-brand-magenta underline-offset-4"
            >
              {contact.email}
            </a>
          </motion.p>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-card border border-slate-100"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[#8B5CF6]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 italic mb-4">"{contact.testimonial.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src={contact.testimonial.logo}
                  alt={contact.testimonial.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {contact.testimonial.author}
                </p>
                <p className="text-xs text-slate-500">{contact.testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column - Calendly Embed Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-card-hover overflow-hidden border border-slate-100"
        >
          {/* Calendly placeholder */}
          <div className="h-[600px] flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-magenta/10 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-brand-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-semibold text-slate-900 mb-2">
              Schedule Your Call
            </h3>
            <p className="text-slate-600 mb-6 max-w-sm">
              Choose a time that works for you and get a free AI Opportunity Assessment
            </p>
            <a
              href={contact.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium shadow-lg hover:shadow-glow transition-all"
            >
              Open Calendly
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
            <p className="text-xs text-slate-400 mt-4">
              Calendly widget will be embedded here
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
