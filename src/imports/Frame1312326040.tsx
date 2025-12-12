import svgPaths from "./svg-yuzrtymter";

function FeatureCharacter() {
  return (
    <div className="content-stretch flex flex-col font-['MiSans',sans-serif] font-semibold gap-[2px] items-start leading-[normal] relative shrink-0 text-[48px] text-nowrap w-full whitespace-pre" data-name="FeatureCharacter">
      <p className="relative shrink-0 text-white">千人千面</p>
      <p className="bg-clip-text bg-gradient-to-r from-[#7c86ff] relative shrink-0 to-[#c27aff]" style={{ WebkitTextFillColor: "transparent" }}>
        始终如一的灵魂
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#615fff] text-[16px] text-nowrap tracking-[0.4px] uppercase whitespace-pre">角色驱动</p>
      <FeatureCharacter />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[30px] relative shrink-0 text-[#99a1af] text-[18px] w-[558px]">独创角色锁定技术，确保主角在不同场景、不同镜头下始终保持形象一致。从外貌特征到声音特质，全方位赋予角色鲜活生命力。</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M16 11L18 13L22 9" id="Vector" stroke="var(--stroke-0, #7C86FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1d820380} id="Vector_2" stroke="var(--stroke-0, #7C86FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_3" stroke="var(--stroke-0, #7C86FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(79,57,246,0.2)] content-stretch flex items-center justify-center left-[24px] rounded-[3.35544e+07px] size-[48px] top-[24px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[190px] left-0 rounded-[16px] top-0 w-[276px]" data-name="Container">
      <Container />
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-[24px] not-italic text-[20px] text-nowrap text-white top-[88px] whitespace-pre">角色一致性锁定</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#99a1af] text-[14px] top-[124px] w-[210px]">稳定保持主角五官、服饰及体态特征，拒绝画面崩坏。</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pea68280} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p37320a40} id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d1eb80} id="Vector_3" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1cb08740} id="Vector_4" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 16H2.01" id="Vector_5" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p6db4240} id="Vector_6" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p6e21900} id="Vector_7" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p23ac1300} id="Vector_8" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p39743a80} id="Vector_9" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(152,16,250,0.2)] content-stretch flex items-center justify-center left-[24px] rounded-[3.35544e+07px] size-[48px] top-[24px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[190px] left-[300px] rounded-[16px] top-0 w-[276px]" data-name="Container">
      <Container2 />
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-[24px] not-italic text-[20px] text-nowrap text-white top-[88px] whitespace-pre">多维角色生成</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#99a1af] text-[14px] top-[124px] w-[224px]">通过文本描述或参考图生成角色，支持精细化调整与修改。</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 19V22" id="Vector" stroke="var(--stroke-0, #FB64B6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1fc92080} id="Vector_2" stroke="var(--stroke-0, #FB64B6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18608f80} id="Vector_3" stroke="var(--stroke-0, #FB64B6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(230,0,118,0.2)] content-stretch flex items-center justify-center left-[24px] rounded-[3.35544e+07px] size-[48px] top-[24px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[170px] left-0 rounded-[16px] top-[214px] w-[576px]" data-name="Container">
      <Container4 />
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-[24px] not-italic text-[20px] text-nowrap text-white top-[88px] whitespace-pre">角色形象语音</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[#99a1af] text-[14px] text-nowrap top-[124px] whitespace-pre">智能匹配角色声线，融合年龄、性格、情绪等多维度特征，让声音成为角色的灵魂。</p>
    </div>
  );
}

function FeatureCharacter1() {
  return (
    <div className="h-[384px] relative shrink-0 w-full" data-name="FeatureCharacter">
      <Container1 />
      <Container3 />
      <Container5 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative size-full">
      <Frame />
      <FeatureCharacter1 />
    </div>
  );
}