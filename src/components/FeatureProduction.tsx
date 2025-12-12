import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useTransform } from 'motion/react';
import { SectionWrapper } from './ui/SectionWrapper';
import { Check, ArrowRight } from 'lucide-react';
import imgImageStoryboard from "figma:asset/54869a89d87901f5c9e4467191eef897f047443c.png";
import imgImageAdvancedControls from "figma:asset/94122485645dfd5634a1797996908d41941261fb.png";
import imgImageDynamicComic from "figma:asset/c1b8cae1f370ba26427c626362ef6df234a152b1.png";
import imgScriptAnalysis from "figma:asset/aedeec87d2094987f838d1fe0da34a921fc43f01.png";

// New Icons (PNGs from Figma)
import iconScript from "figma:asset/e8bbcb79f4b03af2e68462e219f96b493649c894.png";
import iconStoryboard from "figma:asset/1ed99343068f917ab7e7bf2968155144b6d146b0.png";
import iconComic from "figma:asset/a9dff6bca3d5d4e61a841369902cad9ce2c7922d.png";
import iconVideo from "figma:asset/714601134d326eafde5e95b12e00574ae1b6d968.png";

// Comic Interpretation Assets
import imgImage39 from "figma:asset/e3e15552ac224391646e9257a9733d79d1f8c725.png";
import imgImage40 from "figma:asset/b314270a42bbe0e214b63fabfb968192f05e4f9d.png";
import imgImage41 from "figma:asset/e362a04054685bd4c856079d8f7b8b60b2c8aba9.png";
import imgScriptBreakdownFull from "figma:asset/8d9b1919a7f4696cbcb303b7840cd14d215de502.png";
import imgComicInterpretationFull from "figma:asset/f445008ad0808f43fb8794c63f8aa7976be56953.png";
import dynamicComicVideo from '../assets/dongtaimanhua.mp4';

const features = [
  {
    id: 1,
    title: "剧本智能拆解",
    desc: "深度解析小说内嵌，自动拆解场景与对话，并精准还原原小说风格。",
    checks: [
      "自动拆解场景与对话",
      "精准还原原小说风格",
      "识别情感基调与氛围"
    ],
    image: imgScriptAnalysis,
    gradient: "from-pink-500/10 to-rose-500/10"
  },
  {
    id: 2,
    title: "动态漫画生成",
    desc: "支持生成全流程动态漫画，自带镜头运动和配音，适合长篇 IP 的快速动画化。",
    checks: [
      "全流程自动化生成",
      "自带镜头运动与配音",
      "适合长篇IP快速转化"
    ],
    image: imgImageDynamicComic,
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    id: 3,
    title: "图片漫画演绎",
    desc: "支持生成图片序列演绎视频，提供简洁高效的视觉叙事方式，适合快速内容预览。",
    checks: [
      "静态图片一键转视频",
      "高效视觉叙事体验",
      "快速内容预览与推广"
    ],
    image: imgImageAdvancedControls,
    gradient: "from-purple-500/10 to-violet-500/10"
  }
];

const VisualContainer = ({ children, title }: { children: React.ReactNode, title?: string }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full md:w-[696px] md:h-[484px] shrink-0 md:scale-100 origin-center bg-[#0f1012] overflow-hidden md:rounded-[28px] md:shadow-2xl">
            <div className="absolute inset-0 md:h-[483px] md:left-px md:top-px md:w-[695px]" data-name={`Image ${title ? `(${title})` : ''}`}>
                {children}
            </div>
            <div className="hidden md:block absolute bg-gradient-to-b from-[#0f1012] h-[483px] left-px opacity-20 to-[rgba(0,0,0,0)] top-px via-50% via-[rgba(0,0,0,0)] w-[695px]" data-name="Container" />
        </div>
    </div>
  );
};

const ScriptBreakdownVisual = () => {
  return (
    <VisualContainer title="剧本智能拆解">
      <img
        src={imgScriptBreakdownFull}
        alt="Script Breakdown"
        className="absolute max-w-none object-cover size-full"
      />
    </VisualContainer>
  );
};

const DynamicComicVisual = () => {
  return (
    <VisualContainer title="动态漫画生成">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute max-w-none object-cover size-full pointer-events-none"
        controls={false}
        controlsList="nodownload"
        disablePictureInPicture
        disableRemotePlayback
        poster={imgImageDynamicComic}
      >
        <source src={dynamicComicVideo} type="video/mp4" />
      </video>
    </VisualContainer>
  );
};

const ComicInterpretationVisual = () => {
  return (
    <VisualContainer title="图片漫画演绎">
      <img
        src={imgComicInterpretationFull}
        alt="Comic Interpretation"
        className="absolute max-w-none object-cover size-full"
      />
    </VisualContainer>
  );
};

