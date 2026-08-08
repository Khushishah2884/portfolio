import React from 'react';
import { Smartphone, Code, Database, Cpu, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Mobile App Development',
      description: 'High-performance, production-ready React Native apps for iOS and Android with TypeScript, clean OOP architecture, and offline state handling.',
      features: ['React Native + TypeScript', '15+ Screens & 7+ Modules Shipped', 'Redux Toolkit & Redux Saga', 'Encrypted Auth & Geolocation'],
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'rgba(6,182,212,0.3)',
    },
    {
      icon: Code,
      title: 'Full-Stack MERN Web Development',
      description: 'End-to-end full-stack web applications with React.js, Node.js, Express.js, and MongoDB — scalable, modular architecture with modern UI.',
      features: ['React.js Single Page Applications', 'Node.js + Express.js Backend', 'Modular Component Architecture', 'Auth & Admin Dashboards'],
      gradient: 'from-violet-500 to-purple-600',
      glow: 'rgba(139,92,246,0.3)',
    },
    {
      icon: Zap,
      title: 'RESTful API Engineering',
      description: 'Designing robust API architectures with centralized edge-case handling, structured error recovery, and DB indexing for ~20% faster response times.',
      features: ['20+ Endpoint Integrations', 'MongoDB Schema Optimization', 'MySQL Query Restructuring', 'Centralized Error Handling'],
      gradient: 'from-amber-500 to-orange-500',
      glow: 'rgba(245,158,11,0.3)',
    },
    {
      icon: Cpu,
      title: 'UI Rendering & State Performance',
      description: 'Optimizing rendering bottlenecks on low-end devices and refactoring state-management to minimize re-renders and eliminate state bugs.',
      features: ['FlatList Optimization (~25% speedup)', 'Redux Toolkit Bug Reduction (~30%)', 'Memory Leak Prevention', 'Reusable UI Component Libraries'],
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'rgba(16,185,129,0.3)',
    },
    {
      icon: Database,
      title: 'AI & Data Visualization Platforms',
      description: 'Integrating Python-based ML models, conversational chatbots, dynamic Excel parsing, and 2D/3D interactive Chart.js dashboards.',
      features: ['Python ML Model API Integration', 'Context-Aware Chatbots', 'SheetJS Excel Parsing', 'Interactive Chart.js Dashboards'],
      gradient: 'from-indigo-500 to-violet-500',
      glow: 'rgba(99,102,241,0.3)',
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="eyebrow mb-3">What I Build</p>
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-5">
              Technical <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              Specialized software development services across mobile, web, API performance, and intelligent data systems.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <AnimatedSection key={svc.title} delay={i * 80}>
                <div className="card p-6 sm:p-7 h-full flex flex-col group">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))`, backgroundImage: `linear-gradient(135deg, ${svc.gradient.replace('from-', '#').replace(' to-', ', #').replace('cyan-500', '06b6d4').replace('blue-500', '3b82f6').replace('violet-500', '8b5cf6').replace('purple-600', '9333ea').replace('amber-500', 'f59e0b').replace('orange-500', 'f97316').replace('emerald-500', '10b981').replace('teal-500', '14b8a6').replace('indigo-500', '6366f1')})`, boxShadow: `0 4px 16px ${svc.glow}` }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 flex-1">
                    {svc.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                      Discuss this <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA Banner */}
        <AnimatedSection>
          <div className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #09090B 0%, #1a1033 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(139,92,246,0.6), transparent)' }}
            />
            <div className="absolute -top-20 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="badge w-fit mb-4">Proven Production Impact</div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  Need high-performance React Native or MERN development?
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  I combine core CS fundamentals (DSA, OOP, DB indexing) with framework expertise to deliver measurable speed & stability gains.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link to="/contact" className="btn-primary">
                  Start a Collaboration <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default Services;
