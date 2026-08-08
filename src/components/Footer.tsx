import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Code2, Heart, MapPin } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home',      path: '/' },
    { name: 'Projects',  path: '/projects' },
    { name: 'Expertise', path: '/services' },
    { name: 'About',     path: '/about' },
    { name: 'Contact',   path: '/contact' },
  ];

  const socials = [
    { label: 'GitHub',   href: 'https://github.com/Khushishah2884',                     icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khushi-shah-679071252/',     icon: Linkedin },
    { label: 'Email',    href: 'mailto:khushis2328@gmail.com',                           icon: Mail },
  ];

  return (
    <footer className="bg-zinc-950 dark:bg-zinc-950 border-t border-zinc-800/60 relative overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.6) 30%, rgba(139,92,246,0.6) 70%, transparent 100%)' }}
      />

      {/* Glow orbs */}
      <div className="absolute -top-40 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 relative z-10">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-zinc-800/60">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
              >
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div
                  className="font-bold text-base leading-none"
                  style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Khushi Shah
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-0.5">
                  Software Development Engineer
                </div>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Building production mobile apps & full-stack platforms with React Native and the MERN Stack.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>Surat & Ahmedabad, Gujarat, India</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-5">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <a href="mailto:khushis2328@gmail.com" className="flex items-center gap-2.5 text-sm text-zinc-400 hover:text-indigo-400 transition-colors">
                <Mail className="w-4 h-4 text-indigo-500" />
                khushis2328@gmail.com
              </a>
              <a href="tel:+918799265744" className="flex items-center gap-2.5 text-sm text-zinc-400 hover:text-indigo-400 transition-colors">
                <span className="w-4 h-4 text-indigo-500 text-center text-xs">📞</span>
                +91 87992 65744
              </a>
            </div>
            <div className="flex items-center gap-2">
              {socials.map(s => {
                const IconComp = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-800 hover:bg-indigo-500/20 text-zinc-400 hover:text-indigo-400 border border-zinc-700 hover:border-indigo-500/50 transition-all duration-200"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-xs text-zinc-600">
            <span>© {new Date().getFullYear()} Khushi Shah. Made with</span>
            <Heart className="w-3 h-3 text-indigo-500 fill-indigo-500" />
            <span>using React & Tailwind CSS.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-zinc-500 font-medium">Open to SDE Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
