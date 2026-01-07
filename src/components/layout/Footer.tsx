'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { siteContent } from '@/lib/content'

export function Footer() {
  const { footer, nav } = siteContent

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-tight py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center group"
          >
            <Image
              src={nav.logo}
              alt="Daita Dynamics"
              width={140}
              height={35}
              className="h-7 w-auto brightness-0 invert"
            />
          </motion.a>

          {/* Nav Links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {footer.copyright}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <span>Built with</span>
            <span className="text-[#8B5CF6]">love</span>
            <span>&</span>
            <span className="text-gradient font-medium">AI</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
