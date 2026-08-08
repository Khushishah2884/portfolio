import React from 'react';
import {
  GraduationCap, Briefcase, MapPin, CheckCircle2,
  Code2, Database, Terminal, Cpu, Layers, BookOpen, Calendar, ExternalLink
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const experiences = [
    {
      title: 'Software Development Trainee',
      company: 'Simform Solutions',
      location: 'Ahmedabad, Gujarat',
      period: 'Jan 2026 – Jul 2026',
      tech: 'React Native & Cross-Platform Mobile',
      color: 'from-indigo-500 to-violet-500',
      achievements: [
        'Designed and implemented 15+ screens across 2 production apps using TypeScript, applying OOP component architecture over 6 months of Agile sprints.',
        'Engineered 20+ RESTful API integrations (Axios/Fetch) with centralized error-handling logic and structured failure-state coverage.',
        'Built and optimized state management (Redux Toolkit, Redux Saga) across 8+ feature modules, reducing state-related bugs by ~30%.',
        'Improved list-rendering performance by ~25% on lower-end devices by optimizing FlatList logic and reducing unnecessary re-renders.',
        'Resolved 25+ bugs through Git-based code review and root-cause debugging within a 6–8 member Agile team.',
      ],
    },
    {
      title: 'Software Development Intern',
      company: 'SourceCube Technologies Pvt. Ltd.',
      location: 'Gujarat, India',
      period: 'Jun 2024',
      tech: 'MERN Stack & Database Optimization',
      color: 'from-emerald-500 to-teal-500',
      achievements: [
        'Designed and optimized 15+ RESTful API endpoints and MongoDB schemas/MySQL queries, improving average query response time by ~20% through indexing and query-structure optimization.',
        'Built 5+ full-stack modules for internal web applications, applying OOP design across the MongoDB–Express–React–Node stack.',
      ],
    },
  ];

  const skills = [
    {
      cat: 'Core CS',
      icon: Cpu,
      items: ['DSA', 'OOP Design', 'DB Design', 'Complexity Analysis', 'REST API Architecture'],
    },
    {
      cat: 'Languages',
      icon: Terminal,
      items: ['TypeScript', 'JavaScript', 'Python', 'C/C++'],
    },
    {
      cat: 'Frameworks',
      icon: Layers,
      items: ['React Native', 'React.js', 'Node.js', 'Express.js', 'Redux Toolkit', 'Redux Saga'],
    },
    {
      cat: 'Databases & Tools',
      icon: Database,
      items: ['MongoDB', 'MySQL', 'Git & GitHub', 'Postman', 'VS Code', 'Figma'],
    },
  ];

  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="eyebrow mb-3">Background & Journey</p>
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-5">
              About <span className="gradient-text">Khushi Shah</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              B.Tech IT graduate with hands-on production experience in React Native mobile and MERN full-stack engineering. Focused on clean, scalable code and measurable performance.
            </p>
          </div>
        </AnimatedSection>

        {/* Bio + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">

          {/* Summary */}
          <AnimatedSection className="lg:col-span-7">
            <div className="card p-7 sm:p-9 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
                  <Code2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Background & Summary</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                I'm a Software Development Engineer with hands-on experience building production mobile apps (React Native) and full-stack web platforms (MERN stack). My focus centers around scalable architecture, component reusability, state management, and system-level performance optimization.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-7">
                At Simform Solutions, I shipped 15+ screens across 2 production React Native apps and cut list-rendering latency by ~25% on lower-end devices. At SourceCube Technologies, I optimized REST APIs and database queries to boost response times by ~20%.
              </p>
              <div className="flex flex-wrap gap-3 pt-5 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" /> Surat & Ahmedabad, Gujarat
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-500" /> B.Tech IT (2022–2026)
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={120} className="lg:col-span-5">
            <div className="h-full rounded-2xl p-6 sm:p-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #09090B 0%, #1a1033 100%)' }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.7), rgba(139,92,246,0.7), transparent)' }}
              />
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Education</h2>
                    <p className="text-xs text-indigo-400 font-mono">2022 – 2026</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Birla Vishwakarma Mahavidyalaya (BVM)</h3>
                <p className="text-indigo-300 text-sm font-medium mb-4">B.Tech, Information Technology</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-sm font-bold mb-6">
                  CGPA: 7.20 / 10
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {coursework.map(c => (
                    <span key={c} className="px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 text-xs border border-zinc-700 font-mono">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Experience Timeline */}
        <AnimatedSection className="mb-20">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Career</p>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
              Professional Experience
            </h2>
          </div>

          <div className="relative pl-14">
            {/* Vertical line */}
            <div className="absolute left-5 top-5 bottom-5 w-px bg-zinc-200 dark:bg-zinc-800" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <AnimatedSection key={exp.title} delay={i * 100}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-9 top-2 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-glow-sm flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${exp.color.replace('from-', '').replace(' to-', ', ')})` }}
                    >
                      <Briefcase className="w-4 h-4" />
                    </div>

                    <div className="card p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-5 border-b border-zinc-100 dark:border-zinc-800">
                        <div>
                          <div className="badge w-fit mb-2">{exp.tech}</div>
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{exp.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-base font-semibold text-indigo-600 dark:text-indigo-400">{exp.company}</span>
                            <span className="text-zinc-400 text-sm">· {exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 w-fit">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500" /> {exp.period}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((a, ai) => (
                          <li key={ai} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Matrix */}
        <AnimatedSection className="mb-16">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
              Skills & Tech Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedSection key={s.cat} delay={i * 70}>
                  <div className="card p-5 h-full">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{s.cat}</h3>
                    </div>
                    <ul className="space-y-2">
                      {s.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Problem Solving */}
        <AnimatedSection>
          <div className="card p-7 sm:p-9">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="badge w-fit mb-3">LeetCode · Algorithm Focus</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Algorithmic Problem Solving</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl">
                  Actively solving daily challenges on LeetCode across arrays, strings, trees, graphs, and dynamic programming — directly applicable to production system efficiency.
                </p>
              </div>
              <a
                href="https://github.com/Khushishah2884"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-shrink-0"
              >
                View GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default About;
