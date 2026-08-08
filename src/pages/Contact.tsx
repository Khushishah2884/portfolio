import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://portfolio-backend-wheat-five.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setMsg("Thanks for reaching out! I'll get back to you within 24 hours.");
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Server error');
      }
    } catch {
      setStatus('error');
      setMsg('Something went wrong. Please email me directly at khushis2328@gmail.com');
    }
  };

  const contactInfo = [
    { label: 'Email', value: 'khushis2328@gmail.com', href: 'mailto:khushis2328@gmail.com', icon: Mail },
    { label: 'Phone', value: '+91 87992 65744', href: 'tel:+918799265744', icon: Phone },
    { label: 'Location', value: 'Surat & Ahmedabad, Gujarat, India', href: null, icon: MapPin },
  ];

  const socials = [
    { label: 'GitHub',   href: 'https://github.com/Khushishah2884',                   icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khushi-shah-679071252/',   icon: Linkedin },
    { label: 'Email',    href: 'mailto:khushis2328@gmail.com',                         icon: Mail },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="eyebrow mb-3">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-5">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
              Actively seeking full-time SDE opportunities. Open to React Native, MERN, and full-stack roles. Response within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: Info */}
          <AnimatedSection className="lg:col-span-5">
            <div className="space-y-5 h-full flex flex-col">

              {/* Contact cards */}
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="card p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-0.5">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Social row */}
              <div className="card p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">Connect Online</p>
                <div className="flex items-center gap-2">
                  {socials.map(s => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex-1 py-2.5 flex items-center justify-center gap-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-semibold transition-all duration-200"
                      >
                        <Icon className="w-4 h-4" /> {s.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Status */}
              <div className="rounded-2xl p-5 border flex-1"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))', borderColor: 'rgba(99,102,241,0.2)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Currently Available</span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Open to full-time SDE positions — React Native, MERN stack, or full-stack roles. Available to start immediately.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={120} className="lg:col-span-7">
            <div className="card p-7 sm:p-9">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Send a Message</h2>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Message Sent!</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs">{msg}</p>
                  <button onClick={() => setStatus('idle')} className="btn-ghost mt-6 !text-xs">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wide" htmlFor="name">
                        Name *
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 dark:focus:border-indigo-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wide" htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl text-sm border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 dark:focus:border-indigo-500 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wide" htmlFor="subject">
                      Subject *
                    </label>
                    <input
                      id="subject" name="subject" type="text" required
                      value={form.subject} onChange={handleChange}
                      placeholder="Job opportunity / Collaboration / Other"
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 dark:focus:border-indigo-500 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wide" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message" name="message" required rows={6}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell me about the role, project, or how I can help..."
                      className="w-full px-4 py-2.5 rounded-xl text-sm border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 dark:focus:border-indigo-500 transition-all duration-200 resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {msg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full !py-3 !text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    id="contact-submit"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>

      </div>
    </div>
  );
};

export default Contact;
