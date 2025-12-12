function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['MiSans',sans-serif] font-semibold leading-[32px] left-[224px] not-italic text-[24px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%] whitespace-pre">字幕样式与定位</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-0 relative size-full">
          <Heading />
          <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-center w-[448px]">丰富专业的字幕样式、大小、颜色、描边、阴影等参数均可自由调节，实现高定制化字幕效果。</p>
        </div>
      </div>
    </div>
  );
}