import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Download, Send, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navItems = [
    { name: 'Home',      path: '/' },
    { name: 'Projects',  path: '/projects' },
    { name: 'Expertise', path: '/services' },
    { name: 'About',     path: '/about' },
    { name: 'Contact',   path: '/contact' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-zinc-950/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" id="nav-logo">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-glow-sm group-hover:scale-105 transition-transform duration-200"
                style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
              >
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div
                  className="text-base font-bold tracking-tight leading-none"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Khushi Shah
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 leading-none mt-0.5">
                  SDE · React Native · MERN
                </div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    id={`nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200"
                aria-label="Toggle theme"
                id="nav-theme-toggle"
              >
                {theme === 'dark' ? <Sun className="w-4.5 h-4.5 w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
              </button>
              {/* Resume download */}
              <a
                href="/Khushi_Shah_Resume.pdf"
                download="Khushi_Shah_Resume.pdf"
                className="btn-ghost !py-2 !px-4 !text-xs !gap-1.5"
                id="nav-download-cv"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
              {/* CTA */}
              <Link
                to="/contact"
                className="btn-primary !py-2 !px-4 !text-xs !gap-1.5"
                id="nav-lets-talk"
              >
                <Send className="w-3.5 h-3.5" />
                Let's Talk
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-1.5">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                id="nav-mobile-toggle"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-3">
              <div className="flex flex-col gap-0.5 mb-3">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 font-semibold'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                    }`}
                    id={`mobile-nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <a
                  href="/Khushi_Shah_Resume.pdf"
                  download="Khushi_Shah_Resume.pdf"
                  className="btn-ghost !justify-center !w-full"
                  id="mobile-nav-resume"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary !justify-center !w-full"
                  id="mobile-nav-contact"
                >
                  <Send className="w-4 h-4" />
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
