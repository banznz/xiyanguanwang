function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53a4ff] text-[18px] text-nowrap whitespace-pre">全流程创作工具</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(57,117,254,0.1)] content-stretch flex items-center justify-center left-[calc(50%-0.5px)] px-[20px] py-[6px] rounded-[21px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Container">
      <Container />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[1488px]" data-name="Paragraph">
      <Container1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[calc(50%-0.5px)] not-italic text-[48px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%] whitespace-pre">
      <p className="font-bold font-['MiSans',sans-serif] leading-[70px] relative shrink-0 text-white">专业级后期</p>
      <p className="bg-clip-text bg-gradient-to-r font-['MiSans',sans-serif] font-bold from-[#51a2ff] leading-[50px] relative shrink-0 to-[#ffffff]" style={{ WebkitTextFillColor: "transparent" }}>
        无缝直通剪映
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[70px] left-0 top-[46px] w-[1488px]" data-name="Heading 2">
      <Frame />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[27px] left-[408px] top-[140px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[27px] left-[336px] not-italic text-[#99a1af] text-[18px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">从精细化剪辑到一键发布，为您提供完整的视频创作解决方案。</p>
    </div>
  );
}

export default function FeatureAssets() {
  return (
    <div className="relative size-full" data-name="FeatureAssets">
      <Paragraph />
      <Heading />
      <Paragraph1 />
    </div>
  );
}