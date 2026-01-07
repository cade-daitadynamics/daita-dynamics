'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  title: string
  content: string
  isExpanded: boolean
  onToggle: () => void
  index: number
}

export function AccordionItem({
  title,
  content,
  isExpanded,
  onToggle,
  index,
}: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'border-b border-slate-200 last:border-b-0',
        isExpanded && 'bg-white rounded-xl -mx-4 px-4 shadow-sm border border-slate-100'
      )}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group"
        aria-expanded={isExpanded}
      >
        <span
          className={cn(
            'font-medium text-slate-700 pr-8 transition-colors group-hover:text-brand-purple',
            isExpanded && 'text-brand-purple'
          )}
        >
          {title}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors',
            isExpanded
              ? 'border-brand-purple bg-brand-purple text-white'
              : 'border-slate-300 text-slate-400 group-hover:border-brand-purple group-hover:text-brand-purple'
          )}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

interface AccordionProps {
  items: readonly { readonly title: string; readonly content: string }[]
}

export function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-slate-200">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
          index={index}
        />
      ))}
    </div>
  )
}