const SpotlightCard = ({
  children,
  className = "",
  mouseX,
  mouseY,
}: {
  children: React.ReactNode;
  className?: string;
  mouseX: any;
  mouseY: any;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        // Calculate offset relative to the document (pageX/pageY)
        setOffset({ x: rect.left + window.scrollX, y: rect.top + window.scrollY });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <div
      ref={divRef}
      className={`relative rounded-[32px] ${className}`}
    >
      {/* Background layer with spotlight gradient */}
      <motion.div
        className="absolute inset-0 rounded-[32px] z-0 pointer-events-none transition-opacity duration-500"
        style={{
           background: useMotionTemplate`radial-gradient(250px circle at ${useTransform(mouseX, (x: number) => x - offset.x)}px ${useTransform(mouseY, (y: number) => y - offset.y)}px, rgba(255,255,255,0.15), rgba(81, 162, 255, 0.2) 40%, transparent 60%)`,
           opacity: 1
        }}
      />

      {/* Inner Content Wrapper - Inset by 1.5px to reveal the border */}
      <div className="absolute inset-[1.5px] rounded-[30.5px] bg-[#151515] overflow-hidden z-10 flex flex-col">
        {children}
      </div>
    </div>
  );
};

const FeatureRow = ({ feature, index, mouseX, mouseY }: { feature: any, index: number, mouseX: any, mouseY: any }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full"
    >
      {/* Text Card - Narrower (5 cols) */}
      <SpotlightCard 
        className={`
          md:col-span-5 relative h-full min-h-[400px]
          ${isEven ? 'md:order-1' : 'md:order-2'}
        `}
        mouseX={mouseX}
        mouseY={mouseY}
      >
        <div className="flex flex-col justify-between h-full p-8 relative overflow-hidden group">
            {/* Hover Highlight */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500" />
            
            {/* Content */}
            <div className="relative z-10">
            {/* Number Box */}
            <div className="w-14 h-14 bg-[#222] rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-6 border border-white/5 shadow-inner">
                {feature.id}
            </div>

            <h3 className="font-['MiSans',sans-serif] font-bold text-2xl md:text-3xl text-white mb-4">
                {feature.title}
            </h3>
            <p className="font-['PingFang_SC',sans-serif] text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                {feature.desc}
            </p>
            
            {/* Check List */}
            <div className="flex flex-col gap-3">
                {feature.checks.map((check: string, idx: number) => (
                <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1db954]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#1db954]" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{check}</span>
                </div>
                ))}
            </div>
            </div>

            {/* Decorative Bottom Gradient */}
            <div className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`} />
        </div>
      </SpotlightCard>

      {/* Visual Card - Wider (7 cols) */}
      <SpotlightCard
        className={`
          md:col-span-7 relative aspect-[696/484] h-auto md:h-full md:aspect-auto md:min-h-[500px]
          ${isEven ? 'md:order-2' : 'md:order-1'}
        `}
        mouseX={mouseX}
        mouseY={mouseY}
      >
        <div className="relative w-full h-full bg-[#151515] overflow-hidden group">
            {/* Inner Content Container - Updated padding to 8px */}
            <div className="absolute inset-[8px] rounded-2xl overflow-hidden bg-[#0f1012] border border-white/5">
                {feature.id === 1 ? (
                    <ScriptBreakdownVisual />
                ) : feature.id === 2 ? (
                    <DynamicComicVisual />
                ) : feature.id === 3 ? (
                    <ComicInterpretationVisual />
                ) : (
                    <>
                        {/* Main Image */}
                        <img 
                            src={feature.image} 
                            alt={feature.title} 
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-transparent to-transparent opacity-20" />
                    </>
                )}
            </div>

            {/* Corner gradients */}
            <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${feature.gradient} opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-700`} />
            <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr ${feature.gradient} opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-700`} />
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export const FeatureProduction = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Track mouse relative to the document
    mouseX.set(e.pageX);
    mouseY.set(e.pageY);
  };

  return (
    <SectionWrapper id="production" className="bg-[#0f1012] py-20">
      <div 
        className="w-full max-w-[1280px] mx-auto px-6 flex flex-col gap-4"
        onMouseMove={handleMouseMove}
      >
        
        {/* Header */}
        <div className="w-full text-center relative z-10 flex flex-col items-center gap-[12px] mb-12">
          {/* Paragraph */}
          <div className="relative shrink-0 w-full flex justify-center">
             <div className="bg-[rgba(57,117,254,0.1)] content-stretch flex items-center justify-center px-[20px] py-[6px] rounded-[21px]">
               <div className="relative shrink-0">
                 <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
                   <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53a4ff] text-[18px] text-nowrap whitespace-pre">精细化制作</p>
                 </div>
               </div>
             </div>
           </div>

           {/* Heading */}
           <div className="h-auto relative shrink-0 w-full mb-4 md:mb-0">
             <div className="flex flex-col md:flex-row font-['MiSans',sans-serif] font-bold gap-[6px] items-center justify-center text-3xl md:text-[48px] text-center md:whitespace-pre">
               <p className="relative shrink-0 text-white">精细化制作与</p>
               <p className="bg-clip-text bg-gradient-to-r from-[#51a2ff] relative shrink-0 to-[#ffffff] text-transparent" style={{ WebkitTextFillColor: "transparent" }}>
                 专业控制
               </p>
             </div>
           </div>
        </div>

        {/* Feature Rows */}
        <div className="flex flex-col gap-4">
          {features.map((feature, idx) => (
            <FeatureRow 
                key={idx} 
                feature={feature} 
                index={idx}
                mouseX={mouseX}
                mouseY={mouseY}
            />
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};
