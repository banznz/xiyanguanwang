import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
} from "motion/react";
import { SectionWrapper } from "./ui/SectionWrapper";
import {
  Settings2,
  Music,
  Type,
  Image as ImageIcon,
  ArrowLeftRight,
  Share,
} from "lucide-react";
import gif1 from "figma:asset/866ddd2b2f0319acfc967910a4894669c8ace8c4.png";
import gif2 from "figma:asset/5fe9f8c272fc78b4cdd800d5525878f2e8dae8c5.png";

// Music Assets
import imgMusicBg from "figma:asset/fbde609c9813de4bdbd54af1000984e0e37bb705.png";
import imgTrack1 from "figma:asset/5f5fb699cda7ad42859a20252b6bb77636800933.png";
import imgTrack2 from "figma:asset/707b571494e20450374444abf5a9e65d25198627.png";
import imgTrack3 from "figma:asset/3b0c4fcab69863c3c1deb0a54b034e003abbede5.png";
import imgTrack4 from "figma:asset/50209a761f7b23970b5839ef592bf5bd791297ac.png";
import imgTrack5 from "figma:asset/6f3378755bab24953f9b7ae696dab7f3bea71eac.png";
import imgTrack6 from "figma:asset/30a0969081f729eafb2f37a953f6c77fb90e0bf9.png";
import imgTrack7 from "figma:asset/1dc7ef5c56aa2c7fe19c82d8d0ef2b1091c3eca7.png";
import imgTrack8 from "figma:asset/223ef9dcf9926adf5a81b4227c09c9554e4d2363.png";
import imgTrack9 from "figma:asset/4f1773dc91dcd199e7167ae65a9adf4d7d46295b.png";
import imgTrack10 from "figma:asset/94e7fe8fb890e4380cb1eae9b57f90d4595abcd3.png";
import imgTrack11 from "figma:asset/20ad85b7d935f3a6af3652a53a4c6bb0b3c5b739.png";
import imgTrack12 from "figma:asset/2c2ecbb47a29f344f785006346fa2cbf07768ebb.png";
// Row 2
import imgTrack13 from "figma:asset/1078e7f6df0876de0bf0f0433eeb1166a0fb1180.png";
import imgTrack14 from "figma:asset/56f4f61f43b0e4d59b9e7141f40da1c6c9d49f5d.png";
import imgTrack15 from "figma:asset/ca3ca773307b13a1304e8a521b582f51706a05e0.png";
import imgTrack16 from "figma:asset/2aba617ef3b92b325214fe7c44f5eda83a2904d0.png";
import imgTrack17 from "figma:asset/99dceca980de4bbff18554bd50d3e1a65b623283.png";
import imgTrack18 from "figma:asset/290beb807bfcc613f35e380993758f1ce716698b.png";
import imgTrack19 from "figma:asset/9e2ec5ff4fd332af7ad23e0e6074647746cd7640.png";
import imgTrack20 from "figma:asset/448a4162676cd89d6f86f0ad31ff4a032c301897.png";
import imgTrack21 from "figma:asset/0f6c4f1f8706f0029f68d316249dfe686e07c424.png";
import imgTrack22 from "figma:asset/aa984cacf745ee46dccd7f7823762f59cd09a8ed.png";
import imgTrack23 from "figma:asset/37ad2637aada3f5327ce3102b606502cc5e34135.png";
import imgTrack24 from "figma:asset/14d6ae6cb71cf929ee5032f7f00d969e4496df7c.png";
import imgTrack25 from "figma:asset/53e558c22a7f8f80a2dee3ed4a466f6a78ccd993.png";

