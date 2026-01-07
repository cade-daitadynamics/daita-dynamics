'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TestimonialCardProps {
  quote: string
  author: string
  title: string
  logo?: string
  index: number
}

export function TestimonialCard({
  quote,
  author,
  title,
  logo,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-100"
    >
      {/* Quote mark */}
      <div className="absolute top-6 right-8 text-6xl font-display text-brand-purple/10 leading-none">
        "
      </div>

      {/* Quote */}
      <blockquote className="relative z-10">
        <p className="text-slate-700 leading-relaxed mb-6 italic">"{quote}"</p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Logo or avatar placeholder */}
        {logo ? (
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden">
            <Image
              src={logo}
              alt={title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple/20 via-brand-purple-light/20 to-brand-purple/20 flex items-center justify-center">
            <span className="text-sm font-semibold text-brand-purple">
              {author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-slate-900">{author}</p>
          <p className="text-sm text-slate-500">{title}</p>
        </div>
      </div>

      {/* Gradient accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-1 bg-[#8B5CF6] rounded-full opacity-50" />
    </motion.div>
  )
}
