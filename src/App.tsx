import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, SunMedium, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

type Theme = 'light' | 'dark'

function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) return saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return [theme, toggle]
}

function NavBar({ onToggle, theme }: { onToggle: () => void; theme: Theme }) {
  return (
    <header className="sticky top-0 z-50">
      <div className="container-padded py-4">
        <div className="card flex items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold tracking-tight">Sumit Pande</a>
          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex gap-6 text-sm">
              <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
              <a href="#skills" className="opacity-80 hover:opacity-100">Skills</a>
              <a href="#experience" className="opacity-80 hover:opacity-100">Experience</a>
              <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
            </nav>
            <button aria-label="Toggle theme" onClick={onToggle} className="rounded-full p-2 card">
              {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="container-padded pt-10 sm:pt-16 md:pt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            UI/UX Designer crafting delightful, accessible, and performant experiences
          </motion.h1>
          <motion.p
            className="mt-4 text-slate-700 dark:text-slate-300 max-w-prose"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I blend research, interaction design, and visual storytelling to solve real problems.
            I obsess over details, motion, and systems that scale.
          </motion.p>
          <motion.div
            className="mt-6 flex gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <a href="#projects" className="card px-4 py-2 font-medium">View projects</a>
            <a href="#contact" className="card px-4 py-2">Contact</a>
          </motion.div>
          <motion.div
            className="mt-6 flex gap-4 opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-100"><Github /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-100"><Linkedin /></a>
            <a href="#contact" aria-label="Email" className="hover:opacity-100"><Mail /></a>
          </motion.div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 rounded-full card overflow-hidden animate-float">
            <img src="/Screenshot_2025-08-28_113839-removebg-preview.png" alt="Sumit portrait" className="w-full h-full object-contain" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container-padded pt-16 sm:pt-20">
      <h2 className="section-title">{title}</h2>
      <div className="mt-6 grid gap-6">{children}</div>
    </section>
  )
}

function Projects() {
  const projects = useMemo(
    () => [
      {
        title: 'FinFlow – Personal finance dashboard',
        desc: 'Information architecture, interaction flows, visual system, and motion.',
        link: '#',
      },
      {
        title: 'MediConnect – Telehealth booking',
        desc: 'Usability research, accessibility-first components, and appointment UX.',
        link: '#',
      },
      {
        title: 'EduSpark – Student learning hub',
        desc: 'Design system tokens, design-to-code handoff, and micro-interactions.',
        link: '#',
      },
    ],
    []
  )
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="card p-5 group">
            <h3 className="font-semibold group-hover:underline flex items-center justify-between">
              {p.title}
              <ExternalLink size={16} className="opacity-60" />
            </h3>
            <p className="mt-2 text-sm opacity-80">{p.desc}</p>
          </a>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  const skills = ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Accessibility (WCAG)', 'Motion/Interaction', 'Figma', 'Framer', 'HTML/CSS', 'React']
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="card px-3 py-1 text-sm">{s}</span>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  const items = [
    { role: 'UI/UX Designer', org: 'Freelance', time: '2023–Present', desc: 'Shipped research-driven, accessible interfaces with measurable outcomes.' },
    { role: 'Product Design Intern', org: 'Studio X', time: '2022–2023', desc: 'Partnered with engineering to deliver scalable design systems.' },
  ]
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-4">
        {items.map((e) => (
          <div key={e.role} className="card p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">{e.role} · {e.org}</p>
              <p className="text-sm opacity-70">{e.time}</p>
            </div>
            <p className="mt-2 opacity-80 text-sm">{e.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <form action="https://formspree.io/f/xayrqdqp" method="POST" className="grid gap-3 max-w-xl">
        <input className="card px-3 py-2" placeholder="Your name" name="name" required />
        <input type="email" className="card px-3 py-2" placeholder="Email" name="email" required />
        <textarea className="card px-3 py-2 min-h-[120px]" placeholder="Message" name="message" required />
        <button className="card px-4 py-2 font-medium w-fit">Send</button>
      </form>
    </Section>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <div className="gradient-surface text-slate-900 dark:text-slate-100">
      <NavBar onToggle={toggleTheme} theme={theme} />
      <main className="pb-24">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="container-padded py-10 opacity-80">
        <p className="text-sm">© {new Date().getFullYear()} Sumit Pande. Built with React + Vite.</p>
      </footer>
    </div>
  )
}


