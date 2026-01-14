module.exports = [
"[project]/src/lib/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteContent",
    ()=>siteContent
]);
const siteContent = {
    meta: {
        title: 'Daita Dynamics | AI & Automation for B2B Services',
        description: 'We help B2B service businesses unlock AI, automation, and smarter data strategies without the overwhelm.'
    },
    nav: {
        logo: '/images/brand/Daita-Dynamics-logo.svg',
        items: [
            {
                label: 'Our approach',
                href: '#approach'
            },
            {
                label: 'What we offer',
                href: '#services'
            },
            {
                label: 'Success stories',
                href: '#stories'
            },
            {
                label: 'Our story',
                href: '#about'
            }
        ],
        cta: {
            label: 'Get started',
            href: '#contact'
        }
    },
    hero: {
        headline: [
            'Feeling left behind by AI?',
            "You're in the right place."
        ],
        description: 'We help growing B2B companies unlock AI, automation, and smarter data strategies without the overwhelm.',
        cta: {
            label: 'Get Your AI Opportunity Assessment',
            href: '#contact'
        },
        trustBadges: [
            '100% Satisfaction guaranteed',
            'Custom-to-you',
            'System agnostic'
        ]
    },
    problem: {
        bubbles: [
            {
                text: '"What if our competitors figure it out first?"',
                color: 'purple'
            },
            {
                text: '"Are we falling behind?"',
                color: 'gray'
            },
            {
                text: '"What if we miss the AI wave completely?"',
                color: 'blue'
            }
        ],
        headline: 'Does this sound familiar?',
        paragraphs: [
            'Most business owners can feel it. The pressure to "do something" with AI.',
            "Everyone's talking about AI but between running your company, managing your team, and staying profitable, you're unsure where to start, or if it's even for you.",
            "You know you need to scale, but adding more people isn't always the answer.",
            'We get it.',
            'At Daita Dynamics, we walk into your business, roll up our sleeves, and show you exactly where AI, automation, or smarter data can help you right now and what it takes to scale it later.',
            'We give you the clarity to act, the strategy to move forward, and the confidence that you\'re not just keeping up but you\'re setting the pace.'
        ],
        closingStatement: "You're not behind. You just need the right guide."
    },
    difference: {
        sectionTitle: 'How We\'re Different',
        headline: 'AI built on YOUR business, not generic prompts',
        description: 'Most AI tools give everyone the same generic answers. We build systems infused with your data, processes, and philosophy.',
        comparison: [
            {
                type: 'generic',
                title: 'Generic AI Tools',
                points: [
                    'Same answers for everyone',
                    'No context about your business',
                    'Sounds like a robot',
                    'One-size-fits-all approach'
                ]
            },
            {
                type: 'daita',
                title: 'Daita Dynamics AI',
                points: [
                    'Built on YOUR proprietary data',
                    'Understands your processes & frameworks',
                    'Proactive AI that works inside your workflows',
                    'Custom to your business philosophy'
                ]
            }
        ],
        result: 'The result? AI that works like an extension of your team, not a generic chatbot.'
    },
    approach: {
        sectionTitle: 'The Daita Dynamics Approach',
        subtitle: 'Your guide to AI success',
        description: 'Our phased approach helps growing businesses adopt AI with clarity and confidence. No overwhelm, just real progress.',
        cta: {
            label: 'Get Your Assessment',
            href: '#contact'
        },
        ctaQuestion: 'Want to see what this approach looks like for your business?',
        phases: [
            {
                number: '01',
                title: 'Crawl',
                subtitle: 'Start small, win fast',
                description: "We start with identifying quick, practical wins that show how AI can make a real difference in your business. Whether it's saving time through automation or uncovering useful insights, we focus on small steps that deliver immediate value.",
                icon: 'crawl'
            },
            {
                number: '02',
                title: 'Walk',
                subtitle: 'Build the foundation',
                description: "We help you organize and streamline your systems. From cleaning up messy data to automating workflows, we make your operations more efficient so you're ready to scale AI efforts without chaos.",
                icon: 'walk'
            },
            {
                number: '03',
                title: 'Run',
                subtitle: 'Scale with confidence',
                description: "It's time to go big. We create custom AI and automation solutions tailored to your strategy, helping you drive growth, reduce costs, and stay ahead of the competition. All with systems that work for you, not the other way around.",
                icon: 'run'
            }
        ]
    },
    services: {
        headline: 'What we offer',
        systemAgnosticText: 'We are system agnostic. We can work with any system you work, building solutions that fit your business.',
        items: [
            {
                title: 'Data',
                icon: 'data',
                description: "We help you make sense of your existing data by cleaning, connecting, and structuring it in ways that support smarter decisions. Whether it's dashboards, reporting, or organized data flows, we surface insights that matter without needing to change everything.",
                useCases: [
                    'Transform 100+ spreadsheets into real-time dashboards',
                    'Build searchable knowledge bases from scattered documents',
                    'Create automated reporting that updates itself'
                ]
            },
            {
                title: 'Automation',
                icon: 'automation',
                description: 'From sending invoices to updating records or syncing tools, we automate the repetitive tasks that slow you down. Our automations are tailored to your work so your team can focus on what really moves the needle.',
                useCases: [
                    'Internal chatbots trained on your SOPs for instant employee answers',
                    'Automated lead scraping, research, and qualification pipelines',
                    'Invoice processing and record syncing without manual entry'
                ]
            },
            {
                title: 'AI',
                icon: 'ai',
                description: "We make AI practical by weaving it into your processes in useful and easy-to-understand ways. That can include smart recommendations, summaries, or forecasts. Everything is designed to support your goals, not just add noise.",
                useCases: [
                    'Search hundreds of LinkedIn profiles for recruiting in seconds',
                    'AI-powered content that matches your brand voice',
                    'Smart recommendations based on your business data'
                ]
            }
        ]
    },
    stories: {
        headline: 'Daita Dynamics in practice',
        description: 'See how Daita Dynamics has helped businesses across industries to unlock AI, automation and smarter data in their day-to-day operations.',
        cta: {
            label: 'Get Your Assessment',
            href: '#contact'
        },
        items: [
            {
                title: 'Turning 100 Excel spreadsheets into automated dashboards for faster decisions',
                content: 'A growing manufacturing company was drowning in spreadsheets. We consolidated their data into automated dashboards, saving 20+ hours per week and enabling real-time decision making.'
            },
            {
                title: 'Saving $2000/month by optimizing the data engineering workflow',
                content: 'By streamlining data pipelines and eliminating redundant processes, we helped a mid-size services firm cut their monthly data infrastructure costs significantly.'
            },
            {
                title: 'Saving 10 hours/week with an AI-powered scheduler',
                content: 'We implemented an intelligent scheduling system that automatically handles appointments, follow-ups, and reminders, freeing up valuable time for client-facing work.'
            },
            {
                title: 'Finding high-quality leads faster with AI outreach automation',
                content: 'Custom AI-powered lead scoring and automated outreach sequences helped a B2B company increase qualified leads by 40% while reducing manual prospecting time.'
            }
        ]
    },
    testimonials: {
        headline: 'Smarter systems. Happier clients.',
        items: [
            {
                quote: "Cade has connected all of our software systems so that things just happen like magic. This allows our data reporting to be 10x better than it was a year ago. On the automation side, the solutions he comes up with are innovative and fit into our processes seamlessly. He has made it where our small flooring business feels like an innovative tech company.",
                author: 'Laura P.',
                title: 'CFO of The Colorado Floor Company',
                logo: '/images/clients/colorado-floor-company-logo.jpg'
            },
            {
                quote: "Cade is a mad scientist! He is allowing us to serve our clients more efficiently by eliminating repetitive processes. I would recommend him to anyone who wants to put action to their data or anyone looking to scale their operations.",
                author: 'Zack D.',
                title: 'Head CFO & Partner at Level 10 CFO',
                logo: '/images/clients/level10-cfo-logo.jpg'
            },
            {
                quote: "I couldn't recommend Cade enough. Through the code he has written we have been able to avoid hiring for 3 positions and the rest of our team is more efficient than ever.",
                author: 'Kevin P.',
                title: 'CEO of The Colorado Floor Company',
                logo: '/images/clients/colorado-floor-company-logo.jpg'
            }
        ]
    },
    story: {
        headline: 'Our story',
        tagline: 'Built on a simple belief: technology should support people, not overwhelm them.',
        paragraphs: [
            'We started this company after seeing one challenge come up again and again: growing businesses are buried in manual work, disconnected tools, and time-consuming workarounds.',
            "At the same time, AI and automation are evolving fast. But for many growth-stage companies, these tools still feel out of reach. Their time is limited, they rarely have space to explore what's possible and they often lack the resources or technical know-how to get things set up. Some businesses aren't even sure if AI is relevant to them.",
            "We know there is a better way and that's how Daita Dynamics was born.",
            "Since 2020, we've worked across industries helping businesses unlock the full potential of AI by connecting data, automating repetitive tasks, and turning insights into action. With a background in data engineering, automation, and user experience, we focus on making AI approachable and useful for teams that want to scale without adding overhead or complexity.",
            'What drives us is knowing our work helps people save time, avoid bottlenecks, and focus on what matters most. We are here to help you work smarter with AI and systems that support your growth every step of the way.'
        ],
        founder: {
            name: 'Cade Dannels',
            title: 'Founder',
            image: '/images/cade-dannels.png'
        }
    },
    contact: {
        headline: 'Ready to unlock AI in your business?',
        description: "Great, that's the spirit! Schedule a call and get a AI Opportunity Assessment of your business.",
        email: 'cade@daitadynamics.com',
        calendlyUrl: 'https://calendly.com/cade-daitadynamics/new-meeting',
        testimonial: {
            quote: "I couldn't recommend Cade enough. Through the code he has written we have been able to avoid hiring for 3 positions and the rest of our team is more efficient than ever.",
            author: 'Kevin P.',
            title: 'CEO of The Colorado Floor Company',
            logo: '/images/clients/colorado-floor-company-logo.jpg'
        }
    },
    footer: {
        copyright: '© 2025, Daita Dynamics'
    }
};
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContent"].meta.title,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContent"].meta.description,
    openGraph: {
        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContent"].meta.title,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteContent"].meta.description,
        type: 'website'
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: "scroll-smooth",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "min-h-screen bg-slate-50 text-slate-800 antialiased",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_c89ba6e7._.js.map