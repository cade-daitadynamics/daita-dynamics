export const siteContent = {
  meta: {
    title: 'Daita Dynamics | AI & Automation for B2B Services',
    description: 'We help B2B service businesses unlock AI, automation, and smarter data strategies without the overwhelm.',
  },

  nav: {
    logo: '/images/brand/Daita-Dynamics-logo.svg',
    items: [
      { label: 'Our approach', href: '#approach' },
      { label: 'What we offer', href: '#services' },
      { label: 'Success stories', href: '#stories' },
      { label: 'Our story', href: '#about' },
    ],
    cta: { label: 'Get started', href: '#contact' },
  },

  hero: {
    headline: ['Feeling left behind by AI?', "You're in the right place."],
    description: 'We help B2B service businesses unlock AI, automation, and smarter data strategies without the overwhelm.',
    cta: { label: 'Book a Free Strategy Call', href: '#contact' },
    trustBadges: [
      '100% Satisfaction guaranteed',
      'Custom-to-you',
      'System agnostic',
    ],
  },

  problem: {
    bubbles: [
      { text: '"What if our competitors figure it out first?"', color: 'purple' as const },
      { text: '"Are we falling behind?"', color: 'gray' as const },
      { text: '"What if we miss the AI wave completely?"', color: 'blue' as const },
    ],
    headline: 'Does this sound familiar?',
    paragraphs: [
      'Most business owners can feel it. The pressure to "do something" with AI.',
      "Everyone's talking about AI but between running your company, managing your team, and staying profitable, you're unsure where to start, or if it's even for you.",
      'We get it.',
      'At Daita Dynamics, we walk into your business, roll up our sleeves, and show you exactly where AI, automation, or smarter data can help you right now and what it takes to scale it later.',
      'We give you the clarity to act, the strategy to move forward, and the confidence that you\'re not just keeping up but you\'re setting the pace.',
    ],
    closingStatement: "You're not behind. You just need the right guide.",
  },

  approach: {
    sectionTitle: 'The Daita Dynamics Approach',
    subtitle: 'Your guide to AI success',
    description: 'Our phased approach helps small businesses adopt AI with clarity and confidence. No overwhelm, just real progress.',
    cta: { label: 'Get started', href: '#contact' },
    ctaQuestion: 'Want to see what this approach looks like for your business?',
    phases: [
      {
        number: '01',
        title: 'Crawl',
        subtitle: 'Start small, win fast',
        description: "We start with identifying quick, practical wins that show how AI can make a real difference in your business. Whether it's saving time through automation or uncovering useful insights, we focus on small steps that deliver immediate value.",
        icon: 'crawl',
      },
      {
        number: '02',
        title: 'Walk',
        subtitle: 'Build the foundation',
        description: "We help you organize and streamline your systems. From cleaning up messy data to automating workflows, we make your operations more efficient so you're ready to scale AI efforts without chaos.",
        icon: 'walk',
      },
      {
        number: '03',
        title: 'Run',
        subtitle: 'Scale with confidence',
        description: "It's time to go big. We create custom AI and automation solutions tailored to your strategy, helping you drive growth, reduce costs, and stay ahead of the competition. All with systems that work for you, not the other way around.",
        icon: 'run',
      },
    ],
  },

  services: {
    headline: 'What we offer',
    systemAgnosticText: 'We are system agnostic. We can work with any system you work, building solutions that fit your business.',
    items: [
      {
        title: 'Data',
        icon: 'data',
        description: "We help you make sense of your existing data by cleaning, connecting, and structuring it in ways that support smarter decisions. Whether it's dashboards, reporting, or organized data flows, we surface insights that matter without needing to change everything.",
      },
      {
        title: 'Automation',
        icon: 'automation',
        description: 'From sending invoices to updating records or syncing tools, we automate the repetitive tasks that slow you down. Our automations are tailored to your work so your team can focus on what really moves the needle.',
      },
      {
        title: 'AI',
        icon: 'ai',
        description: "We make AI practical by weaving it into your processes in useful and easy-to-understand ways. That can include smart recommendations, summaries, or forecasts. Everything is designed to support your goals, not just add noise.",
      },
    ],
  },

  stories: {
    headline: 'Daita Dynamics in practice',
    description: 'See how Daita Dynamics has helped businesses across industries to unlock AI, automation and smarter data in their day-to-day operations.',
    cta: { label: 'Book a Call', href: '#contact' },
    items: [
      {
        title: 'Turning 100 Excel spreadsheets into automated dashboards for faster decisions',
        content: 'A growing manufacturing company was drowning in spreadsheets. We consolidated their data into automated dashboards, saving 20+ hours per week and enabling real-time decision making.',
      },
      {
        title: 'Saving $2000/month by optimizing the data engineering workflow',
        content: 'By streamlining data pipelines and eliminating redundant processes, we helped a mid-size services firm cut their monthly data infrastructure costs significantly.',
      },
      {
        title: 'Saving 10 hours/week with an AI-powered scheduler',
        content: 'We implemented an intelligent scheduling system that automatically handles appointments, follow-ups, and reminders, freeing up valuable time for client-facing work.',
      },
      {
        title: 'Finding high-quality leads faster with AI outreach automation',
        content: 'Custom AI-powered lead scoring and automated outreach sequences helped a B2B company increase qualified leads by 40% while reducing manual prospecting time.',
      },
    ],
  },

  testimonials: {
    headline: 'Smarter systems. Happier clients.',
    items: [
      {
        quote: "Cade has connected all of our software systems so that things just happen like magic. This allows our data reporting to be 10x better than it was a year ago. On the automation side, the solutions he comes up with are innovative and fit into our processes seamlessly. He has made it where our small flooring business feels like an innovative tech company.",
        author: 'Laura P.',
        title: 'CFO of The Colorado Floor Company',
        logo: '/images/clients/colorado-floor-company-logo.jpg',
      },
      {
        quote: "Cade is a mad scientist! He is allowing us to serve our clients more efficiently by eliminating repetitive processes. I would recommend him to anyone who wants to put action to their data or anyone looking to scale their operations.",
        author: 'Zack D.',
        title: 'Head CFO & Partner at Level 10 CFO',
        logo: '/images/clients/level10-cfo-logo.jpg',
      },
      {
        quote: "I couldn't recommend Cade enough. Through the code he has written we have been able to avoid hiring for 3 positions and the rest of our team is more efficient than ever.",
        author: 'Kevin P.',
        title: 'CEO of The Colorado Floor Company',
        logo: '/images/clients/colorado-floor-company-logo.jpg',
      },
    ],
  },

  story: {
    headline: 'Our story',
    tagline: 'Built on a simple belief: technology should support people, not overwhelm them.',
    paragraphs: [
      'We started this company after seeing one challenge come up again and again: small businesses are buried in manual work, disconnected tools, and time-consuming workarounds.',
      "At the same time, AI and automation are evolving fast. But for many small businesses, these tools still feel out of reach. Their time is limited, they rarely have space to explore what's possible and they often lack the resources or technical know-how to get things set up. Some businesses aren't even sure if AI is relevant to them.",
      "We know there is a better way and that's how Daita Dynamics was born.",
      "Since 2020, we've worked across industries helping businesses unlock the full potential of AI by connecting data, automating repetitive tasks, and turning insights into action. With a background in data engineering, automation, and user experience, we focus on making AI approachable and useful for teams that want to do more without adding overhead or complexity.",
      'What drives us is knowing our work helps people save time, avoid bottlenecks, and focus on what matters most. We are here to help you work smarter with AI and systems that support your growth every step of the way.',
    ],
    founder: {
      name: 'Cade Dannels',
      title: 'Founder',
      image: '/images/cade-dannels.png',
    },
  },

  contact: {
    headline: 'Ready to unlock AI in your business?',
    description: "Great, that's the spirit! Schedule a call and get a AI Opportunity Assessment of your business.",
    email: 'cade@daitadynamics.com',
    calendlyUrl: 'https://calendly.com/daitadynamics/strategy-call',
    testimonial: {
      quote: "I couldn't recommend Cade enough. Through the code he has written we have been able to avoid hiring for 3 positions and the rest of our team is more efficient than ever.",
      author: 'Kevin P.',
      title: 'CEO of The Colorado Floor Company',
      logo: '/images/clients/colorado-floor-company-logo.jpg',
    },
  },

  footer: {
    copyright: '© 2025, Daita Dynamics',
  },
} as const

export type SiteContent = typeof siteContent
