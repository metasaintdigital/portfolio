import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight, Zap, Globe, Code, Cpu, Layout } from 'lucide-react';

const projects = [
  {
    id: 'eln',
    title: 'Empowered Lifestyle Network',
    category: 'Tech / Lead Gen',
    theme: 'border-yellow-500 shadow-yellow-500/20 text-yellow-500',
    bg: 'bg-yellow-500',
    url: 'https://eln-onboarding.netlify.app/',
    logo: 'ELN',
    ai: 'Agentic Workflow Orchestration',
    desc: 'An entry point for an agentic AI system that scores leads and triggers personalized NLP-driven follow-ups.',
    result: 'Transforms sign-ups into an intelligent filter for high-value partners.'
  },
  {
    id: 'dhb',
    title: 'DHB Properties',
    category: 'Real Estate',
    theme: 'border-blue-800 shadow-blue-800/50 text-blue-400',
    bg: 'bg-blue-900',
    url: 'https://dhbproperties.net/',
    logo: 'DHB',
    ai: 'Predictive Behavioral Analytics',
    desc: 'Utilizes ML algorithms to analyze hyper-local market trends and guest patterns to predict intent-to-stay velocity.',
    result: 'Automated price optimization that removes guesswork from asset management.'
  },
  {
    id: 'altered',
    title: 'Altered Influence',
    category: 'Fashion & Retail',
    theme: 'border-slate-300 shadow-slate-100/20 text-slate-200',
    bg: 'bg-slate-700',
    url: 'https://alteredinfluence.com/',
    logo: 'ALT',
    ai: 'Computer Vision & Trend Forecasting',
    desc: 'Leverages Trend Engines to align inventory with social sentiment and aesthetic shifts.',
    result: 'Reduces overproduction by ensuring drops are backed by cultural data.'
  },
  {
    id: 'lumina',
    title: 'Lumina Path',
    category: "Children's Education",
    theme: 'border-yellow-300 shadow-yellow-300/40 text-yellow-300',
    bg: 'bg-yellow-400',
    url: 'https://toddler-flashcards-3da4c.web.app/',
    logo: 'LUM',
    ai: 'Adaptive Learning Orchestration',
    desc: 'Tracks real-time student engagement to dynamically adjust lesson plans using Predictive Analytics.',
    result: 'Transforms rote memorization into a data-driven Learning Roadmap.'
  },
  {
    id: 'aequitas',
    title: 'Aequitas Engine',
    category: 'Finance & Investing',
    theme: 'border-indigo-300 shadow-indigo-300/30 text-indigo-300',
    bg: 'bg-indigo-400',
    url: '#',
    logo: 'Æ',
    ai: 'Financial Modeling & Risk Analysis',
    desc: 'High-frequency data processing for real-time market sentiment analysis.',
    result: 'Provides institutional-grade risk assessment for private investors.'
  }
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 p-6 font-sans selection:bg-indigo-500/30">
      
      {/* Header */}
      <header className="mb-16 max-w-4xl mx-auto pt-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="text-xs font-mono text-slate-500 mb-2 tracking-widest">M.S.H / 26 [Hub]</h4>
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">Malik St. Hilaire</h1>
            <h2 className="text-lg text-slate-400 font-medium">Strategic Business Director | AI Developer</h2>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-xs font-mono text-emerald-400 mb-1">● SYSTEM ONLINE</div>
            <div className="text-xs text-slate-600">v2.4.0 [Stable]</div>
          </div>
        </div>

        {/* SEO Bar */}
        <div className="w-full h-px bg-slate-800 mb-4"></div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-12">
          <span>Agentic AI Architecture</span>
          <span>Google Cloud Vertex AI</span>
          <span>Predictive Modeling</span>
          <span>NLP</span>
          <span>Python Dev</span>
          <span>Vector Databases</span>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-300 leading-relaxed max-w-2xl">
            <span className="text-white font-semibold">Strategic Portals: Enterprise Intelligence.</span> A collection of industry-specific AI environments built to solve high-level operational friction. These gateways demonstrate the integration of agentic workflows and predictive modeling into live, scalable business ecosystems.
          </p>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={project.id}
            onClick={() => setSelected(project)}
            className={`cursor-pointer group relative overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-600 p-6 h-64 flex flex-col justify-between rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10`}
          >
            <div className="flex justify-between items-start">
               <span className={`text-2xl font-black ${project.theme.split(' ')[2]}`}>{project.logo}</span>
               <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">{project.title}</h3>
              <p className="text-xs font-mono text-slate-500 uppercase">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-20 pt-10 border-t border-slate-800 text-center text-slate-600 text-xs font-mono">
        <p>DEPLOY STRATEGY // MALIKSAINTMARKETING@GMAIL.COM</p>
      </footer>

      {/* Modal / Portal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              layoutId={selected.id}
              className={`w-full max-w-2xl bg-slate-950 border ${selected.theme.split(' ')[0]} rounded-2xl overflow-hidden shadow-2xl relative`}
            >
              {/* Portal Header */}
              <div className="p-8 pb-0 flex justify-between items-start">
                 <div>
                    <h2 className={`text-4xl font-black mb-2 ${selected.theme.split(' ')[2]}`}>{selected.logo}</h2>
                    <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                    <p className="text-sm font-mono text-slate-400 uppercase tracking-widest">{selected.category}</p>
                 </div>
                 <button onClick={() => setSelected(null)} className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors">
                   <X className="w-6 h-6 text-white" />
                 </button>
              </div>

              {/* Strategic Brief */}
              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                   <div className="col-span-3 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                      <h4 className="text-xs font-mono text-slate-500 uppercase mb-2">AI Integration</h4>
                      <p className="text-white font-medium flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-indigo-400" />
                        {selected.ai}
                      </p>
                   </div>
                   
                   <div className="md:col-span-3 space-y-4">
                      <div>
                        <h4 className="text-xs font-mono text-slate-500 uppercase mb-1">How It's Used</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{selected.desc}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono text-slate-500 uppercase mb-1">The Result</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{selected.result}</p>
                      </div>
                   </div>
                </div>

                {/* Launch Button */}
                <a 
                  href={selected.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-full py-4 mt-4 font-bold text-slate-900 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98] ${selected.bg}`}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  LAUNCH LIVE PLATFORM
                </a>
              </div>
            </motion.div>
            
            {/* Backdrop click to close */}
            <div className="absolute inset-0 -z-10" onClick={() => setSelected(null)}></div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}