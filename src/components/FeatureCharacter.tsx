import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { SectionWrapper } from './ui/SectionWrapper';
import imgFeatureCharacter from "figma:asset/ca4f3047fde812916c830e8952aed20756b0f3b0.png";
import imgFeatureCharacter1 from "figma:asset/0dd68e3fbcaaa32ea1ddcc791e7db658af003698.png";
import imgFeatureCharacter2 from "figma:asset/d57a231d469b87288296ed9a30d221bcc1a47b28.png";
import imgFeatureCharacter3 from "figma:asset/69c3de13dcce7ccb54e3659c989081494b68409a.png";
import imgFeatureCharacter4 from "figma:asset/75b7df8213e00131ef57047613c5eaf7733c53e4.png";
import imgFeatureCharacter5 from "figma:asset/ecb12ff14e0b2664aa7f9fae13d282438825de27.png";
import imgFeatureCharacter6 from "figma:asset/465ca351790288c71d39e222182384a180e196c3.png";
import imgImage from "figma:asset/582666bce82174467f21545ed1c9f92f4186c009.png";
import iconCharacter1 from "figma:asset/e393b0088a83d2103180fd7bb06e50cadbdd6ced.png";
import iconCharacter2 from "figma:asset/9a4114f44778e98c0528ea9d9f87a70e46a4dcc0.png";
import iconCharacter3 from "figma:asset/1a4d8e0df96c19064730e30c1786eb1898c19759.png";

// Updated imports for the rotating animation
import imgCharGenBg from "figma:asset/bef7119bb2b7de501e8b89c00aeb32fa9fb7d37d.png";
import imgTopCard from "figma:asset/38fada175042e7f64e6dd64565b2fe2a6170e5d2.png";
import imgInputBar from "figma:asset/27b655a33a93a065da4eb76248cb05709cc8df60.png";
import imgLeftCard from "figma:asset/bbe6a567bec2fcfe262b09968028521ab5a02e3e.png";
import imgCenterCard from "figma:asset/e51f6623ae5b12e24f9d038f154093c2db5597d6.png";
import imgRightCard from "figma:asset/c9def45613cbb1c615a9ac8c164ad03110632f91.png";
import imgVoiceCharacter from "figma:asset/6cfab43344ac016727df848a139452eeef069e5f.png";

const features = [
  {
    id: 1,
    title: "角色一致性锁定",
    desc: "独创角色锁定技术，确保主角在不同场景、不同镜头下始终保持形象一致。从外貌特征到声音特质，全方位赋予角色鲜活生命力，彻底解决AI视频角色不稳定的痛点。",
    icon: <img src={iconCharacter1} alt="" className="w-full h-full object-contain" />
  },
  {
    id: 2,
    title: "多维角色生成与编辑",
    desc: "可通过文本描述生成角色形象，并支持上传图片或自定义文本进行精细化调整和修改。无论是调整发型、服饰还是微表情，都能精准控制，满足专业创作需求。",
    icon: <img src={iconCharacter2} alt="" className="w-full h-full object-contain" />
  },
  {
    id: 3,
    title: "角色形象语音",
    desc: "锁定角色音色特征，智能匹配角色声线，融合角色多维度特征。支持情感语音合成，让角色的每一次开口都充满戏剧张力与真实感。",
    icon: <img src={iconCharacter3} alt="" className="w-full h-full object-contain" />
  }
];

