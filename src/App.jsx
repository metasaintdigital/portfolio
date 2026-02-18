import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight, Cpu } from 'lucide-react';

// DATA CONFIGURATION
const projects = [
  {
    id: 'eln',
    title: 'Empowered Lifestyle Network',
    category: 'Tech / Lead Gen',
    theme: 'border-yellow-500 shadow-yellow-500/20 text-yellow-500',
    bg: 'bg-yellow-400', 
    glow: 'shadow-yellow-400/50', // Button Glow
    url: 'https://eln-onboarding.netlify.app/',
    logo: '/ELNLogo.png', // UPDATED FILENAME
    ai: 'Agentic Workflow Orchestration',
    desc: 'An entry point for an agentic AI system that scores leads and triggers personalized NLP-driven follow-ups.',
    result: 'Transforms sign-ups into an intelligent filter for high-value partners.'
  },
  {
    id: 'dhb',
    title: 'DHB Properties',
    category: 'Real Estate',
    theme: 'border-cyan-400 shadow-cyan-400/50 text-cyan-400',
    bg: 'bg-cyan-400', 
    glow: 'shadow-cyan-400/50', // Button Glow
    url: 'https://dhbproperties.net/',
    logo: '/DhbPropertiess.png', // UPDATED FILENAME (Double 's')
    ai: 'Predictive Behavioral Analytics',
    desc: 'Utilizes ML algorithms to analyze hyper-local market trends and guest patterns to predict intent-to-stay velocity.',
    result: 'Automated price optimization that removes guesswork from asset management.'
  },
  {
    id: 'altered',
    title: 'Altered Influence',
    category: 'Fashion & Retail',
    theme: 'border-slate-300 shadow-slate-100/20 text-slate-200',
    bg: 'bg-slate-200', 
    glow: 'shadow-slate-200/50', // Button Glow
    url: 'https://alteredinfluence.com/',
    logo: '/alteredinfluence.png', // UPDATED FILENAME
    ai: 'Computer Vision & Trend Forecasting',
    desc: 'Leverages Trend Engines to align inventory with social sentiment and aesthetic shifts.',
    result: 'Reduces overproduction by ensuring drops are backed by cultural data.'
  },
  {
    id: 'lumina',
    title: 'Lumina Path',
    category: "Children's Education",
    theme: 'border-yellow-300 shadow-yellow-300/40 text-yellow-300',
    bg: 'bg-yellow-300', 
    glow: 'shadow-yellow-300/50',
    url: 'https://toddler-flashcards-3da4c.web.app/',
    logo: '/lumina.png', 
    ai: 'Adaptive Learning Orchestration',
    desc: 'Tracks real-time student engagement to dynamically adjust lesson plans using Predictive Analytics.',
    result: 'Transforms rote memorization into a data-driven Learning Roadmap.'
  },
  {
    id: 'aequitas',
    title: 'Aequitas Engine',
    category: 'Finance & Investing',
    theme: 'border-indigo-400 shadow-indigo-400/30 text-indigo-400',
    bg: 'bg-indigo-400', 
    glow: 'shadow-indigo-400/50',
    url: '#',
    logo: '/aequitas.png', 
    ai: 'Financial Modeling & Risk Analysis',
    desc: 'High-frequency data processing for real-time market sentiment analysis.',
    result: 'Provides institutional-grade risk assessment for private investors.'
  }
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 p-6 font-sans selection:bg-indigo-500/30">
      
      {/* HEADER SECTION */}
      <header className="max-w-4xl mx-auto pt-10 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
          
          {/* HEADSHOT & NAME */}
          <div className="flex items-center gap-6">
             <img 
               src="/malikHeadshot.jpg" 
               alt="Malik St. Hilaire" 
               className="w-24 h-24 rounded-full border-2 border-slate-700 shadow-xl object-cover"
             />
             <div>
                <h4 className="text-xs font-mono text-slate-500 mb-2 tracking-widest">M.S.H / 26 [Hub]</h4>
                <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">Malik St. Hilaire</h1>
                <h2 className="text-lg text-slate-400 font-medium">Strategic Business Director | AI Developer</h2>
             </div>
          </div>

          <div className="text-left md:text-right pt-2">
            <div className="text-xs font-mono text-emerald-400 mb-1">● SYSTEM ONLINE</div>
            <div className="text-xs text-slate-600">v2.4.0 [Stable]</div>
          </div>
        </div>

        {/* FULL GEMINI BIO */}
        <div className="mb-12">
          <p className="text-slate-300 leading-relaxed text-lg max-w-3xl">
            <span className="text-indigo-400 font-semibold">THESIS:</span> As a Strategic Business Director and Google Cloud Innovator, I specialize in the intersection of enterprise operations and emerging technology. With over a decade of experience leading large-scale strategic initiatives, I leverage a Stanford-certified background in Machine Learning to drive digital transformation and operational efficiency. 
          </p>
          <p className="text-slate-300 leading-relaxed text-lg max-w-3xl mt-4">
            As a <span className="text-white font-semibold">Developer</span>, I focus on deploying agentic AI workflows and data-driven narratives that enhance brand equity and business growth. I am dedicated to helping forward-thinking organizations navigate the complexities of AI integration, ensuring technical solutions align with high-level business objectives and market scalability.
          </p>
        </div>

        {/* SEO KEYWORD BAR */}
        <div className="w-full h-px bg-slate-800 mb-4"></div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-12">
          <span className="text-indigo-400">Agentic AI Architecture</span>
          <span>Google Cloud Vertex AI</span>
          <span>Predictive Modeling</span>
          <span>Machine Learning Engineering</span>
          <span>Enterprise Digital Transformation</span>
          <span>NLP</span>
          <span>Python Dev</span>
          <span>Vector Databases</span>
        </div>

        {/* MARKET VERTICALS HEADER */}
        <div className="mb-8">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-2">Strategic Portals</h3>
            <h2 className="text-3xl font-bold text-white mb-4">Market Verticals</h2>
            <p className="text-slate-400 max-w-2xl">
              A collection of industry-specific AI environments built to solve high-level operational friction through live, scalable business ecosystems.
            </p>
        </div>
      </header>

      {/* PROJECT GRID */}
      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-20">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={project.id}
            onClick={() => setSelected(project)}
            className={`cursor-pointer group relative overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-600 p-6 h-64 flex flex-col justify-between rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10`}
          >
            <div className="flex justify-between items-start">
               {/* LOGOS */}
               <img src={project.logo} alt={project.title} className="w-12 h-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
               <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">{project.title}</h3>
              <p className="text-xs font-mono text-slate-500 uppercase">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </main>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto pt-10 border-t border-slate-800 text-center text-slate-600 text-xs font-mono pb-10">
        <p>DEPLOY STRATEGY // MALIKSAINTMARKETING@GMAIL.COM</p>
      </footer>

      {/* MODAL / PORTAL */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              layoutId={selected.id}
              className={`w-full max-w-2xl bg-slate-950 border ${selected.theme.split(' ')[0]} rounded-2xl overflow-hidden shadow-2xl relative`}
            >
              {/* MODAL HEADER */}
              <div className="p-8 pb-0 flex justify-between items-start">
                 <div className="flex gap-4 items-center">
                    <img src={selected.logo} alt={selected.title} className="w-16 h-16 object-contain" />
                    <div>
                        <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                        <p className="text-sm font-mono text-slate-400 uppercase tracking-widest">{selected.category}</p>
                    </div>
                 </div>
                 <button onClick={() => setSelected(null)} className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition-colors">
                   <X className="w-6 h-6 text-white" />
                 </button>
              </div>

              {/* STRATEGIC BRIEF */}
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

                {/* LAUNCH BUTTON - LIT UP & GLOWING */}
                <a 
                  href={selected.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-full py-4 mt-4 font-bold text-slate-900 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${selected.bg} shadow-lg ${selected.glow}`}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  LAUNCH LIVE PLATFORM
                </a>
              </div>
            </motion.div>
            
            <div className="absolute inset-0 -z-10" onClick={() => setSelected(null)}></div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}