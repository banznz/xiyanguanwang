import svgPaths from "./svg-i2u0nyead5";
import imgImageStoryboard from "figma:asset/54869a89d87901f5c9e4467191eef897f047443c.png";
import imgImageAdvancedControls from "figma:asset/94122485645dfd5634a1797996908d41941261fb.png";
import imgImageDynamicComic from "figma:asset/c1b8cae1f370ba26427c626362ef6df234a152b1.png";

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col font-['MiSans',sans-serif] font-semibold gap-[2px] items-center leading-[normal] not-italic px-[192px] py-0 relative text-[48px] text-center text-nowrap w-full whitespace-pre">
          <p className="relative shrink-0 text-white">不仅是生成，更是</p>
          <p className="relative shrink-0 text-[#00d3f2]">电影级创作</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center left-[256px] top-[20px] w-[768px]" data-name="Container">
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#00b8db] text-[16px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">精细化制作</p>
      <Heading />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#99a1af] text-[18px] text-nowrap whitespace-pre">提供全套高级控制功能，从分镜设计到最终成片，每一个细节都尽在掌握。</p>
    </div>
  );
}

function ImageStoryboard() {
  return (
    <div className="absolute h-[478px] left-0 top-0 w-[382px]" data-name="Image (Storyboard)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageStoryboard} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-t from-[#000000] h-[478px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.5)] w-[382px]" data-name="Container" />;
}

function FeatureProduction() {
  return (
    <div className="absolute h-[478px] left-px top-px w-[382px]" data-name="FeatureProduction">
      <ImageStoryboard />
      <Container1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p7484a00} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2cd42b80} id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p255d4c64} id="Vector_3" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2382af00} id="Vector_4" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(0,184,219,0.2)] content-stretch flex items-center justify-center left-0 rounded-[3.35544e+07px] size-[40px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[32px] left-0 top-[56px] w-[318px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 whitespace-pre">电影级分镜</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[40px] left-0 top-[96px] w-[318px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-0 w-[308px]">自动规划镜头景别序列，精巧设计运镜方式，让叙事更具专业感。</p>
    </div>
  );
}

function FeatureProduction1() {
  return (
    <div className="absolute h-[136px] left-[33px] top-[311px] w-[318px]" data-name="FeatureProduction">
      <Container2 />
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-[#101828] grow h-full min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <FeatureProduction />
        <FeatureProduction1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function ImageAdvancedControls() {
  return (
    <div className="absolute h-[478px] left-0 top-0 w-[382px]" data-name="Image (Advanced Controls)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAdvancedControls} />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-gradient-to-t from-[#000000] h-[478px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.5)] w-[382px]" data-name="Container" />;
}

function FeatureProduction2() {
  return (
    <div className="absolute h-[478px] left-px top-px w-[382px]" data-name="FeatureProduction">
      <ImageAdvancedControls />
      <Container4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M11.6667 14.1667H4.16667" id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 5.83333H8.33333" id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p10325580} id="Vector_3" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p15dbd840} id="Vector_4" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(0,184,219,0.2)] content-stretch flex items-center justify-center left-0 rounded-[3.35544e+07px] size-[40px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[32px] left-0 top-[56px] w-[318px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 whitespace-pre">高级视听控制</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[40px] left-0 top-[96px] w-[318px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-0 w-[308px]">转场动画、关键帧、背景音乐、智能字幕，支持全自动或手动精细化配置。</p>
    </div>
  );
}

function FeatureProduction3() {
  return (
    <div className="absolute h-[136px] left-[33px] top-[311px] w-[318px]" data-name="FeatureProduction">
      <Container5 />
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-[#101828] grow h-full min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <FeatureProduction2 />
        <FeatureProduction3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function ImageDynamicComic() {
  return (
    <div className="absolute h-[478px] left-0 top-0 w-[382px]" data-name="Image (Dynamic Comic)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageDynamicComic} />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-gradient-to-t from-[#000000] h-[478px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.5)] w-[382px]" data-name="Container" />;
}

function FeatureProduction4() {
  return (
    <div className="absolute h-[478px] left-px top-px w-[382px]" data-name="FeatureProduction">
      <ImageDynamicComic />
      <Container7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cec7ff0} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p38772900} id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c195100} id="Vector_3" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(0,184,219,0.2)] content-stretch flex items-center justify-center left-0 rounded-[3.35544e+07px] size-[40px] top-0" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[32px] left-0 top-[56px] w-[318px]" data-name="Heading 4">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 whitespace-pre">动态漫画演绎</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[40px] left-0 top-[96px] w-[318px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-0 w-[308px]">不仅是视频，更支持生成动态漫画与图片演绎，多样化叙事呈现。</p>
    </div>
  );
}

function FeatureProduction5() {
  return (
    <div className="absolute h-[136px] left-[33px] top-[311px] w-[318px]" data-name="FeatureProduction">
      <Container8 />
      <Heading3 />
      <Paragraph2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 bg-[#101828] grow h-full min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <FeatureProduction4 />
        <FeatureProduction5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[480px] items-start left-[32px] top-[248px] w-[1216px]" data-name="Container">
      <Container3 />
      <Container6 />
      <Container9 />
    </div>
  );
}

export default function FeatureProduction6() {
  return (
    <div className="relative size-full" data-name="FeatureProduction">
      <Container />
      <Container10 />
    </div>
  );
}