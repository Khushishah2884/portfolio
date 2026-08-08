import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Download, Github, Linkedin, Mail,
  Code2, Smartphone, Cpu, Terminal as TerminalIcon, Layers, Database,
  Sparkles, Zap, CheckCircle2, ExternalLink
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Terminal from '../components/Terminal';
import myphoto from '../assets/myphoto.jpg';

const Home = () => {
  const metrics = [
    { value: '15+', label: 'Production Screens', sub: 'React Native & MERN' },
    { value: '20+', label: 'APIs Integrated',    sub: 'Axios, Fetch, REST' },
    { value: '~25%', label: 'Render Speedup',    sub: 'FlatList Optimization' },
    { value: '~20%', label: 'Query Speedup',     sub: 'MongoDB & MySQL' },
  ];

  const techStack = [
    { label: 'React Native', color: 'text-cyan-600 dark:text-cyan-400',     bg: 'bg-cyan-50 dark:bg-cyan-500/10',   border: 'border-cyan-200 dark:border-cyan-500/30' },
    { label: 'TypeScript',   color: 'text-blue-600 dark:text-blue-400',     bg: 'bg-blue-50 dark:bg-blue-500/10',   border: 'border-blue-200 dark:border-blue-500/30' },
    { label: 'React.js',     color: 'text-cyan-600 dark:text-cyan-400',     bg: 'bg-cyan-50 dark:bg-cyan-500/10',   border: 'border-cyan-200 dark:border-cyan-500/30' },
    { label: 'Node.js',      color: 'text-emerald-600 dark:text-emerald-400',bg: 'bg-emerald-50 dark:bg-emerald-500/10',border: 'border-emerald-200 dark:border-emerald-500/30' },
    { label: 'MongoDB',      color: 'text-emerald-600 dark:text-emerald-400',bg: 'bg-emerald-50 dark:bg-emerald-500/10',border: 'border-emerald-200 dark:border-emerald-500/30' },
    { label: 'Express.js',   color: 'text-zinc-600 dark:text-zinc-400',     bg: 'bg-zinc-100 dark:bg-zinc-800',     border: 'border-zinc-200 dark:border-zinc-700' },
    { label: 'Redux Toolkit',color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-500/10',border: 'border-violet-200 dark:border-violet-500/30' },
    { label: 'Redux Saga',   color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-500/10',border: 'border-violet-200 dark:border-violet-500/30' },
    { label: 'MySQL',        color: 'text-blue-600 dark:text-blue-400',     bg: 'bg-blue-50 dark:bg-blue-500/10',   border: 'border-blue-200 dark:border-blue-500/30' },
    { label: 'Python',       color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-500/10',border: 'border-yellow-200 dark:border-yellow-500/30' },
    { label: 'Git & GitHub', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-500/10',border: 'border-orange-200 dark:border-orange-500/30' },
    { label: 'Postman',      color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-500/10',border: 'border-orange-200 dark:border-orange-500/30' },
  ];

  const featuredProjects = [
    {
      title: 'FreshMart — Grocery Mobile App',
      subtitle: '19-Screen React Native Mobile App',
      description: '19-screen cross-platform grocery shopping app with encrypted auth, real-time geolocation, and Redux Persist offline state.',
      tech: ['React Native', 'TypeScript', 'Redux Toolkit'],
      category: 'React Native · Mobile',
      categoryColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30',
      github: 'https://github.com/Khushishah2884/FreshMart',
      live: null,
    },
    {
      title: 'CookIQ — AI Recipe Platform',
      subtitle: 'MERN Stack + Python ML Ingredient Prediction',
      description: 'Full-stack MERN platform integrating a Python ML model for ingredient prediction and a context-aware conversational chatbot.',
      tech: ['MERN Stack', 'Python ML', 'Chatbot'],
      category: 'MERN · AI/ML',
      categoryColor: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/30',
      github: 'https://github.com/Khushishah2884/CookIQ',
      live: null,
    },
  ];

  return (
    <div className="pt-20 min-h-screen">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-20 sm:pb-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Content */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col">

              {/* Available badge */}
              <AnimatedSection>
                <div className="badge-success w-fit mb-6 animate-fade-up">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for SDE Roles · B.Tech IT 2026
                </div>
              </AnimatedSection>

              {/* Name */}
              <AnimatedSection delay={80}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-none mb-4 animate-fade-up delay-100">
                  Hi, I'm{' '}
                  <span className="gradient-text">Khushi<br />Shah</span>
                </h1>
              </AnimatedSection>

              {/* Role */}
              <AnimatedSection delay={150}>
                <div className="mb-2 animate-fade-up delay-200">
                  <span className="text-lg sm:text-xl font-semibold text-zinc-700 dark:text-zinc-300">
                    Software Development Engineer
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 dark:text-zinc-500 mb-6 animate-fade-up delay-200">
                  <span>React Native</span>
                  <span className="text-indigo-400">×</span>
                  <span>MERN Stack</span>
                  <span className="text-indigo-400">×</span>
                  <span>Full-Stack</span>
                </div>
              </AnimatedSection>

              {/* Bio */}
              <AnimatedSection delay={200}>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-8 animate-fade-up delay-300">
                  I build <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">production mobile apps & full-stack platforms</strong> — shipped{' '}
                  <strong className="gradient-text font-semibold">15+ screens</strong> at{' '}
                  <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Simform Solutions</strong>, integrated 20+ APIs, and cut render latency by ~25%.
                </p>
              </AnimatedSection>

              {/* CTAs */}
              <AnimatedSection delay={250}>
                <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-up delay-400">
                  <a
                    href="/Khushi_Shah_Resume.pdf"
                    download="Khushi_Shah_Resume.pdf"
                    className="btn-primary"
                    id="hero-download-cv"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                  <Link to="/projects" className="btn-ghost" id="hero-view-projects">
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>

              {/* Social row */}
              <AnimatedSection delay={300}>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm animate-fade-up delay-500">
                  <a href="mailto:khushis2328@gmail.com" className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Mail className="w-4 h-4" /> khushis2328@gmail.com
                  </a>
                  <a href="https://github.com/Khushishah2884" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" id="hero-github">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/khushi-shah-679071252/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" id="hero-linkedin">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Photo card */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <AnimatedSection delay={120} className="w-full max-w-sm">
                <div className="relative">
                  {/* Glow rings */}
                  <div className="absolute -inset-4 rounded-3xl opacity-60 animate-border-glow pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.4), rgba(139,92,246,0.4))', filter: 'blur(16px)' }}
                  />
                  <div className="absolute -inset-0.5 rounded-3xl animate-glow pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', opacity: 0.4 }}
                  />

                  {/* Main card */}
                  <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-3 shadow-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden">
                    <img
                      src={myphoto}
                      alt="Khushi Shah — Software Development Engineer"
                      className="w-full h-[380px] sm:h-[420px] object-cover rounded-2xl object-center"
                      loading="eager"
                    />
                    {/* Info overlay */}
                    <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl border border-white/10"
                      style={{ background: 'rgba(9,9,11,0.88)', backdropFilter: 'blur(12px)' }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-sm text-white leading-none">Khushi Shah</p>
                          <p className="text-xs text-indigo-300 mt-0.5 font-mono">BVM IT · CGPA 7.20/10</p>
                        </div>
                        <div className="badge !text-[10px] !py-0.5 !px-2.5">SDE</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating pills */}
                  <div className="hidden sm:flex absolute -top-4 -right-6 px-3.5 py-2 rounded-full items-center gap-2 text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-white dark:bg-zinc-900 border border-cyan-200 dark:border-cyan-500/40 shadow-xl animate-float">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" /> React Native
                  </div>
                  <div className="hidden sm:flex absolute -bottom-4 -left-6 px-3.5 py-2 rounded-full items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-white dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-500/40 shadow-xl animate-float-delay">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> MERN Stack
                  </div>
                  <div className="hidden lg:flex absolute top-1/2 -right-8 -translate-y-1/2 px-3.5 py-2 rounded-full items-center gap-2 text-xs font-semibold text-violet-700 dark:text-violet-300 bg-white dark:bg-zinc-900 border border-violet-200 dark:border-violet-500/40 shadow-xl animate-float-slow">
                    <span className="w-2 h-2 rounded-full bg-violet-500" /> TypeScript
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────── */}
      <section className="border-y border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200 dark:divide-zinc-800">
            {metrics.map((m, i) => (
              <AnimatedSection key={m.label} delay={i * 70}>
                <div className="py-10 px-6 text-center group hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors duration-200">
                  <div
                    className="text-4xl sm:text-5xl font-black mb-1 gradient-text"
                  >
                    {m.value}
                  </div>
                  <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-0.5">{m.label}</div>
                  <div className="text-xs text-zinc-400 font-mono">{m.sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE TERMINAL ────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <p className="eyebrow mb-2 !text-indigo-400">Interactive CLI Feature</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3 text-white">
              Try the <span className="gradient-text">Candidate Terminal</span>
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Type interactive commands to quickly inspect skills, experience, project repos, and candidate details.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Terminal />
          </AnimatedSection>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="eyebrow mb-3">Technical Arsenal</p>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
              My Tech Stack
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-base">
              Tools and technologies I use to build production-quality mobile and web applications.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
              {techStack.map((tech, i) => (
                <span
                  key={tech.label}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${tech.color} ${tech.bg} ${tech.border} hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ───────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-zinc-100/50 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow mb-3">Work Samples</p>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              View All 6 Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((proj, i) => (
              <AnimatedSection key={proj.title} delay={i * 100}>
                <div className="card p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`badge border text-xs ${proj.categoryColor}`}>{proj.category}</span>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">{proj.title}</h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">{proj.subtitle}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1 mb-5">{proj.description}</p>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map(t => (
                        <span key={t} className="badge-zinc !text-[11px]">{t}</span>
                      ))}
                    </div>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700"
                    >
                      Code Repo <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center sm:hidden">
            <Link to="/projects" className="btn-ghost">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div
              className="rounded-3xl p-10 sm:p-14 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.08) 100%)' }}
            >
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', opacity: 0.08 }}
              />
              <div className="absolute inset-px rounded-3xl border border-indigo-200 dark:border-indigo-500/30" />
              <div className="relative z-10">
                <div className="badge w-fit mx-auto mb-6">
                  <Sparkles className="w-3.5 h-3.5" /> Open to Full-Time SDE Roles
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
                  Let's build something{' '}
                  <span className="gradient-text">great together</span>
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-base mb-8 max-w-xl mx-auto">
                  Actively seeking SDE positions. If you're looking for a React Native or MERN developer who ships clean, production-ready code — let's talk.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link to="/contact" className="btn-primary" id="cta-contact">
                    Get In Touch <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="/Khushi_Shah_Resume.pdf" download="Khushi_Shah_Resume.pdf" className="btn-ghost" id="cta-download">
                    <Download className="w-4 h-4" /> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default Home;
