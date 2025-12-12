import imgImage46 from "figma:asset/bef7119bb2b7de501e8b89c00aeb32fa9fb7d37d.png";
import imgRectangle34629680 from "figma:asset/d57a231d469b87288296ed9a30d221bcc1a47b28.png";
import imgRectangle34629684 from "figma:asset/bbe6a567bec2fcfe262b09968028521ab5a02e3e.png";
import imgRectangle34629685 from "figma:asset/e51f6623ae5b12e24f9d038f154093c2db5597d6.png";
import imgRectangle34629686 from "figma:asset/c9def45613cbb1c615a9ac8c164ad03110632f91.png";

function Frame1() {
  return (
    <div className="absolute h-[49px] left-[336px] top-[4px] w-[118px]">
      <div className="absolute border border-[#f2f2f2] border-solid h-[49px] left-1/2 rounded-[28px] top-0 translate-x-[-50%] w-[118px]" />
      <p className="absolute font-['Inter:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] font-medium leading-[31px] left-1/2 not-italic text-[18px] text-center text-nowrap text-white top-[calc(50%-15.5px)] translate-x-[-50%] whitespace-pre">一键生图</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[57px] left-[30px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[458px]">
      <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[#f2f2f2] border-solid h-[57px] left-1/2 rounded-[28px] top-0 translate-x-[-50%] w-[458px]" />
      <Frame1 />
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[29.25px] left-[24px] not-italic text-[18px] text-nowrap text-white top-[14px] whitespace-pre">更改了发型的提示词</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#151515] border border-[rgba(255,255,255,0.15)] border-solid overflow-clip relative rounded-[24px] size-full">
      <div className="absolute left-[-1px] size-[520px] top-[-1px]" data-name="image 46">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage46} />
      </div>
      <div className="absolute h-[177px] left-1/2 rounded-[12px] top-[26px] translate-x-[-50%] w-[316px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[178.53%] left-0 max-w-none top-[-4.06%] w-full" src={imgRectangle34629680} />
        </div>
      </div>
      <Frame2 />
      <div className="absolute flex h-[216.123px] items-center justify-center left-[6.1px] top-[302.33px] w-[304.792px]" style={{ "--transform-inner-width": "276", "--transform-inner-height": "156" } as React.CSSProperties}>
        <div className="flex-none rotate-[346.499deg]">
          <div className="h-[156px] relative rounded-[12px] w-[276px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img alt="" className="absolute h-[176.92%] left-0 max-w-none top-[-13.08%] w-full" src={imgRectangle34629684} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[163.438px] items-center justify-center left-[111.39px] top-[312.02px] w-[280.135px]" style={{ "--transform-inner-width": "276", "--transform-inner-height": "156" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.556deg]">
          <div className="h-[156px] relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[276px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img alt="" className="absolute h-[176.92%] left-0 max-w-none top-[-21.4%] w-full" src={imgRectangle34629685} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[228.397px] items-center justify-center left-[209.01px] top-[296.76px] w-[309.08px]" style={{ "--transform-inner-width": "276", "--transform-inner-height": "156" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.613deg]">
          <div className="h-[156px] relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[276px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img alt="" className="absolute h-[132.69%] left-0 max-w-none top-[-16.35%] w-full" src={imgRectangle34629686} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}