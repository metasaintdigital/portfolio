import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  ArrowUpRight, 
  Cpu, 
  Globe, 
  BarChart3, 
  Layers,
  ChevronLeft,
  ChevronRight,
  Zap,
  TrendingUp,
  TrendingDown,
  FileText,
  MessageSquare,
  ShieldAlert,
  Users,
  LayoutDashboard,
  Share2,
  BellRing,
  CheckCircle2,
  Activity,
  Target,
  ShieldCheck,
  MapPin,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  GraduationCap,
  BrainCircuit,
  Award,
  Wallet,
  AlertCircle,
  Search,
  Plus,
  Filter,
  Download,
  ArrowLeft,
  Calendar,
  Home,
  Heart,
  Package,
  Truck,
  History,
  Terminal,
  Code2,
  PlusCircle,
  X,
  ArrowRight,
  ExternalLink,
  Laptop,
  Workflow,
  Menu
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart as RePie,
  Pie
} from 'recharts';

// --- DATA CONSTANTS ---

const PORTFOLIO_DATA = {
  profile: {
    name: "Malik St. Hilaire",
    title: "Strategic Business Director | Google Cloud Innovator | AI Developer",
    bio: "As a Strategic Business Director and Google Cloud Innovator, I specialize in the intersection of enterprise operations and emerging technology. With over a decade of experience leading large-scale strategic initiatives, I leverage a Stanford-certified background in Machine Learning to drive digital transformation and operational efficiency. As a Developer, I focus on deploying agentic AI workflows and data-driven narratives that enhance brand equity and business growth. I am dedicated to helping forward-thinking organizations navigate the complexities of AI integration, ensuring technical solutions align with high-level business objectives and market scalability.",
    headshotUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWWDyH_yUqC_lqQOqQOQOQOQOQOQOQOQOQOQOQ=s0-c-k-no-mo", // Placeholder - replace with actual URL if needed or keep using the imported one if available
    technicalSkills: [
      "Agentic AI Architecture",
      "Google Cloud Vertex AI",
      "Predictive Data Modeling",
      "Machine Learning Engineering",
      "Enterprise Digital Transformation",
      "Natural Language Processing (NLP)",
      "Python AI Development",
      "LLM Prompt Engineering",
      "Vector Database Scaling",
      "Data-Driven Brand Equity"
    ]
  },
  caseStudies: [
    {
      id: 5,
      title: "Empowered Lifestyle Network",
      industry: "Tech / Lead Gen",
      solution: "High-Velocity Lead Generation & Onboarding Architecture",
      problem: "Optimizing the path from lead engagement to network onboarding.",
      color: "#d4af37", // Metallic Gold
      category: "Tech / Leads",
      identity: { 
        logo: "ELN", 
        font: "font-serif font-black",
        logoUrl: "https://drive.google.com/thumbnail?id=1jANtN6tZ_3ieBoNCDWUMni1IBd91J3Es&sz=w1000"
      },
      liveUrl: "https://eln-onboarding.netlify.app/",
      brief: {
        aiIntegration: "Agentic Workflow Orchestration & Lead Scoring",
        howUsed: "The onboarding tool functions as the entry point for an agentic AI system that scores leads in real-time. Natural Language Processing (NLP) categorizes needs and triggers personalized follow-up sequences based on 'success probability'.",
        result: "It transforms a standard sign-up process into an intelligent filter that identifies high-value partners and automates the initial stages of the business relationship."
      }
    },
    {
      id: 1,
      title: "DHB Properties",
      industry: "Real Estate",
      solution: "Predictive Asset Management & High-Velocity Real Estate Solutions",
      problem: "Scaling property acquisition through data-driven turnover prediction.",
      color: "#4f46e5", // Neon Navy
      glowColor: "#00ffff", // Neon Cyan radial glow
      category: "PropTech AI",
      identity: { 
        logo: "DHB", 
        font: "font-sans font-black",
        logoUrl: "https://drive.google.com/thumbnail?id=1ZJdV2QyIrtUHwWGj4g21VSRW2fS8zufC&sz=w1000"
      },
      liveUrl: "https://dhbproperties.net/",
      brief: {
        aiIntegration: "Predictive Behavioral Analytics & Dynamic Pricing",
        howUsed: "We utilize Machine Learning algorithms to analyze hyper-local market trends and guest booking patterns. By processing historical demand data, the system predicts 'intent-to-stay' velocity, allowing for automated price optimization.",
        result: "This ensures that luxury short-term rentals maintain maximum occupancy at the highest market-clearing price, effectively removing the guesswork from asset management."
      }
    },
    {
      id: 3,
      title: "Altered Influence",
      industry: "Fashion & Retail",
      solution: "Strategic Fashion Branding & Trend Velocity Analytics",
      problem: "Harnessing influence through predictive trend engines.",
      color: "#cbd5e1", // Chrome Silver
      category: "Fashion Tech",
      identity: { 
        logo: "AI", 
        font: "font-serif italic font-bold",
        logoUrl: "https://drive.google.com/thumbnail?id=1sG5qsZky4eZMQCbumKZ77hRzynUFARWX&sz=w1000"
      },
      liveUrl: "https://alteredinfluence.com/",
      brief: {
        aiIntegration: "Computer Vision & Trend Forecasting",
        howUsed: "This retail platform leverages Predictive Trend Engines to align inventory with social sentiment. By analyzing visual data across digital subcultures, the AI forecasts which designs—like the 'Monét' or 'Lemonade' collections—will resonate before the trend peaks.",
        result: "This reduces overproduction and ensures that every drop is backed by data-driven 'cultural relevance,' making the retail cycle more efficient and impactful."
      }
    },
    {
      id: 4,
      title: "Lumina Path",
      industry: "Children's Education",
      solution: "Adaptive Learning & Outcome Orchestration",
      problem: "Tracking engagement to dynamically adjust lesson plans.",
      color: "#FFF200", // Neon Yellow
      category: "EdTech AI",
      identity: { 
        logo: "L", 
        font: "font-sans font-black"
      },
      liveUrl: "https://toddler-flashcards-3da4c.web.app/",
      brief: {
        aiIntegration: "Adaptive Learning & Outcome Orchestration.",
        howUsed: "This agentic system tracks real-time student engagement and performance to dynamically adjust lesson plans. Using Predictive Analytics, it identifies learning gaps in shapes and colors before they become barriers, ensuring personalized curriculum pacing.",
        result: "It transforms standard rote memorization into a data-driven \"Learning Roadmap,\" providing educators and parents with automated progress reports and mastery predictions."
      }
    },
    {
      id: 2,
      title: "Aequitas Engine",
      industry: "Finance & Investing",
      solution: "Regulatory Arbitrage & Risk Engine",
      problem: "Real-time scanning of global markets for regulatory risks.",
      color: "#ccccff",
      category: "FinTech AI",
      identity: { logo: "Æ", font: "font-mono" },
      demoType: "risk-graph"
    }
  ]
};

