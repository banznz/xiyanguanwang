import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { SectionWrapper } from './ui/SectionWrapper';
import svgPaths from "../imports/svg-txi8juyhrz";
import imgOneClickCreation from "figma:asset/811beacdd73f9533b44c22eecd08b9ea616fa5c5.png";
import imgIcon1 from "figma:asset/2ecbffc9985fbe8e35f9b83430d9b55519a1caa9.png";
import imgIcon2 from "figma:asset/c1d19375b27c8e02136d36089acc14a6b8e831b2.png";
import imgImage24 from "figma:asset/81144b3db323187b6dd3b7d7a0fa20c8faabcf32.png";
import imgImage25 from "figma:asset/a3597c436bfd64eb0cb054b7c857151f8bd171e9.png";
import imgImage26 from "figma:asset/57e94ebac4bd5cd774a12c94c67e2f2ce961d323.png";
import imgImage27 from "figma:asset/1fc99ae91d2b89fdf268bf9b956fd6e32b968b03.png";
import imgImage28 from "figma:asset/7a48c7db9d863958cb7998959457a19874f80ae7.png";
import imgImage29 from "figma:asset/df6427240bc9ca132cb32675e78d905d2169cea6.png";
import imgImage30 from "figma:asset/fd4964d234b57c1883f847494179ad11774a8e71.png";
import imgImage31 from "figma:asset/11ad80ccb5420358ad88c5948db344b75801bafa.png";
import imgImage32 from "figma:asset/47499c1617cd33774980d065031800f02e158bf7.png";

const styleImages = [
  imgImage24,
  imgImage25,
  imgImage26,
  imgImage27,
  imgImage28,
  imgImage29,
  imgImage30,
  imgImage31,
  imgImage32
];

const features = [
  {
    id: 1,
    title: "一键内容创作",
    desc: "轻松将小说文本转化为漫画或动态视频，实现“让小说文字立即拥有生命力”。系统自动识别场景、角色与对白，无需繁琐的人工拆解。",
    icon: <img src={imgIcon1} alt="" className="w-full h-full object-contain" />
  },
  {
    id: 2,
    title: "多风格绘图",
    desc: "提供多样化小说风格选择，匹配场景空间属性，兼容各类小说。无论是玄幻修仙、都市言情还是悬疑推理，都能精准匹配最佳视觉风格。",
    icon: <img src={imgIcon2} alt="" className="w-full h-full object-contain" />
  }
];

