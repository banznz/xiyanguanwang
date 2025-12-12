import svgPaths from "./svg-8xsynlixpv";
import imgRectangle34629679 from "figma:asset/9b3dbe172d85438096ad7d1116b22679e68298c2.png";

function Frame1() {
  return (
    <div className="absolute left-1/2 size-[14.727px] top-[calc(50%+0.41px)] translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Frame 1312325612">
          <path d={svgPaths.pd99cd00} fill="var(--fill-0, white)" id="Star 3" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="relative rounded-[37.5px] shrink-0 size-[18px]" data-name="文字2">
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(21,21,21,0.3)] content-stretch flex gap-[4px] items-center left-1/2 px-[16px] py-[9px] rounded-[28px] top-[calc(50%+93px)] translate-x-[-50%] translate-y-[-50%]">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Component />
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre">系统智能选择</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#1f1f1f] border-[0.8px] border-[rgba(255,255,255,0.05)] border-solid h-[282px] left-[8px] overflow-clip rounded-[16px] top-[8px] w-[462px]">
      <div className="absolute inset-[-0.8px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle34629679} />
      </div>
      <Frame5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-1/2 size-[14.727px] top-[calc(50%+0.41px)] translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Frame 1312325612">
          <path d={svgPaths.pd99cd00} fill="var(--fill-0, white)" id="Star 3" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative rounded-[37.5px] shrink-0 size-[18px]" data-name="文字2">
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-gradient-to-r content-stretch flex from-[rgba(89,106,207,0.4)] gap-[4px] items-center px-[16px] py-[9px] relative rounded-[28px] shrink-0 to-[rgba(69,167,229,0.4)]">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Component1 />
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre">系统智能选择</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Frame">
          <path d={svgPaths.p6e74300} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="backdrop-blur-[2px] backdrop-filter bg-black content-stretch flex gap-[4px] items-center px-[16px] py-[9px] relative rounded-[28px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <Frame />
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-nowrap text-white whitespace-pre">我想自己上传</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-1/2 top-[215.2px] translate-x-[-50%]">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#1f1f1f] border-[0.8px] border-[rgba(255,255,255,0.05)] border-solid h-[282px] left-[8px] overflow-clip rounded-[16px] top-[8px] w-[462px]">
      <div className="absolute inset-[-0.8px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle34629679} />
      </div>
      <Frame8 />
    </div>
  );
}

export default function Image() {
  return (
    <div className="relative size-full" data-name="Image (视频封面自定义)">
      <Frame3 />
      <Frame4 />
    </div>
  );
}