const AEQUITAS_CLIENTS = [
  { id: '1', name: 'Global Macro Alpha Fund', email: 'macro.ops@alpha.com', status: 'Risk Elevated', avatar: 'GM' },
  { id: '2', name: 'Sterling Institutional', email: 'treasury@sterling.org', status: 'Stable', avatar: 'SI' }
];

// --- UI HELPER COMPONENTS ---

const AequitasStatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-[#0f0f12] p-6 rounded-2xl border border-white/5 flex items-start justify-between text-left">
    <div>
      <p className="text-neutral-500 text-[10px] font-black mb-1 uppercase tracking-widest">{title}</p>
      <h3 className="text-2xl font-bold text-white font-mono">{value}</h3>
    </div>
    <div className="p-3 rounded-xl bg-white/[0.03]" style={{ color }}>
      <Icon className="w-5 h-5" />
    </div>
  </div>
);

const NavControl = ({ onNavigate }) => (
  <nav className="fixed top-0 w-full z-[150] px-6 md:px-10 py-6 md:py-10 flex justify-between items-center mix-blend-difference">
    <div className="text-white font-black tracking-tighter text-xl md:text-2xl uppercase cursor-pointer" onClick={() => onNavigate(null)}>
      M.S.H <span className="text-[#00f0ff]">/</span> 26
    </div>
    <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.5em] font-black text-white/40">
      <button onClick={() => onNavigate(null)} className="hover:text-white transition-all">Hub</button>
      <a href="#about" className="hover:text-white transition-all">Thesis</a>
      <a href="#work" className="hover:text-white transition-all">Verticals</a>
    </div>
    <div className="md:hidden">
      <button onClick={() => onNavigate(null)} className="text-white"><Menu size={24} /></button>
    </div>
  </nav>
);