// Transition Effects Assets
import imgTrans1 from "figma:asset/36a3ae25d5b7c35f8434fb3911fd6772c38c560b.png";
import imgTrans2 from "figma:asset/7942621aba4a7e7f9fdd47c7c69a5975ad25d497.png";
import imgTrans3 from "figma:asset/e417646f683d72001b329299cdf83d3930c6f241.png";
import imgTrans4 from "figma:asset/4eedf0468e95d01b57379ae5b524d1a23c1350ff.png";
import imgTrans5 from "figma:asset/1fe8fafd9ada5142b56cbe463997859e4dd4e4ee.png";
import imgTrans6 from "figma:asset/884c93cc32f26f998a5c13182eca286b01568017.png";
import imgTrans7 from "figma:asset/ed5e707dfdff27b74f7f1ad5eb9c2d3db9628cb7.png";
import imgTrans8 from "figma:asset/517f4d989bf3e9570cc922e843b01d59b73ed189.png";
import imgVideoCover from "figma:asset/9b3dbe172d85438096ad7d1116b22679e68298c2.png";
import imgSubtitle from "figma:asset/790acd777e994ff9c95a80dde220f7af8596fde1.png";

// Comic Interpretation Assets
import imgImage39 from "figma:asset/e3e15552ac224391646e9257a9733d79d1f8c725.png";
import imgImage40 from "figma:asset/b314270a42bbe0e214b63fabfb968192f05e4f9d.png";
import imgImage41 from "figma:asset/e362a04054685bd4c856079d8f7b8b60b2c8aba9.png";

const GIF_ASSETS = [gif1, gif2];
const MUSIC_ROW_1 = [
  imgTrack1,
  imgTrack2,
  imgTrack3,
  imgTrack4,
  imgTrack5,
  imgTrack6,
  imgTrack7,
  imgTrack8,
  imgTrack9,
  imgTrack10,
  imgTrack11,
  imgTrack12,
  imgTrack9,
];
const MUSIC_ROW_2 = [
  imgTrack13,
  imgTrack14,
  imgTrack15,
  imgTrack16,
  imgTrack17,
  imgTrack18,
  imgTrack19,
  imgTrack20,
  imgTrack21,
  imgTrack22,
  imgTrack23,
  imgTrack24,
  imgTrack25,
];