// Scene 1: Consistency Grid Component
const CharacterConsistencyVisual = () => {
  return (
    <motion.div 
        className="relative w-[600px] h-[600px] origin-top-left md:origin-center scale-[0.55] md:scale-[0.85] translate-x-[-10px] translate-y-[40px]" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        {/* Image 1 - FeatureCharacter */}
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, type: "spring" }}
            className="absolute left-[294px] top-[311.6px] size-[191.2px] rounded-[16px] shadow-[0px_12.8px_43.84px_0px_#000000] overflow-hidden"
        >
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgFeatureCharacter} />
        </motion.div>

        {/* Image 2 - FeatureCharacter1 */}
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring" }}
            className="absolute left-[147.6px] top-[192.4px] w-[118.4px] h-[119.2px] rounded-[16px] shadow-[0px_12.8px_43.84px_0px_#000000] overflow-hidden"
        >
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgFeatureCharacter1} />
        </motion.div>

        {/* Image 3 - FeatureCharacter2 */}
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, type: "spring" }}
            className="absolute left-[86.8px] top-[311.6px] w-[237.6px] h-[236.8px] rounded-[16px] shadow-[0px_12.8px_43.84px_0px_#000000] overflow-hidden"
        >
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgFeatureCharacter2} />
        </motion.div>

        {/* Image 4 - FeatureCharacter3 */}
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="absolute left-[392.4px] top-[192.4px] w-[165.6px] h-[164.8px] rounded-[16px] shadow-[0px_12.8px_43.84px_0px_#000000] overflow-hidden"
        >
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgFeatureCharacter3} />
        </motion.div>

        {/* Image 5 - FeatureCharacter4 */}
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, type: "spring" }}
            className="absolute left-[255.6px] top-[172.4px] w-[165.6px] h-[164px] rounded-[16px] shadow-[0px_12.8px_43.84px_0px_#000000] overflow-hidden"
        >
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgFeatureCharacter4} />
        </motion.div>

        {/* Image 6 - FeatureCharacter5 */}
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute left-[380.4px] top-[50.8px] size-[123.2px] rounded-[16px] shadow-[0px_12.8px_43.84px_0px_#000000] overflow-hidden"
        >
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgFeatureCharacter5} />
        </motion.div>

        {/* Image 7 - FeatureCharacter6 */}
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, type: "spring" }}
            className="absolute left-[255.6px] top-[16.4px] w-[160.8px] h-[159.2px] rounded-[16px] shadow-[0px_12.8px_43.84px_0px_#000000] overflow-hidden"
        >
            <img alt="" className="absolute inset-0 size-full object-cover" src={imgFeatureCharacter6} />
        </motion.div>

        {/* Image 8 - FeatureCharacter7 / Image */}
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute left-[62px] top-[-28.4px] w-[222.4px] h-[221.025px] rounded-[16px] shadow-[0px_12.8px_43.84px_0px_#000000] overflow-hidden"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-[0.54%] max-w-none top-[0.05%] w-[99.1%]" src={imgImage} />
            </div>
        </motion.div>
    </motion.div>
  );
};