// --- PORTAL COMPONENTS ---

const StrategicPortal = ({ project, onBack }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-[#0a0a0a] overflow-y-auto text-white font-sans scroll-smooth">
    {/* Responsive Top Nav */}
    <nav className="flex items-center justify-between px-6 md:px-10 py-6 md:py-8 border-b border-white/5 sticky top-0 bg-black/95 backdrop-blur-xl z-[210]">
      <div className="flex items-center gap-4 text-left">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 truncate max-w-[150px] sm:max-w-none">Gateway // {project.industry}</span>
      </div>
      <button onClick={onBack} className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95">
        <Home size={12} className="md:size-[14px]" /> <span className="hidden sm:inline">Portfolio Hub</span><span className="sm:hidden">Hub</span>
      </button>
    </nav>
    
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24 text-center space-y-16 md:space-y-24">
      {/* Brand Identity Layer */}
      <div className="space-y-8">
        <div className="relative inline-flex items-center justify-center">
          {project.title === 'DHB Properties' && (
            <div className="absolute inset-0 bg-[radial-gradient(circle,_#00ffff22_0%,_transparent_70%)] scale-[2.5] pointer-events-none" />
          )}
          <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
            {project.identity.logoUrl ? (
              <img src={project.identity.logoUrl} alt={project.title} className="w-full h-full object-contain" />
            ) : (
              <span className={`text-6xl md:text-8xl font-black ${project.identity.font}`} style={{ color: project.color }}>{project.identity.logo}</span>
            )}
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase ${project.identity.font}`} style={{ color: project.title === 'Empowered Lifestyle Network' ? '#d4af37' : 'white' }}>
            {project.title}
          </h1>
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-neutral-500 font-bold max-w-sm mx-auto">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Strategic Brief Layer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 text-left border-t border-white/5 pt-16 md:pt-20">
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 text-neutral-400">
            <Zap size={16} style={{ color: project.color }} />
            <span className="text-[10px] font-black uppercase tracking-widest">AI Integration</span>
          </div>
          <p className="text-lg md:text-xl font-bold leading-tight text-white pl-6" style={{ borderLeft: `2px solid ${project.color}` }}>
            {project.brief.aiIntegration}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-neutral-500">
            <Workflow size={14} />
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Deployment</span>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed font-light">
            {project.brief.howUsed}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#00f0ff]">
            <TrendingUp size={14} />
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Result Architecture</span>
          </div>
          <p className="text-sm text-neutral-100 leading-relaxed font-medium">
            {project.brief.result}
          </p>
        </div>
      </div>

      {/* Primary CTA Layer */}
      <div className="pt-10 pb-12">
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={project.liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-10 md:px-16 py-5 md:py-6 rounded-2xl bg-white text-black font-black uppercase text-xs md:text-sm tracking-[0.2em] shadow-2xl transition-all group"
          style={{ 
            boxShadow: `0 20px 40px -10px ${project.color}30`,
            border: `1px solid ${project.color}40`
          }}
        >
          Launch Live Platform <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const AequitasPortal = ({ onBack, project }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#050507] overflow-y-auto text-white font-sans selection:bg-[#ccccff] selection:text-black">
    <div className="flex flex-col md:flex-row h-full min-h-screen">
      <aside className="w-full md:w-20 lg:w-64 border-b md:border-b-0 md:border-r border-white/5 flex md:flex-col p-6 md:p-8 space-y-0 md:space-y-12 items-center md:items-start justify-between md:justify-start">
        <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#ccccff] rounded-xl flex items-center justify-center text-black shadow-lg shadow-[#ccccff]/20"><BarChart3 size={20} /></div><span className="font-black uppercase tracking-tight text-sm hidden lg:block text-left text-white">Aequitas Engine</span></div>
        <nav className="hidden md:block flex-1 space-y-4 w-full">
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-white/5 text-[#ccccff]"><LayoutDashboard size={18}/><span className="hidden lg:block text-[10px] font-black uppercase tracking-widest text-left">Surveillance</span></button>
        </nav>
        <button onClick={onBack} className="flex items-center gap-4 px-4 py-3 text-neutral-600 hover:text-rose-400 transition-colors"><ArrowLeft size={18}/><span className="hidden lg:block text-[10px] font-black uppercase tracking-widest text-left">Exit Terminal</span></button>
      </aside>
      <main className="flex-1 p-6 md:p-12 text-left">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16 max-w-7xl mx-auto sticky top-0 bg-[#050507]/95 backdrop-blur-md py-4 z-50">
          <div><h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">Aequitas Engine</h1><p className="text-[9px] md:text-[10px] text-neutral-600 uppercase tracking-widest font-black mt-1 tracking-[0.4em]">Institutional Risk surveillance v4.2</p></div>
          <button onClick={onBack} className="flex items-center gap-2 px-5 py-2.5 bg-[#ccccff] text-black rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-[#ccccff]/20"><Home size={14} /><span className="hidden sm:inline">Portfolio Home</span><span className="sm:hidden">Home</span></button>
        </header>
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
             <AequitasStatCard title="Active Funds" value={AEQUITAS_CLIENTS.length} icon={Users} color={project.color} />
             <AequitasStatCard title="VaR Assets" value="$1.24B" icon={Wallet} color={project.color} />
             <AequitasStatCard title="Triggers" value="3" icon={AlertCircle} color="#f43f5e" />
             <AequitasStatCard title="Accuracy" value="99.4%" icon={TrendingUp} color={project.color} />
          </div>
          <div className="bg-[#0f0f12] rounded-3xl border border-white/5 p-6 md:p-8 space-y-8">
             <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Portfolio Surveillance Logs</h2>
             <div className="space-y-4">
                {AEQUITAS_CLIENTS.map(fund => (
                  <div key={fund.id} className="p-4 md:p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group hover:bg-white/[0.04] transition-all cursor-pointer">
                     <div className="flex items-center gap-4 text-left">
                      <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center font-black text-[#ccccff] text-xs border border-white/10">{fund.avatar}</div>
                      <div><p className="text-xs font-black text-white uppercase tracking-tight">{fund.name}</p><p className="text-[10px] text-neutral-500 font-mono italic">{fund.email}</p></div>
                     </div>
                     <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${fund.status === 'Risk Elevated' ? 'bg-rose-500/10 text-rose-400' : 'bg-emerald-500/10 text-emerald-400'}`}>{fund.status}</span>
                    </div>
                  ))}
             </div>
          </div>
        </div>
      </main>
    </div>
  </motion.div>
);