const MarqueeRow = ({
  images,
  direction = "left",
  speed = 20,
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="flex overflow-hidden w-full h-full relative">
      <motion.div
        className="flex gap-3 h-full absolute top-0 left-0"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="h-[87px] w-[87px] shrink-0 rounded-xl overflow-hidden bg-white/5 border border-white/10"
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MusicScrollVisual = () => {
  return (
    <div className="absolute inset-0 bg-[#070809] overflow-hidden">
      <div className="w-[480px] h-[300px] origin-top-left scale-[0.625] md:scale-100 relative">
      {/* <img
        src={imgMusicBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
      /> */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[25%] left-0 w-full h-[87px]">
          <MarqueeRow
            images={MUSIC_ROW_1}
            direction="left"
            speed={25}
          />
        </div>
        <div className="absolute top-[58%] left-0 w-full h-[87px]">
          <MarqueeRow
            images={MUSIC_ROW_2}
            direction="right"
            speed={30}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      </div>
    </div>
  );
};

const TransitionEffectsVisual = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(
    null,
  );

  // Position Data from Figma
  const items = [
    {
      id: 1,
      img: imgTrans1,
      gif: "https://lh3.googleusercontent.com/d/1_ldZkSW4qXGme3gaKIDQWzuvirRCKgCK",
      x: 7,
      y: 69,
      w: 97,
      h: 55,
    },
    {
      id: 2,
      img: imgTrans2,
      gif: "https://lh3.googleusercontent.com/d/1VpXltIDVXXBUawoLSf59NGCcUXp4OlOz",
      x: 375,
      y: 77,
      w: 92,
      h: 52,
    },
    {
      id: 3,
      img: imgTrans4,
      gif: "https://lh3.googleusercontent.com/d/1FppC3njUwTBMD03VLK6zhbb9DATDqo_4",
      x: 145,
      y: 88,
      w: 86,
      h: 57,
    },
    {
      id: 4,
      img: imgTrans5,
      gif: "https://lh3.googleusercontent.com/d/1eRZacqJA8xbaZWTAaa5T0mA9635ALo3q",
      x: 278,
      y: 59,
      w: 65,
      h: 65,
    },
    // ID 5 Removed as per request (right-most item)
    {
      id: 6,
      img: imgTrans8,
      gif: "https://lh3.googleusercontent.com/d/1RHhuSN2z58_qyjXaPTvvE4RelQUZgTzr",
      x: 213,
      y: 171,
      w: 65,
      h: 65,
    },
    {
      id: 7,
      img: imgTrans3,
      gif: "https://lh3.googleusercontent.com/d/1N6GhXG0N7xYVIKtj85h-3n4OcrCTK88X",
      x: 55,
      y: 179,
      w: 103,
      h: 61,
    },
    {
      id: 8,
      img: imgTrans6,
      gif: "https://lh3.googleusercontent.com/d/1FzUgTfpht1LaNC19eZ-gLNuz1MnmvVtW",
      x: 321,
      y: 191,
      w: 65,
      h: 65,
    },
  ];

  return (
    <div className="bg-[#070809] relative w-full h-full overflow-hidden">
      <div className="w-[480px] h-[300px] origin-top-left scale-[0.625] md:scale-100 relative">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute rounded-[5.5px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-125 hover:z-50 z-10"
          style={{
            left: item.x,
            top: item.y,
            width: item.w,
            height: item.h,
          }}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <img
            src={hoveredId === item.id ? item.gif : item.img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${hoveredId === item.id ? "brightness-100 scale-110" : "brightness-90"}`}
          />
        </div>
      ))}

      {/* Center Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="backdrop-blur-[7.25px] bg-[rgba(40,39,42,0.8)] border border-white/20 shadow-lg px-[16px] py-[10px] rounded-[8px] flex items-center gap-2 whitespace-nowrap">
          <p className="font-['PingFang_SC',sans-serif] font-medium text-[14px] md:text-[16px] text-white tracking-[1px] uppercase">
            剪映转场无缝对应，成片即爆款
          </p>
          <div className="bg-white h-[21px] w-[2px] rounded-full animate-pulse" />
        </div>
      </div>
      </div>
    </div>
  );
};

const VIDEO_COVER_SVG_PATHS = {
  p6e74300: "M14.8506 9.3248C15.2093 9.32512 15.5 9.61644 15.5 9.97519C15.5 11.0756 15.1376 12.5328 14.1279 13.7262C13.0988 14.9424 11.4467 15.8247 9 15.8248C6.55339 15.8247 4.90219 14.9423 3.87305 13.7262C2.8632 12.5327 2.5 11.0757 2.5 9.97519C2.50005 9.61625 2.79143 9.3248 3.15039 9.3248C3.50917 9.32501 3.80074 9.61638 3.80078 9.97519C3.80078 10.8246 4.08773 11.9673 4.86523 12.8863C5.62351 13.7824 6.89726 14.5249 9 14.525C11.1029 14.5249 12.3775 13.7825 13.1357 12.8863C13.913 11.9674 14.2002 10.8245 14.2002 9.97519C14.2002 9.61625 14.4916 9.3248 14.8506 9.3248ZM8.6416 2.28281C8.89375 2.11618 9.2368 2.14405 9.45898 2.36582L13.3594 6.26621C13.6131 6.51999 13.613 6.93133 13.3594 7.18515C13.1055 7.43873 12.6942 7.43882 12.4404 7.18515L9.65332 4.39804V11.9254C9.65322 12.2842 9.36167 12.5756 9.00293 12.5758C8.64401 12.5758 8.35264 12.2843 8.35254 11.9254V4.39121L5.55957 7.18515C5.30571 7.43876 4.89341 7.43892 4.63965 7.18515C4.3864 6.93142 4.38639 6.51993 4.63965 6.26621L8.54004 2.36582L8.6416 2.28281Z",
  pd99cd00: "M7.36362 1.05194L7.6318 2.04796C8.29462 4.5097 10.2175 6.43263 12.6793 7.09545L13.6753 7.36362L12.6793 7.6318C10.2175 8.29462 8.29462 10.2175 7.6318 12.6793L7.36362 13.6753L7.09545 12.6793C6.43263 10.2175 4.5097 8.29462 2.04796 7.6318L1.05194 7.36362L2.04796 7.09545C4.5097 6.43263 6.43263 4.5097 7.09545 2.04796L7.36362 1.05194Z",
};

const VideoCoverVisual = () => {
  return (
    <div className="absolute inset-0 bg-[#070809] flex items-center justify-center overflow-hidden">
      {/* Container wrapper scaled for responsiveness */}
      <div className="relative w-[480px] h-[300px] shrink-0 origin-center scale-[0.625] md:scale-100">
        <div className="bg-[#070809] border border-[rgba(255,255,255,0.05)] border-solid overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full h-full">
          {/* Image */}
          <div className="absolute h-[298px] left-0 overflow-clip top-0 w-[478px]">
            {/* Background layer */}
            <div className="absolute bg-[#1f1f1f] border-[0.8px] border-[rgba(255,255,255,0.05)] border-solid h-[282px] left-[8px] overflow-clip rounded-[16px] top-[8px] w-[462px]">
              <div className="absolute inset-[-0.8px]">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover w-full h-full"
                  src={imgVideoCover}
                />
              </div>
            </div>

            {/* Foreground layer (Main Interface) */}
            <div className="absolute bg-transparent h-[282px] left-[8px] overflow-hidden rounded-[16px] top-[8px] w-[462px]">
              {/* Buttons Container */}
              <div className="absolute flex gap-[12px] items-center left-1/2 top-[215.2px] -translate-x-1/2">
                {/* Button 1: Smart Select (Gradient) */}
                <div className="backdrop-blur-[6px] bg-gradient-to-r from-[rgba(89,106,207,0.4)] to-[rgba(69,167,229,0.4)] flex gap-[4px] items-center px-[16px] py-[9px] relative rounded-[28px] shrink-0">
                  <div className="absolute border border-[#f2f2f2] inset-0 pointer-events-none rounded-[28px] opacity-30" />
                  <div className="relative rounded-[37.5px] shrink-0 size-[18px]">
                    <div className="absolute left-1/2 size-[14.727px] top-[calc(50%+0.41px)] -translate-x-1/2 -translate-y-1/2">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 15 15"
                      >
                        <path
                          d={VIDEO_COVER_SVG_PATHS.pd99cd00}
                          fill="var(--fill-0, white)"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['PingFang_SC',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] whitespace-nowrap text-white">
                    系统智能选择
                  </p>
                </div>

                {/* Button 2: Upload (Black) */}
                <div className="backdrop-blur-[2px] bg-black flex gap-[4px] items-center px-[16px] py-[9px] relative rounded-[28px] shrink-0">
                  <div className="absolute border border-[#f2f2f2] inset-0 pointer-events-none rounded-[28px] opacity-30" />
                  <div className="relative shrink-0 size-[18px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        d={VIDEO_COVER_SVG_PATHS.p6e74300}
                        fill="var(--fill-0, white)"
                      />
                    </svg>
                  </div>
                  <p className="font-['PingFang_SC',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13px] whitespace-nowrap text-white">
                    我想自己上传
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute flex h-[300px] items-center justify-center left-[-1px] top-[-1px] w-[480px] pointer-events-none">
            <div className="flex-none scale-y-[-100%] w-full h-full">
              <div className="bg-gradient-to-t from-[rgba(0,0,0,0.6)] h-[300px] to-[rgba(0,0,0,0)] via-50% via-[rgba(0,0,0,0.2)] w-[480px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Data
const assets = [
  {
    id: 1,
    tag: "MOTION",
    title: "关键帧效果与控制",
    desc: "支持对画面的运动效果（如缩放、位移、角度）进行精细化设置，实现更动态的视觉效果。",
    image:
      "https://images.unsplash.com/photo-1666728451779-85c0bc53d2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBzb2Z0d2FyZSUyMGludGVyZmFjZSUyMHRpbWVsaW5lJTIwa2V5ZnJhbWVzfGVufDF8fHx8MTc2NTI2MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: <Settings2 className="text-white" size={24} />,
  },
  {
    id: 2,
    tag: "AUDIO",
    title: "多轨道背景音乐",
    desc: "提供多轨道背景音乐选择，并支持调整音量、淡入淡出等参数，以匹配不同场景氛围。",
    image:
      "https://images.unsplash.com/photo-1493078770291-aa3109c60ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1peGVyJTIwc291bmQlMjB3YXZlJTIwZXF1YWxpemVyJTIwbXVzaWMlMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2NTI2MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: <Music className="text-white" size={24} />,
  },
  {
    id: 3,
    tag: "Subtitle",
    title: "字幕样式与定位",
    desc: "丰富专业的字幕样式、大小、颜色、描边、阴影等参数均可自由调节，实现高定制化字幕效果。",
    image: imgSubtitle,
    icon: <Type className="text-white" size={24} />,
  },
  {
    id: 4,
    tag: "COVER",
    title: "视频封面自定义",
    desc: "支持上传自定义封面或从已生成帧中选择，作为作品的首图展示。",
    image:
      "https://images.unsplash.com/photo-1657100820362-71a6e31d9465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGdhbGxlcnklMjB2aWRlbyUyMHRodW1ibmFpbHN8ZW58MXx8fHwxNzY1MjYxMTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: <ImageIcon className="text-white" size={24} />,
  },
  {
    id: 5,
    tag: "TRANSITION",
    title: "转场动画选择",
    desc: "提供多种转场动画效果，用于分镜切换时的平滑过渡。",
    image:
      "https://images.unsplash.com/photo-1735804398127-c16f4cd0f78d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vdGlvbiUyMGJsdXIlMjBjaW5lbWF0aWMlMjBsaWdodCUyMHRyYWlscyUyMHRyYW5zaXRpb258ZW58MXx8fHwxNzY1MjYxMTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: <ArrowLeftRight className="text-white" size={24} />,
  },
];

const AssetCard = ({ item }: { item: (typeof assets)[0] }) => {
  const [gifIndex, setGifIndex] = useState(0);
  const isTargetCard = item.id === 1;

  useEffect(() => {
    if (!isTargetCard) return;
    const interval = setInterval(() => {
      setGifIndex((prev) => (prev + 1) % GIF_ASSETS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isTargetCard]);

  return (
    <div className="flex flex-col gap-6 w-[300px] md:w-[480px] shrink-0 group select-none snap-center">
      {/* Card Visual */}
      <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[#7C86FF]/20 border border-white/5 bg-[#1a1f2e]">
        {item.id === 2 ? (
          <MusicScrollVisual />
        ) : item.id === 5 ? (
          <TransitionEffectsVisual />
        ) : item.id === 4 ? (
          <VideoCoverVisual />
        ) : (
          <>
            <img
              key={isTargetCard ? `gif-${gifIndex}` : undefined}
              src={
                isTargetCard ? GIF_ASSETS[gifIndex] : item.image
              }
              alt={item.title}
              className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 ${
                item.id === 3 ? "object-fill" : "object-cover"
              }`}
            />
            {!isTargetCard && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90" />
            )}
          </>
        )}

        {item.id === 5 && (
          <div className="absolute top-6 left-6 right-6 pointer-events-none z-40">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest text-white/80 uppercase">
                {item.tag}
              </span>
            </div>
          </div>
        )}

        {item.id !== 5 && (
          <div className="absolute top-6 left-6 right-6 pointer-events-none">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest text-white/80 uppercase">
                {item.tag}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Text Info - Moved Below */}
      <div className="flex flex-col gap-[12px] items-center px-[16px] mt-6 w-full">
        <h3 className="font-['MiSans',sans-serif] font-semibold text-[24px] leading-[32px] text-white text-center">
          {item.title}
        </h3>
        <p className="font-['PingFang_SC',sans-serif] text-[14px] leading-[22px] text-white/70 text-center w-full max-w-[448px]">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export const FeatureAssets = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Mouse position (0 to 1), initialized at center (0.5)
  const mouseX = useMotionValue(0.5);
  // Smooth mouse value for silky interaction
  const smoothMouse = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current && containerRef.current) {
        setContentWidth(contentRef.current.scrollWidth);
        setWindowWidth(window.innerWidth);
      }
    };

    // Initial delay to ensure images loaded/layout stable
    setTimeout(handleResize, 100);

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the maximum scroll distance (negative value)
  // We add some padding (e.g. 100px) so the list doesn't touch the very edges abruptly
  const maxScroll = Math.min(
    0,
    windowWidth - contentWidth - 100,
  );

  const isMobile = windowWidth < 768;
  const x = useTransform(
    smoothMouse,
    [0, 1],
    [50, maxScroll - 50],
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX } = e;
    const { innerWidth } = window;
    const nX = clientX / innerWidth;
    mouseX.set(nX);
  };

  return (
    <SectionWrapper
      id="assets"
      className="bg-[#0f1012] overflow-hidden min-h-screen flex flex-col justify-center py-20 relative cursor-grab active:cursor-grabbing"
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 mb-12 relative z-10 flex flex-col items-center gap-[12px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center gap-[12px]"
        >
          {/* Paragraph */}
          <div
            className="h-[30px] relative shrink-0 w-full"
            data-name="Paragraph"
          >
            <div
              className="absolute bg-[rgba(57,117,254,0.1)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] px-[20px] py-[6px] rounded-[21px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]"
              data-name="Container"
            >
              <div
                className="relative shrink-0"
                data-name="Container"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
                  <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53a4ff] text-[18px] text-nowrap whitespace-pre">
                    全流程创作工具
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div
            className="h-auto md:h-[70px] relative shrink-0 w-full flex justify-center mb-6 md:mb-0"
            data-name="Heading 2"
          >
            <div className="md:absolute md:content-stretch flex flex-col md:flex-row gap-[6px] md:gap-[12px] items-center md:leading-[70px] md:left-[calc(50%-0.5px)] not-italic text-3xl md:text-[48px] text-center md:text-nowrap md:top-0 md:translate-x-[-50%] md:whitespace-pre">
              <p className="font-bold font-['MiSans',sans-serif] relative shrink-0 text-white">
                专业级后期
              </p>
              <p
                className="bg-clip-text bg-gradient-to-r from-[#51a2ff] relative shrink-0 to-[#ffffff] font-['MiSans',sans-serif] font-bold"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                无缝直通剪映
              </p>
            </div>
          </div>

          <p className="font-['PingFang_SC:Regular',sans-serif] text-[#99a1af] text-[16px] md:text-[18px] leading-[27px] text-center max-w-2xl mx-auto">
            从精细化剪辑到一键发布，为您提供完整的视频创作解决方案。
          </p>
        </motion.div>
      </div>

      {/* Interactive Horizontal Scroll Area */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`w-full relative z-20 py-10 ${isMobile ? "overflow-x-auto px-4 hide-scrollbar snap-x snap-mandatory" : ""}`}
      >
        <motion.div
          ref={contentRef}
          style={isMobile ? {} : { x }}
          className={`flex gap-4 md:gap-8 ${isMobile ? "" : "px-8 w-max"}`}
        >
          {assets.map((item) => (
            <AssetCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Hint Text */}
      <div className="text-center text-white/20 text-sm mt-8 animate-pulse">
        {isMobile
          ? "Swipe to explore features"
          : "Move cursor to explore features"}
      </div>
    </SectionWrapper>
  );
};