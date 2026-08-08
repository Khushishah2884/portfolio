import React, { useState } from 'react';
import { Github, ExternalLink, CheckCircle2, Code2, Search, Filter } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'React Native & Mobile', 'MERN & Full-Stack', 'AI & Data Analytics', 'Web Applications'];

  const projects = [
    {
      id: 1,
      title: 'FreshMart — E-Commerce Grocery Platform',
      subtitle: '19-Screen Cross-Platform Mobile Shopping Experience',
      category: 'React Native & Mobile',
      catColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30',
      description: 'Architected 19 screens end-to-end for a cross-platform grocery shopping application with encrypted authentication, geolocation address resolution, and Redux Persist offline state management.',
      technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'Redux Persist', 'Geolocation API', 'Reverse Geocoding'],
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
      bullets: [
        'Architected 19 screens end-to-end (Auth, Product Discovery, Cart, Checkout, Order Tracking) applying modular OOP component design across 7 feature modules.',
        'Built 8+ reusable UI components (AppButton, ProductCard, CategoryCard, Skeleton Loaders) shared across modules, cutting duplicate code.',
        'Implemented secure, persistent authentication (encrypted token storage, email verification) with Redux Persist offline state management.',
        'Engineered geolocation-based address resolution using reverse-geocoding algorithms for real-time delivery address selection.',
      ],
      github: 'https://github.com/Khushishah2884/FreshMart',
      live: null,
    },
    {
      id: 2,
      title: 'TaskEase — Offline-First Task Management App',
      subtitle: 'Zero-Network Dependency Mobile Productivity Suite',
      category: 'React Native & Mobile',
      catColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30',
      description: 'Zero-network-dependency mobile task manager with persistent local storage, calendar scheduling logic, and optimized list rendering for lower-end devices.',
      technologies: ['React Native', 'TypeScript', 'Redux Toolkit', 'AsyncStorage', 'FlatList Optimization', 'Calendar Scheduling'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80',
      bullets: [
        'Designed and implemented full CRUD logic with persistent local storage, structuring data-access patterns to remove network dependency entirely.',
        'Built reusable UI components and calendar scheduling logic, applying FlatList rendering optimizations for smooth performance on lower-end devices.',
      ],
      github: 'https://github.com/Khushishah2884/TaskEase',
      live: null,
    },
    {
      id: 3,
      title: 'CookIQ — AI Recipe Recommendation Platform',
      subtitle: 'MERN Stack + Python ML Ingredient Prediction & Chatbot',
      category: 'AI & Data Analytics',
      catColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30',
      description: 'AI-powered recipe recommendation system integrating a Python ML model to predict ingredient quantities and a context-aware conversational chatbot.',
      technologies: ['MERN Stack', 'Python (ML Model)', 'Conversational Chatbot', 'React.js', 'MongoDB', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
      bullets: [
        'Built AI-powered recipe recommendation platform integrating a Python ML model to predict ingredient quantities and dish suggestions.',
        'Integrated context-aware conversational chatbot into the MERN app with structured conversation-state logic to personalize user experience.',
      ],
      github: 'https://github.com/Khushishah2884/CookIQ',
      live: null,
    },
    {
      id: 4,
      title: 'DataDash — Data Analytics Platform',
      subtitle: 'Dynamic Excel Parsing & 2D/3D Interactive Chart Dashboard',
      category: 'MERN & Full-Stack',
      catColor: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/30',
      description: 'Full-stack data visualization platform enabling dynamic Excel file parsing (SheetJS) and algorithmic data aggregation for 2D/3D interactive charts.',
      technologies: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'SheetJS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
      bullets: [
        'Built a full-stack analytics platform enabling dynamic Excel-file parsing and algorithmic data aggregation for interactive 2D/3D chart generation using Chart.js.',
        'Developed admin panel for user and chart management with structured data-parsing logic and history tracking.',
      ],
      github: 'https://github.com/Khushishah2884/DataDash',
      live: 'https://data-dash-nine.vercel.app',
    },
    {
      id: 5,
      title: 'MovieFlix — Full-Stack Streaming Platform',
      subtitle: 'Movie Streaming Portal with Dedicated Node.js Backend API',
      category: 'MERN & Full-Stack',
      catColor: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/30',
      description: 'Full-stack web application featuring movie browsing, search, user watchlists, and backend REST APIs deployed on Vercel.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Vercel Deployment'],
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=900&q=80',
      bullets: [
        'Engineered responsive React frontend integrated with a custom Express backend for movie streaming metadata.',
        'Deployed decoupled frontend and backend REST services independently to Vercel with CORS configuration and route caching.',
      ],
      github: 'https://github.com/Khushishah2884/movieflix',
      backendGithub: 'https://github.com/Khushishah2884/movieflix_backend',
      live: 'https://movieflix-tau-pearl.vercel.app',
    },
    {
      id: 6,
      title: 'Event Showcase Portal',
      subtitle: 'Responsive Event & Conference Management Web App',
      category: 'Web Applications',
      catColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30',
      description: 'Clean responsive web portal built for event management, registration showcase, and speaker schedules hosted on GitHub Pages.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
      bullets: [
        'Designed lightweight semantic layout for event scheduling and registration.',
        'Deploys automatically via GitHub Pages for static delivery.',
      ],
      github: 'https://github.com/Khushishah2884/Event_website',
      live: null,
    },
  ];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="eyebrow mb-3">Verified GitHub Repositories</p>
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-5">
              Production <span className="gradient-text">Projects & Codebases</span>
            </h1>
            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every project below links directly to its official source repository on my GitHub profile.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter + Search controls */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                    activeCategory === cat
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-glow-sm'
                      : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by tech or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Projects List */}
        <div className="space-y-8 mb-16">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">No projects match your current search.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="btn-ghost !text-xs mt-3"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredProjects.map((proj, i) => (
              <AnimatedSection key={proj.id} delay={i * 70}>
                <div className="group rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-card-hover hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12">

                    {/* Image */}
                    <div className="lg:col-span-4 relative overflow-hidden h-56 lg:h-auto min-h-[260px]">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0.2) 45%, transparent 70%)' }} />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${proj.catColor}`}
                          style={{ backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.85)' }}>
                          {proj.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-bold text-base leading-tight">{proj.subtitle}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                          {proj.title}
                        </h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{proj.description}</p>

                        <ul className="space-y-2 mb-6">
                          {proj.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {proj.technologies.map(tech => (
                            <span key={tech} className="badge-zinc !text-[11px]">{tech}</span>
                          ))}
                        </div>

                        {/* Action buttons with specific GitHub repository URLs */}
                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost !py-2 !px-4 !text-xs !gap-1.5"
                          >
                            <Github className="w-3.5 h-3.5" />
                            Repository Code
                          </a>

                          {proj.backendGithub && (
                            <a
                              href={proj.backendGithub}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-ghost !py-2 !px-4 !text-xs !gap-1.5"
                            >
                              <Github className="w-3.5 h-3.5 text-violet-500" />
                              Backend Code
                            </a>
                          )}

                          {proj.live && (
                            <a
                              href={proj.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary !py-2 !px-4 !text-xs !gap-1.5"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              Live App Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            ))
          )}
        </div>

        {/* GitHub Callout */}
        <AnimatedSection>
          <div
            className="rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #09090B 0%, #1a1033 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(139,92,246,0.6), transparent)' }}
            />
            <div className="relative z-10 max-w-xl mx-auto">
              <Code2 className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">All 7 GitHub Repositories Verified</h3>
              <p className="text-zinc-400 text-sm mb-7">
                Explore commit logs, feature branches, and pull requests directly on my public GitHub profile.
              </p>
              <a
                href="https://github.com/Khushishah2884"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github className="w-4 h-4" />
                Visit @Khushishah2884 GitHub Profile
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default Projects;