// --- HOMEPAGE COMPONENTS ---

const HomepageCard = ({ study, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/5 bg-neutral-900/10 backdrop-blur-3xl transition-all duration-700 flex flex-col aspect-square items-center justify-center text-center p-6 sm:p-10"
      style={{ 
        boxShadow: isHovered ? `0 0 100px ${study.color}15` : 'none', 
        borderColor: isHovered ? `${study.color}30` : 'rgba(255,255,255,0.05)' 
      }}
    >
      <div 
        className="flex items-center justify-center w-full h-[40%] sm:h-[45%] transition-all duration-1000 relative"
        style={{ transform: isHovered ? 'scale(1.1) translateY(-5px)' : 'scale(1)' }}
      >
        <div className="absolute inset-0 blur-[40px] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{ backgroundColor: study.color }} />
        
        {study.identity.logoUrl ? (
          <img 
            src={study.identity.logoUrl} 
            alt={study.title} 
            className={`w-full h-full object-contain relative z-10 transition-all duration-700 ${isHovered ? 'opacity-100 grayscale-0' : 'opacity-20 grayscale'}`} 
          />
        ) : (
          <div 
            className={`text-5xl sm:text-7xl lg:text-7xl font-black relative z-10 ${study.identity.font}`}
            style={{ color: isHovered ? study.color : 'rgba(255,255,255,0.05)' }}
          >
            {study.identity.logo}
          </div>
        )}
      </div>

      <div className="space-y-1 mt-6">
        <h3 className={`text-lg sm:text-xl lg:text-2xl font-black tracking-tighter uppercase leading-none transition-colors duration-500`} style={{ color: isHovered && study.title === 'Empowered Lifestyle Network' ? '#d4af37' : 'white' }}>
          {study.title.split(' ')[0]}
        </h3>
        <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-neutral-600 group-hover:text-neutral-400 transition-colors">
          {study.industry}
        </p>
      </div>

      <div className="mt-6 sm:mt-8 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/5 group-hover:border-white/20 transition-all">
        <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ color: study.color }} />
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-1000 ease-in-out" style={{ backgroundColor: study.color }} />
    </motion.div>
  );
};