export const FeatureAnalysis = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredGridIndex, setHoveredGridIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = latest < 0.3 ? 0 : 1;
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  // Text Transforms
  // Item 1
  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.4], ["0%", "0%", "-150%"]);
  const opacity1 = useTransform(scrollYProgress, [0.2, 0.35], [1, 0]);

  // Item 2
  const y2 = useTransform(scrollYProgress, [0.2, 0.4, 1], ["150%", "0%", "0%"]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);

  return (
    <SectionWrapper id="analysis" className="bg-[#0f1012] min-h-screen py-0">
      <div className="w-full max-w-[1280px] mx-auto relative px-6">
        
        {/* Header - Moved to normal flow to avoid overlap */}
        <div className="w-full pt-20 pb-6 relative z-10 flex flex-col items-center gap-[12px]">
           {/* Paragraph / Tag */}
           <div className="h-auto relative shrink-0 w-full flex justify-center">
             <div className="bg-[rgba(57,117,254,0.1)] content-stretch flex items-center justify-center px-[20px] py-[6px] rounded-[21px]">
               <div className="relative shrink-0">
                 <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
                   <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53a4ff] text-[18px] text-nowrap whitespace-pre">深度解析与效率</p>
                 </div>
               </div>
             </div>
           </div>
           
           {/* Heading */}
           <div className="h-auto md:h-[50px] relative shrink-0 w-full mb-4 md:mb-0">
             <div className="md:absolute md:content-stretch flex flex-col md:flex-row font-['MiSans',sans-serif] font-bold gap-[6px] items-center md:leading-[50px] md:left-1/2 md:-translate-x-1/2 not-italic text-3xl md:text-[48px] text-center md:text-nowrap md:top-0 md:whitespace-pre">
               <p className="relative shrink-0 text-white">文本转视觉的</p>
               <p className="bg-clip-text bg-gradient-to-r from-[#51a2ff] relative shrink-0 to-[#ffffff] text-transparent" style={{ WebkitTextFillColor: "transparent" }}>
                 效率与深度
               </p>
             </div>
           </div>
        </div>

        {/* Desktop Scroll-Linked Sticky Layout */}
        <div ref={containerRef} className="hidden md:flex w-full relative" style={{ height: '200vh' }}>
           
           <div className="sticky top-0 h-screen w-full flex overflow-hidden">
             
             {/* Left Column: Scrolling Text */}
             <div className="w-1/2 relative h-full flex items-center justify-center">
                 {/* Feature 1 */}
                 <motion.div 
                    style={{ y: y1, opacity: opacity1 }}
                    className="absolute px-8 md:px-16 max-w-xl"
                 >
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-6">
                      {features[0].icon}
                    </div>
                    <h3 className="font-['MiSans',sans-serif] font-bold text-3xl md:text-4xl mb-6 text-white">
                      {features[0].title}
                    </h3>
                    <p className="font-['PingFang_SC',sans-serif] text-lg leading-relaxed text-gray-300">
                      {features[0].desc}
                    </p>
                 </motion.div>

                 {/* Feature 2 */}
                 <motion.div 
                    style={{ y: y2, opacity: opacity2 }}
                    className="absolute px-8 md:px-16 max-w-xl"
                 >
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-6">
                      {features[1].icon}
                    </div>
                    <h3 className="font-['MiSans',sans-serif] font-bold text-3xl md:text-4xl mb-6 text-white">
                      {features[1].title}
                    </h3>
                    <p className="font-['PingFang_SC',sans-serif] text-lg leading-relaxed text-gray-300">
                      {features[1].desc}
                    </p>
                 </motion.div>
             </div>

             {/* Right Column: Sticky Visual */}
             <div className="w-1/2 relative h-full flex items-center justify-center p-12">
                <div className={`relative w-full max-w-[625px] aspect-[625/389] rounded-3xl overflow-hidden transition-all duration-500 bg-transparent`}>
                  <AnimatePresence mode="wait">
                    {activeIndex === 0 ? (
                      <motion.div
                        key="analysis"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="absolute inset-0"
                      >
                        <img 
                          src={imgOneClickCreation} 
                          alt="One Click Creation"
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="styles"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="absolute inset-0"
                      >
                          <motion.div 
                            className="grid gap-1 w-full h-full rounded-2xl overflow-hidden"
                            onMouseLeave={() => setHoveredGridIndex(null)}
                            animate={{
                              gridTemplateColumns: hoveredGridIndex === null ? "1fr 1fr 1fr" : [0, 1, 2].map(c => c === (hoveredGridIndex % 3) ? "2.5fr" : "0.7fr").join(" "),
                              gridTemplateRows: hoveredGridIndex === null ? "1fr 1fr 1fr" : [0, 1, 2].map(r => r === Math.floor(hoveredGridIndex / 3) ? "2.5fr" : "0.7fr").join(" ")
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          >
                            {styleImages.map((img, i) => (
                                <motion.div 
                                  key={i}
                                  layout
                                  className="relative overflow-hidden bg-gray-900 cursor-pointer"
                                  onMouseEnter={() => setHoveredGridIndex(i)}
                                >
                                  <img 
                                      src={img} 
                                      alt={`Style ${i}`}
                                      className="w-full h-full object-cover"
                                  />
                                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${hoveredGridIndex === i ? 'opacity-0' : 'opacity-100'}`} />
                                </motion.div>
                            ))}
                          </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
             </div>

           </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-12 px-4 pb-20 mt-8">
           {features.map((feature, idx) => (
             <div key={idx} className="flex flex-col gap-4">
                <div 
                   className={`aspect-[625/389] w-full relative overflow-hidden rounded-2xl bg-transparent`}
                   onClick={() => setHoveredGridIndex(null)}
                >
                   {idx === 0 ? (
                      <img src={imgOneClickCreation} alt="Interface" className="w-full h-full object-contain" />
                   ) : (
                      <motion.div 
                        className="grid gap-1 w-full h-full"
                        animate={{
                          gridTemplateColumns: hoveredGridIndex === null ? "1fr 1fr 1fr" : [0, 1, 2].map(c => c === (hoveredGridIndex % 3) ? "2.5fr" : "0.7fr").join(" "),
                          gridTemplateRows: hoveredGridIndex === null ? "1fr 1fr 1fr" : [0, 1, 2].map(r => r === Math.floor(hoveredGridIndex / 3) ? "2.5fr" : "0.7fr").join(" ")
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                          {styleImages.map((img, i) => (
                              <motion.div 
                                key={i} 
                                layout
                                className="relative overflow-hidden bg-gray-900"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setHoveredGridIndex(hoveredGridIndex === i ? null : i);
                                }}
                              >
                                <img src={img} className="w-full h-full object-cover" />
                                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${hoveredGridIndex === i ? 'opacity-0' : 'opacity-100'}`} />
                              </motion.div>
                          ))}
                      </motion.div>
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