// Scene 2 Component
const CharacterGenerationScene = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [positions, setPositions] = useState([0, 1, 2, 3]);

    useEffect(() => {
        if (isHovering) return;
        const interval = setInterval(() => {
            setPositions(prev => prev.map(p => (p + 1) % 4));
        }, 5000);
        return () => clearInterval(interval);
    }, [isHovering]);

    const cards = [
        { id: 'top', src: imgTopCard },
        { id: 'left', src: imgLeftCard },
        { id: 'center', src: imgCenterCard },
        { id: 'right', src: imgRightCard }
    ];

    const variants = {
        0: { x: 102, y: 26, width: 316, height: 177, rotate: 0, zIndex: 10, scale: 1 },
        1: { x: 20, y: 332, width: 276, height: 156, rotate: -13.5, zIndex: 20, scale: 1 },
        2: { x: 113, y: 315, width: 276, height: 156, rotate: 1.5, zIndex: 25, scale: 1 },
        3: { x: 225, y: 332, width: 276, height: 156, rotate: 16.6, zIndex: 30, scale: 1 }
    };

    return (
        <motion.div 
            className="relative w-[520px] h-[520px] bg-[#151515] border border-[rgba(255,255,255,0.15)] rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
        >
             {/* Background Image */}
             <div className="absolute left-[-1px] size-[520px] top-[-1px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-50" src={imgCharGenBg} />
            </div>

            {/* Input Bar */}
            <div className="absolute h-[57px] left-[30px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[458px] z-40">
                <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[#f2f2f2]/20 backdrop-blur-sm border-solid h-[57px] left-1/2 rounded-[28px] top-0 translate-x-[-50%] w-[458px]" />
                <div className="absolute h-[49px] right-[4px] top-[4px] w-[118px]">
                    <div className="absolute bg-[#3b82f6] h-[49px] rounded-[24px] w-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                        <span className="text-white font-medium text-[16px]">一键生图</span>
                    </div>
                </div>
                <p className="absolute font-['PingFang_SC',sans-serif] leading-[57px] left-[24px] not-italic text-[16px] text-white/90 top-0 whitespace-pre">更改了发型的提示词</p>
            </div>

            {/* Rotating Cards */}
            {cards.map((card, index) => {
                const currentSlot = positions[index];
                const isBottomCard = currentSlot !== 0;
                return (
                    <motion.div
                        key={card.id}
                        className="absolute rounded-[12px] overflow-hidden border border-white/10 shadow-2xl bg-[#1a1a1a] origin-center"
                        animate={variants[currentSlot as keyof typeof variants]}
                        whileHover={isBottomCard ? { scale: 1.1, zIndex: 100, rotate: 0, transition: { duration: 0.3 } } : undefined}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <img src={card.src} alt="" className="w-full h-full object-cover" draggable={false} />
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export const FeatureCharacter = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Sync active index for Image Animations
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = latest < 0.3 ? 0 : latest < 0.7 ? 1 : 2;
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  // Transforms for Scene 1 (Text)
  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.4], ["0%", "0%", "-150%"]); // Increased gap
  const opacity1 = useTransform(scrollYProgress, [0.2, 0.35], [1, 0]);

  // Transforms for Scene 2 (Text)
  const y2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], ["150%", "0%", "0%", "-150%"]); // Increased gap
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.4, 0.6, 0.75], [0, 1, 1, 0]);

  // Transforms for Scene 3 (Text)
  const y3 = useTransform(scrollYProgress, [0.6, 0.8, 1], ["150%", "0%", "0%"]); // Increased gap
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

  return (
    <SectionWrapper id="character" className="bg-[#0f1012] min-h-screen py-0">
      <div className="w-full max-w-[1280px] mx-auto relative px-6">
        
        {/* Header */}
        <div className="w-full pt-20 pb-6 relative z-10 flex flex-col items-center gap-[16px]">
           <div className="relative shrink-0 w-full flex justify-center">
             <div className="bg-[rgba(57,117,254,0.1)] content-stretch flex items-center justify-center px-[20px] py-[6px] rounded-[21px]">
               <div className="relative shrink-0">
                 <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
                   <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53a4ff] text-[18px] text-nowrap whitespace-pre">角色驱动与高保真一致性</p>
                 </div>
               </div>
             </div>
           </div>
           
           <div className="h-auto md:h-[50px] relative shrink-0 w-full mb-4 md:mb-0">
             <div className="flex flex-row font-['MiSans',sans-serif] font-bold gap-[6px] items-center justify-center md:leading-[50px] md:left-1/2 md:translate-x-0 not-italic text-2xl md:text-[48px] text-center whitespace-nowrap md:whitespace-pre">
               <p className="relative shrink-0 text-white">千人千面</p>
               <p className="bg-clip-text bg-gradient-to-r from-[#51a2ff] relative shrink-0 to-[#ffffff] text-transparent" style={{ WebkitTextFillColor: "transparent" }}>
                 始终如一
               </p>
             </div>
           </div>
        </div>

        {/* Desktop Scroll-Linked Sticky Layout */}
        <div ref={containerRef} className="hidden md:flex w-full flex-row-reverse relative" style={{ height: '300vh' }}>
           
           <div className="sticky top-0 h-screen w-full flex flex-row-reverse overflow-hidden">
              
              {/* Text Column (Right) - Driven by Scroll Transforms */}
              <div className="w-1/2 relative h-full flex items-center justify-center">
                 {/* Text 1 */}
                 <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute px-8 md:px-16 max-w-xl">
                    <div className="w-16 h-16 flex items-center justify-center mb-6">
                      {features[0].icon}
                    </div>
                    <h3 className="font-['MiSans',sans-serif] font-bold text-4xl mb-6 text-white">{features[0].title}</h3>
                    <p className="font-['PingFang_SC',sans-serif] text-lg leading-relaxed text-gray-300">{features[0].desc}</p>
                 </motion.div>

                 {/* Text 2 */}
                 <motion.div style={{ y: y2, opacity: opacity2 }} className="absolute px-8 md:px-16 max-w-xl">
                    <div className="w-16 h-16 flex items-center justify-center mb-6">
                      {features[1].icon}
                    </div>
                    <h3 className="font-['MiSans',sans-serif] font-bold text-4xl mb-6 text-white">{features[1].title}</h3>
                    <p className="font-['PingFang_SC',sans-serif] text-lg leading-relaxed text-gray-300">{features[1].desc}</p>
                 </motion.div>

                 {/* Text 3 */}
                 <motion.div style={{ y: y3, opacity: opacity3 }} className="absolute px-8 md:px-16 max-w-xl">
                    <div className="w-16 h-16 flex items-center justify-center mb-6">
                      {features[2].icon}
                    </div>
                    <h3 className="font-['MiSans',sans-serif] font-bold text-4xl mb-6 text-white">{features[2].title}</h3>
                    <p className="font-['PingFang_SC',sans-serif] text-lg leading-relaxed text-gray-300">{features[2].desc}</p>
                 </motion.div>
              </div>

              {/* Image Column (Left) - Driven by ActiveIndex with Pop Animation */}
              <div className="w-1/2 relative h-full flex items-center justify-center p-12">
                 <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {activeIndex === 0 && (
                            <motion.div 
                                key="scene0"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="relative w-[600px] h-[600px]">
                                   <CharacterConsistencyVisual />
                                </div>
                            </motion.div>
                        )}
                        {activeIndex === 1 && (
                            <motion.div 
                                key="scene1"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <CharacterGenerationScene />
                            </motion.div>
                        )}
                        {activeIndex === 2 && (
                            <motion.div 
                                key="scene2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            >
                                <img src={imgVoiceCharacter} className="w-full h-full object-contain" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                 </div>
              </div>

           </div>
        </div>

        {/* Mobile View - Preserved */}
        <div className="md:hidden flex flex-col gap-12 px-0 pb-20 mt-8">
           {features.map((feature, idx) => (
             <div key={idx} className="flex flex-col gap-4">
                <div className="aspect-square w-full bg-transparent relative overflow-hidden rounded-2xl flex items-center justify-center">
                   {idx === 0 && (
                        <div className="scale-[0.55] origin-center transform-gpu">
                            <div className="relative w-[600px] h-[600px]">
                                <motion.div className="absolute inset-0 translate-x-[-10px] translate-y-[40px]">
                                    <div className="absolute left-[294px] top-[311.6px] size-[191.2px] rounded-[16px] shadow-2xl overflow-hidden">
                                        <img className="size-full object-cover" src={imgFeatureCharacter} />
                                    </div>
                                    <div className="absolute left-[147.6px] top-[192.4px] w-[118.4px] h-[119.2px] rounded-[16px] shadow-2xl overflow-hidden">
                                        <img className="size-full object-cover" src={imgFeatureCharacter1} />
                                    </div>
                                    <div className="absolute left-[86.8px] top-[311.6px] w-[237.6px] h-[236.8px] rounded-[16px] shadow-2xl overflow-hidden">
                                        <img className="size-full object-cover" src={imgFeatureCharacter2} />
                                    </div>
                                    <div className="absolute left-[392.4px] top-[192.4px] w-[165.6px] h-[164.8px] rounded-[16px] shadow-2xl overflow-hidden">
                                        <img className="size-full object-cover" src={imgFeatureCharacter3} />
                                    </div>
                                    <div className="absolute left-[255.6px] top-[172.4px] w-[165.6px] h-[164px] rounded-[16px] shadow-2xl overflow-hidden">
                                        <img className="size-full object-cover" src={imgFeatureCharacter4} />
                                    </div>
                                    <div className="absolute left-[380.4px] top-[50.8px] size-[123.2px] rounded-[16px] shadow-2xl overflow-hidden">
                                        <img className="size-full object-cover" src={imgFeatureCharacter5} />
                                    </div>
                                    <div className="absolute left-[255.6px] top-[16.4px] w-[160.8px] h-[159.2px] rounded-[16px] shadow-2xl overflow-hidden">
                                        <img className="size-full object-cover" src={imgFeatureCharacter6} />
                                    </div>
                                    <div className="absolute left-[62px] top-[-28.4px] w-[222.4px] h-[221.025px] rounded-[16px] shadow-2xl overflow-hidden">
                                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                            <img className="absolute h-full left-[0.54%] max-w-none top-[0.05%] w-[99.1%]" src={imgImage} />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                   )}
                   {idx === 1 && (
                       <div className="w-[520px] h-[520px] scale-[0.64] origin-center transform-gpu">
                           <CharacterGenerationScene />
                       </div>
                   )}
                   {idx === 2 && (
                       <img src={imgVoiceCharacter} className="w-full h-full object-cover" />
                   )}
                </div>
                <div className="px-2">
                   <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.desc}
                   </p>
                </div>
             </div>
           ))}
        </div>

      </div>
    </SectionWrapper>
  );
};