const SkillSection = ({ skills }) => (
  <section className="py-16 md:py-24 border-y border-white/5 bg-neutral-950/20 relative overflow-hidden text-left">
    <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 md:gap-16 text-left">
        <div className="max-w-md">
          <span className="text-[10px] uppercase tracking-[0.5em] md:tracking-[0.7em] text-[#00f0ff] font-black mb-4 md:mb-6 block text-left">Engine Core // Strategic Advantage</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-[0.9]">Technical <br/>SEO Architecture</h2>
          <p className="text-neutral-500 text-sm mt-4 md:mt-6 leading-relaxed italic text-left">Propelling AI-first brand equity through advanced enterprise orchestration and digital scalability.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-4 md:gap-y-6 flex-1">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-4 md:gap-5 group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] group-hover:scale-[2] group-hover:shadow-[0_0_15px_#00f0ff] transition-all duration-500" />
              <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors cursor-default text-left">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const StandardDetail = ({ project, onBack }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#0a0a0a] overflow-y-auto px-6 md:px-12 lg:px-24 scroll-smooth text-white">
    <div className="max-w-7xl mx-auto text-left py-12 md:py-24">
      <button onClick={onBack} className="group flex items-center gap-3 text-neutral-600 hover:text-white mb-20 uppercase text-[9px] font-black tracking-[0.4em] transition-colors"><ChevronLeft size={16} /> Hub</button>
      <section className="grid lg:grid-cols-2 gap-16 md:gap-24 mb-40 items-end text-left">
        <div>
          <span className="text-[10px] uppercase tracking-[0.5em] font-black block mb-6 text-[#00f0ff]">Architecture // {project.industry}</span>
          <h1 className={`text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 ${project.identity.font}`}>{project.title}</h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-xl leading-snug">{project.solution}.</p>
        </div>
        <div className="w-full aspect-square max-w-sm rounded-[3rem] border border-white/5 bg-neutral-900/10 flex items-center justify-center ml-auto">
          <span className={`text-[12rem] font-black ${project.identity.font}`} style={{ color: project.color }}>{project.identity.logo}</span>
        </div>
      </section>
      <div className="py-24 md:py-32 border-t border-white/5 text-center"><button onClick={onBack} className="px-12 md:px-16 py-5 md:py-6 rounded-full bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[#00f0ff] transition-all transform hover:scale-105 active:scale-95">Close Surveillance</button></div>
    </div>
  </motion.div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [selectedProject]);

  return (
    <div className="bg-[#0a0a0a] text-neutral-100 min-h-screen font-sans selection:bg-[#00f0ff] selection:text-black scroll-smooth">
      
      {/* GLOBAL NAV ONLY SHOWS WHEN NO PROJECT SELECTED TO PREVENT OVERLAP */}
      {!selectedProject && <NavControl onNavigate={setSelectedProject} />}
      
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* HERO */}
            <section className="relative pt-32 md:pt-48 pb-12 md:pb-20 px-6 md:px-10 lg:px-24 min-h-screen flex flex-col justify-center overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] md:text-[25vw] font-black text-white/[0.01] select-none pointer-events-none whitespace-nowrap z-0 italic">AI OPS</div>
              <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10 text-left">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
                  <div className="flex items-center gap-4 mb-6 md:mb-10 text-left"><span className="h-[1px] w-12 md:w-16 bg-[#00f0ff]" /><span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#00f0ff] font-black">Google Cloud Innovator</span></div>
                  <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black mb-8 md:mb-12 leading-[0.85] md:leading-[0.8] tracking-tighter uppercase text-left">Malik <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 italic">St. Hilaire</span></h1>
                  <p className="text-xl md:text-2xl text-neutral-500 mb-10 md:mb-16 max-w-lg leading-relaxed font-light text-left">Strategic Business Director <span className="text-white/20 mx-2 md:mx-3">|</span> AI Developer</p>
                  <a 
                    href="https://scheduler.zoom.us/empowered-lifestyle-network/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block relative group overflow-hidden px-10 md:px-12 py-5 md:py-6 border border-[#00f0ff]/30 rounded-full transition-all hover:border-[#00f0ff] font-black uppercase text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] text-[#00f0ff] active:scale-95"
                  >
                    <span className="relative z-10">Deploy Strategy</span>
                    <div className="absolute inset-0 bg-[#00f0ff] translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
                  </a>
                </motion.div>
                <div className="relative aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl group">
                    <img src={PORTFOLIO_DATA.profile.headshotUrl} onLoad={() => setImageLoaded(true)} className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" /><div className="absolute -inset-20 bg-[#00f0ff]/10 blur-[120px] opacity-40 pointer-events-none" />
                </div>
              </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="py-32 md:py-48 px-6 md:px-10 lg:px-24 border-t border-white/5 bg-neutral-950/20 text-left">
              <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
                <div className="flex items-center gap-6 text-left"><span className="text-[10px] uppercase tracking-[0.5em] md:tracking-[0.7em] text-neutral-600 font-black">Thesis</span><div className="h-[1px] flex-grow bg-white/5" /></div>
                <div className="text-2xl sm:text-3xl md:text-5xl font-light leading-[1.3] md:leading-[1.2] text-neutral-300 tracking-tight text-left">
                  {PORTFOLIO_DATA.profile.bio.split('Developer').map((part, i, arr) => (
                    <React.Fragment key={i}>{part}{i < arr.length - 1 && <span className="text-[#00f0ff] font-black italic px-1 md:px-2">Developer</span>}</React.Fragment>
                  ))}
                </div>
              </div>
            </section>

            {/* SEO TECHNICAL SKILLS SECTION */}
            <SkillSection skills={PORTFOLIO_DATA.profile.technicalSkills} />

            {/* WORK GRID */}
            <section id="work" className="py-32 md:py-56 px-6 md:px-10 lg:px-24 text-left">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-12 text-left">
                  <div className="space-y-6">
                    <span className="text-[10px] uppercase tracking-[0.5em] md:tracking-[0.6em] text-[#00f0ff] font-black block">Strategic Portals</span>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none">Market <br/><span className="text-white/10">Verticals</span></h2>
                  </div>
                  <p className="text-neutral-500 max-w-sm text-lg md:text-xl font-light leading-relaxed text-left">
                    A collection of industry-specific AI environments built to solve high-level operational friction through live, scalable business ecosystems.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
                  {PORTFOLIO_DATA.caseStudies.map((study) => (
                    <HomepageCard key={study.id} study={study} onClick={() => setSelectedProject(study)} />
                  ))}
                </div>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="py-24 md:py-40 px-6 md:px-10 lg:px-24 border-t border-white/5 bg-black text-left">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 md:gap-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight text-center lg:text-left text-white">Scalability <br /><span className="text-[#00f0ff] italic">through Agentic AI.</span></h2>
                <div className="text-center lg:text-right">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 font-black mb-4">Direct Channel</p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase transition-colors hover:text-[#00f0ff] cursor-pointer select-all text-white break-all">Maliksaintmarketing@gmail.com</p>
                    <div className="mt-8 flex gap-6 justify-center lg:justify-end">
                       <a href="https://www.linkedin.com/in/maliksthilaire/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-neutral-600 hover:text-white transition-colors cursor-pointer" />
                       </a>
                       <a href="https://www.instagram.com/maliksaintcreates/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-6 h-6 text-neutral-600 hover:text-white transition-colors cursor-pointer" />
                       </a>
                    </div>
                </div>
              </div>
            </footer>
          </motion.div>
        ) : (
          selectedProject.title === 'Aequitas Engine' ? (
            <AequitasPortal key="aequitas" onBack={() => setSelectedProject(null)} project={selectedProject} />
          ) : (
            <StrategicPortal key="live" onBack={() => setSelectedProject(null)} project={selectedProject} />
          )
        )}
      </AnimatePresence>
    </div>
  );
}