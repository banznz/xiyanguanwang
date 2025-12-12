import React from 'react';
import { motion } from 'motion/react';
import { SectionWrapper } from './ui/SectionWrapper';
import imgIcon from "figma:asset/6381ad4844a9746424df4473e83737776f11fb59.png";
import img300 from "figma:asset/a8a75e841a7aaf78617538aadb5190f8c17f5e1d.png";
import svgPaths from "../imports/svg-at7e7fuv1s";

// New Background Images
import imgImageHeroBackground from "figma:asset/ebb1f1ce64f1dc9646763365ec6bb5f4b7d73090.png";

export const Hero = () => {
  return (
    <SectionWrapper id="home" className="relative justify-start pt-32 md:justify-center md:pt-0 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Composition */}
        <div className="absolute inset-0 w-full h-full opacity-[0.78]">
           <div className="absolute inset-0 overflow-hidden">
             {/* Base Layer */}
             <img 
                src={imgImageHeroBackground} 
                alt="Background Layer" 
                className="absolute inset-0 w-full h-full object-cover scale-110" 
             />
           </div>
        </div>

        {/* Gradient Overlays */}
        {/* Container (Gradient to Transparent Top-Bottom) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.5)] via-[rgba(10,10,10,0)] to-[rgba(0,0,0,0)] via-50%" />
        {/* Container1 (Gradient from Top Black) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)] via-50% opacity-40" />
        
        {/* Original side gradient for text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <div className="mb-6">
              <div className="backdrop-blur-sm bg-[rgba(57,117,254,0.1)] flex items-center justify-center pl-[12px] pr-[16px] py-[6px] rounded-[21px]">
                <div className="flex gap-[10px] items-center">
                  <div className="relative size-[20px]">
                    <img src={imgIcon} alt="" className="size-full object-cover" />
                  </div>
                  <p 
                    className="text-[14px] font-normal leading-[22px] text-transparent bg-clip-text bg-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url('${img300}')`
                    }}
                  >
                    文本转视觉效率提升 300%
                  </p>
                </div>
              </div>
            </div>
            
            {/* Heading */}
            <div className="flex flex-col font-['MiSans',sans-serif] font-bold gap-[2px] items-start leading-[normal] not-italic relative w-full text-4xl sm:text-5xl md:text-[80px] whitespace-pre-wrap md:whitespace-pre" data-name="Heading 1">
              <p className="relative shrink-0 text-white">让小说文字</p>
              <p className="bg-clip-text bg-gradient-to-r from-[#51a2ff] relative shrink-0 to-[#ffffff] text-transparent" style={{ WebkitTextFillColor: "transparent" }}>
                立即拥有生命力
              </p>
            </div>
            
            {/* Description */}
            <p className="text-[#d1d5dc] text-[20px] mb-8 leading-[32px] max-w-[660px]">
              轻松将小说文本转化为漫画或动态视频。一键内容创作，从剧本拆解到角色演绎，全流程智能生成，开启内容创作新纪元。
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-[40px] py-[12px] rounded-[100px] text-[18px] font-semibold text-white flex items-center gap-[8px] transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(57,117,254,0.4)]"
                style={{
                  backgroundImage: "linear-gradient(147.904deg, rgb(48, 58, 255) 8.3445%, rgb(76, 164, 255) 75.66%), linear-gradient(90deg, rgb(57, 117, 254) 0%, rgb(57, 117, 254) 100%)",
                   boxShadow: "0px 10px 21px 0px rgba(0,0,0,0.14), 0px 38px 38px 0px rgba(0,0,0,0.12)"
                }}
              >
                开始创作
                <div className="relative size-[20px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                    <path d="M4.16667 10H15.8333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1ae0b780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-xs uppercase tracking-widest">探寻未知</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </SectionWrapper>
  );
};
