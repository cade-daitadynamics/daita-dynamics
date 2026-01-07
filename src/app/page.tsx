import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProblemStatement } from '@/components/sections/ProblemStatement'
import { Approach } from '@/components/sections/Approach'
import { Services } from '@/components/sections/Services'
import { SuccessStories } from '@/components/sections/SuccessStories'
import { Testimonials } from '@/components/sections/Testimonials'
import { OurStory } from '@/components/sections/OurStory'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Approach />
        <Services />
        <SuccessStories />
        <Testimonials />
        <OurStory />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
