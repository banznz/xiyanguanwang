import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, Activity, ListTodo, CheckCircle, AlertCircle, Loader2, Cpu, Zap, Share2, Maximize2, RotateCw, AlertTriangle, Play } from 'lucide-react';
import { SectionWrapper } from './ui/SectionWrapper';

// Mock Data
const TASKS = [
  {
    id: 'complete',
    title: "漫剧名称:东海龙宫是我家",
    // sub: "Training LoRA (v2.1)",
    status: "complete",
    progress: 100
  },
  {
    id: 'processing',
    title: "漫剧名称:我是龙王三太子",
    // sub: "Cyberpunk City - Night",
    status: "processing",
    progress: 45
  },
  {
    id: 'failed',
    title: "漫剧名称:被逐出龙宫了",
    // sub: "Final_Cut_01.mp4",
    status: "failed",
    progress: 0
  }
];

const ProcessDashboard = () => {
  const [activeId, setActiveId] = useState('complete');
  
  return (
    <div className="w-full bg-[#0F0F11] border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-sans select-none flex flex-col h-[600px] md:h-[500px]">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-[#141416]">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          {/* <span className="text-xs font-bold text-white/50 tracking-wider">TASK MONITOR</span> */}
        </div>
        <div className="flex gap-4 text-[10px] font-mono font-medium text-white/40">
           {/* <div className="flex items-center gap-1.5"><Cpu size={12} /> CPU: 12%</div>
           <div className="flex items-center gap-1.5"><Zap size={12} /> GPU: 84%</div> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Sidebar (List) */}
        <div className="w-full md:w-[300px] bg-[#0F0F11] border-b md:border-b-0 md:border-r border-white/5 flex flex-row md:flex-col p-4 gap-2 flex-shrink-0 overflow-x-auto md:overflow-visible [&::-webkit-scrollbar]:hidden">
           <div className="text-xs font-bold text-white/40 mb-2 uppercase tracking-wider px-2 hidden md:block">我的作品 (3)</div>
           
           {TASKS.map((task) => {
             const isActive = activeId === task.id;
             return (
               <div 
                 key={task.id}
                 onClick={() => setActiveId(task.id)}
                 className={`relative p-4 rounded-xl cursor-pointer transition-all duration-200 border flex-shrink-0 min-w-[220px] md:min-w-0 ${isActive ? 'bg-[#1A1A1D] border-blue-500/30' : 'bg-transparent border-transparent hover:bg-white/5'}`}
               >
                 {isActive && (
                   <>
                     <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-500 rounded-r-full hidden md:block" />
                     <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 rounded-t-full md:hidden" />
                   </>
                 )}
                 
                 <div className="flex justify-between items-start mb-2">
                    {task.status === 'complete' && <CheckCircle size={16} className="text-emerald-500" />}
                    {task.status === 'processing' && <Loader2 size={16} className="text-blue-500 animate-spin" />}
                    {task.status === 'failed' && <AlertTriangle size={16} className="text-red-500" />}
                    
                    <span className="text-[10px] font-mono text-white/30">
                      {task.status === 'complete' ? '生成完成' : task.status === 'processing' ? '生成中' : '生成失败'}
                    </span>
                 </div>
                 
                 <div className="text-sm font-bold text-white mb-1">{task.title}</div>
                 <div className="text-xs text-white/40">{task.sub}</div>
               </div>
             )
           })}
        </div>

        {/* Content Area */}
        <div className="flex-1 relative bg-[#0A0A0C] overflow-hidden">
          <AnimatePresence mode="wait">
            {activeId === 'complete' && (
              <motion.div 
                key="complete"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full group">
                  <img 
                    src="https://images.unsplash.com/photo-1722926323079-0836a07d2340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHlvdW5nJTIwcHJvZmVzc2lvbmFsJTIwbWFuJTIwd2l0aCUyMGdsYXNzZXMlMjBzdHVkaW8lMjBsaWdodGluZ3xlbnwxfHx8fDE3NjU0NDk1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                    alt="Result"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-black/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-4">
                     {/* Badge */}
                     <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-emerald-900/20">
                        <CheckCircle size={12}  className="text-emerald-500" />
                        <span>生成完成</span>
                     </div>
                     
                     {/* Title & Metadata */}
                     <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1.5 drop-shadow-md">东海龙宫是我家</h3>
                        <p className="text-white/60 text-xs font-mono flex items-center gap-2">
                           <span>2025-12-12 10:42:56</span>
                           <span className="w-1 h-1 rounded-full bg-white/30" />
                           <span>成片已生成完成</span>
                        </p>
                     </div>

                     {/* Action Button */}
                     <button className="bg-white text-black hover:bg-white/90 px-6 py-2.5 rounded-lg font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10">
                        <Play size={14}  />
                        立即查看
                     </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeId === 'processing' && (
              <motion.div 
                key="processing"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
              >
                 {/* Background Image with Overlay */}
                 <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1607944023881-6074f5a14a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwbmlnaHQlMjBibHVycmVkJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY1NDQ5NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                      className="w-full h-full object-cover opacity-40 blur-sm scale-110" 
                      alt="Rendering Background"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    
                    {/* Scanning Effect */}
                    <motion.div
                      initial={{ top: "-10%" }}
                      animate={{ top: "110%" }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-[2px] bg-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.8)] z-10"
                    />
                    <div 
                      className="absolute inset-0 z-20 pointer-events-none opacity-20"
                      style={{
                        background: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))',
                        backgroundSize: '100% 2px, 3px 100%'
                      }}
                    />
                 </div>
                 
                 {/* Progress Circle */}
                 <div className="relative z-30 mb-12">
                    <div className="relative w-40 h-40 flex items-center justify-center">
                       {/* Outer Ring */}
                       <div className="absolute inset-0 border border-white/10 rounded-full" />
                       
                       {/* Spinning Ring */}
                       <svg className="absolute inset-0 w-full h-full animate-spin duration-[3s]">
                          <defs>
                             <linearGradient id="gradient-rendering" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                                <stop offset="100%" stopColor="#3B82F6" />
                             </linearGradient>
                          </defs>
                          <circle cx="80" cy="80" r="78" stroke="url(#gradient-rendering)" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="200" strokeDashoffset="0" />
                       </svg>
                       
                       {/* Inner Pulse */}
                       <div className="absolute w-32 h-32 bg-blue-500/10 rounded-full animate-pulse blur-xl" />
                       
                       {/* Text */}
                       <div className="flex flex-col items-center">
                          <span className="text-4xl font-bold text-white font-mono tracking-tighter">45%</span>
                          <span className="text-[10px] text-blue-400 font-mono mt-1 animate-pulse">分镜图生成中</span>
                       </div>
                    </div>
                 </div>


              </motion.div>
            )}

            {activeId === 'failed' && (
              <motion.div 
                 key="failed"
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                 className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#150505]"
              >
                 {/* Diagonal Stripes */}
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ff0000 0, #ff0000 10px, transparent 10px, transparent 20px)' }} />
                 
                 <div className="relative z-10 w-full max-w-[320px] mx-4 bg-[#1F0A0A] border border-red-500/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl shadow-red-900/20">
                    <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                       <AlertTriangle size={32} className="text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-red-500 mb-2 tracking-wide">分镜图生成失败</h3>
                    {/* <p className="text-xs font-mono text-white/40 mb-6 bg-black/20 px-3 py-1.5 rounded">
                       Error Code: 0x8922_MEM_OVERFLOW
                    </p> */}
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-lg font-bold transition-all w-full justify-center">
                       <RotateCw size={16} />
                       重新生成分镜图
                    </button>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const SystemResource = () => {
  return (
    <SectionWrapper id="system" className="bg-[#0a0a0a] py-24">
       {/* Background Gradients */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]" />
       </div>

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           
           {/* Left Content (5 cols) */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="lg:col-span-5 order-1"
           >
              {/* Tag */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20" style={{ marginBottom: '12px' }}>
                <span className="text-blue-400 text-sm font-semibold tracking-wide">全流程可视掌控</span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-['MiSans',sans-serif]" style={{ marginBottom: '12px' }}>
                创作进度
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white"> 一目了然</span>
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed font-['PingFang_SC',sans-serif]">
                告别AI生成的“黑盒”等待。从灵感输入到最终成片，关键节点实时追踪，异常状态智能定位，让每一次创作落地都稳定可控。
              </p>

              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex gap-5 group">
                   <div className="w-12 h-12 rounded-2xl bg-[#1a1f2e] border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/50 transition-colors shadow-lg shadow-blue-900/10">
                      <LayoutDashboard className="w-6 h-6 text-blue-400" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-lg mb-2 font-['MiSans',sans-serif]">节点级状态追踪</h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-['PingFang_SC',sans-serif]">
                         实时监控各环节状态，精准掌握生成进度。
                      </p>
                   </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-5 group">
                   <div className="w-12 h-12 rounded-2xl bg-[#1a1f2e] border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-orange-500/50 transition-colors shadow-lg shadow-orange-900/10">
                      <Activity className="w-6 h-6 text-orange-400" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-lg mb-2 font-['MiSans',sans-serif]">异常智能处理</h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-['PingFang_SC',sans-serif]">
                         自动标记断点，无需从头开始，大幅节省时间成本。
                      </p>
                   </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-5 group">
                   <div className="w-12 h-12 rounded-2xl bg-[#1a1f2e] border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/50 transition-colors shadow-lg shadow-purple-900/10">
                      <ListTodo className="w-6 h-6 text-purple-400" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold text-lg mb-2 font-['MiSans',sans-serif]">多任务并行生成</h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-['PingFang_SC',sans-serif]">
                         多作品同时生成。列表式管理界面，随时查看和管理所有作品。
                      </p>
                   </div>
                </div>
              </div>
           </motion.div>

           {/* Right Visual (7 cols) */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
             whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             style={{ perspective: "1000px" }}
             className="lg:col-span-7 order-2 relative"
           >
              {/* CSS Dashboard Mockup Container */}
              <div className="relative transform hover:scale-[1.01] transition-transform duration-700">
                 {/* Inner Glow */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-[24px] blur-xl opacity-50 pointer-events-none" />
                 
                 <ProcessDashboard />

                 {/* Decorative Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-10 pointer-events-none rounded-[24px]" />
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
              <div className="absolute -z-10 -bottom-20 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]" />
           </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
};
