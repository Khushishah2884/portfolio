import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Play, Copy, Check } from 'lucide-react';

const Terminal = () => {
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'welcome',
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-emerald-400 font-bold">✨ Welcome to Khushi Shah's Interactive CLI v1.0.0</p>
          <p className="text-xs text-zinc-400">Type <span className="text-indigo-400 font-mono">help</span> or click quick actions below to inspect candidate profile.</p>
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let out: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        out = (
          <div className="space-y-1 text-xs">
            <p className="text-indigo-300 font-semibold mb-1">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-zinc-400">
              <div><span className="text-emerald-400">skills</span> - List tech stack</div>
              <div><span className="text-emerald-400">projects</span> - View top repos</div>
              <div><span className="text-emerald-400">experience</span> - Work history</div>
              <div><span className="text-emerald-400">contact</span> - Email & links</div>
              <div><span className="text-emerald-400">clear</span> - Clear terminal</div>
              <div><span className="text-emerald-400">whoami</span> - Executive bio</div>
            </div>
          </div>
        );
        break;

      case 'skills':
        out = (
          <div className="text-xs space-y-1 text-zinc-300">
            <p className="font-bold text-indigo-400">🚀 Core Stack:</p>
            <p><span className="text-cyan-400 font-mono">Mobile:</span> React Native, Redux Toolkit, Redux Saga, AsyncStorage, Geolocation</p>
            <p><span className="text-emerald-400 font-mono">Web/Full-Stack:</span> React.js, Node.js, Express.js, MongoDB, REST APIs</p>
            <p><span className="text-amber-400 font-mono">Languages:</span> TypeScript, JavaScript, Python, C/C++</p>
            <p><span className="text-violet-400 font-mono">CS Fundamentals:</span> Data Structures & Algorithms, Object-Oriented Design, DB Indexing</p>
          </div>
        );
        break;

      case 'projects':
        out = (
          <div className="text-xs space-y-1.5 text-zinc-300">
            <p className="font-bold text-indigo-400">📁 Verified GitHub Repositories:</p>
            <p>1. <a href="https://github.com/Khushishah2884/FreshMart" target="_blank" rel="noreferrer" className="text-cyan-400 underline hover:text-cyan-300">Khushishah2884/FreshMart</a> (19-Screen React Native Grocery App)</p>
            <p>2. <a href="https://github.com/Khushishah2884/TaskEase" target="_blank" rel="noreferrer" className="text-cyan-400 underline hover:text-cyan-300">Khushishah2884/TaskEase</a> (Offline Task Management App)</p>
            <p>3. <a href="https://github.com/Khushishah2884/CookIQ" target="_blank" rel="noreferrer" className="text-amber-400 underline hover:text-amber-300">Khushishah2884/CookIQ</a> (MERN + Python ML Recipe App)</p>
            <p>4. <a href="https://github.com/Khushishah2884/DataDash" target="_blank" rel="noreferrer" className="text-violet-400 underline hover:text-violet-300">Khushishah2884/DataDash</a> (Excel Analytics Dashboard)</p>
            <p>5. <a href="https://github.com/Khushishah2884/movieflix" target="_blank" rel="noreferrer" className="text-emerald-400 underline hover:text-emerald-300">Khushishah2884/movieflix</a> (Streaming App & Express Backend API)</p>
          </div>
        );
        break;

      case 'experience':
        out = (
          <div className="text-xs space-y-2 text-zinc-300">
            <div>
              <p className="font-bold text-indigo-400">Simform Solutions (Jan 2026 - Jul 2026)</p>
              <p className="text-zinc-400">Software Development Trainee · Shipped 15+ React Native screens, cut FlatList rendering time by ~25%, resolved 25+ bugs.</p>
            </div>
            <div>
              <p className="font-bold text-indigo-400">SourceCube Technologies (Jun 2024)</p>
              <p className="text-zinc-400">Software Development Intern · Optimized 15+ MERN REST endpoints and database indexing (~20% faster queries).</p>
            </div>
          </div>
        );
        break;

      case 'contact':
        out = (
          <div className="text-xs space-y-1 text-zinc-300">
            <p><span className="text-indigo-400">Email:</span> khushis2328@gmail.com</p>
            <p><span className="text-indigo-400">Phone:</span> +91 87992 65744</p>
            <p><span className="text-indigo-400">GitHub:</span> https://github.com/Khushishah2884</p>
            <p><span className="text-indigo-400">LinkedIn:</span> https://www.linkedin.com/in/khushi-shah-679071252/</p>
          </div>
        );
        break;

      case 'whoami':
        out = (
          <p className="text-xs text-zinc-300 leading-relaxed">
            Khushi Shah is a Software Development Engineer (B.Tech IT, BVM 2026) specializing in high-performance React Native cross-platform apps and full-stack MERN web platforms.
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        return;

      default:
        out = (
          <p className="text-xs text-red-400">
            Command not recognized: '<span className="font-mono">{trimmed}</span>'. Type <span className="underline font-mono">help</span> for command list.
          </p>
        );
    }

    setHistory(prev => [...prev, { cmd: cmdStr, output: out }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('khushis2328@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl overflow-hidden font-mono text-sm">
      {/* Top bar */}
      <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-zinc-400 font-sans ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" /> khushi-shah-terminal
          </span>
        </div>
        <button
          onClick={copyEmail}
          className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 px-2.5 py-1 rounded-md transition-colors"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
        </button>
      </div>

      {/* Terminal window body */}
      <div ref={terminalContainerRef} className="p-4 h-64 overflow-y-auto space-y-3 font-mono">
        {history.map((h, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="text-indigo-400 font-bold">khushi@sde:~$</span>
              <span className="text-zinc-100 font-semibold">{h.cmd}</span>
            </div>
            <div className="pl-4">{h.output}</div>
          </div>
        ))}
      </div>

      {/* Quick command pills */}
      <div className="px-4 py-2 bg-zinc-900/60 border-t border-zinc-800 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-zinc-500 text-[11px] font-sans">Quick CLI:</span>
        {['skills', 'projects', 'experience', 'contact', 'whoami', 'clear'].map(cmd => (
          <button
            key={cmd}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleCommand(cmd);
            }}
            className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-indigo-600 hover:text-white text-zinc-300 text-[11px] font-mono transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input row */}
      <form onSubmit={onSubmit} className="px-4 py-2.5 bg-zinc-900 border-t border-zinc-800 flex items-center gap-2">
        <span className="text-emerald-400 font-bold text-xs">khushi@sde:~$</span>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type command ('help', 'projects', 'skills')..."
          className="flex-1 bg-transparent text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
        />
        <button type="submit" className="text-zinc-400 hover:text-indigo-400 p-1">
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};

export default Terminal;
