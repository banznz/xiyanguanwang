import svgPaths from "./svg-r0m8xhr5nu";
import imgIcon from "figma:asset/6381ad4844a9746424df4473e83737776f11fb59.png";
import img300 from "figma:asset/a8a75e841a7aaf78617538aadb5190f8c17f5e1d.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIcon} />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
      <Icon />
      <p className="bg-center bg-clip-text bg-cover bg-no-repeat font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: `url('${img300}')` }}>
        文本转视觉效率提升 300%
      </p>
    </div>
  );
}

function Badge() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(57,117,254,0.1)] content-stretch flex flex-col h-[34px] items-center justify-center pl-[12px] pr-[16px] py-[6px] relative rounded-[21px] shrink-0" data-name="Badge">
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col font-['MiSans',sans-serif] font-bold gap-[2px] items-start leading-[normal] not-italic relative shrink-0 text-[80px] text-nowrap w-full whitespace-pre" data-name="Heading 1">
      <p className="relative shrink-0 text-white">让小说文字</p>
      <p className="bg-clip-text bg-gradient-to-r from-[#51a2ff] relative shrink-0 to-[#ffffff]" style={{ WebkitTextFillColor: "transparent" }}>
        立即拥有生命力
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[40px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre">开始创作</p>
      <Icon1 />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Hero">
      <Badge />
      <Heading />
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#d1d5dc] text-[20px] w-[660px]">轻松将小说文本转化为漫画或动态视频。一键内容创作，从剧本拆解到角色演绎，全流程智能生成，开启内容创作新纪元。</p>
      <Button />
    </div>
  );
}