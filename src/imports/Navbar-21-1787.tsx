import imgImage1 from "figma:asset/0d1aa5c1acc4ce3311c71fc1098aca6de7af6581.png";

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-[151px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[36px] items-center relative w-[151px]">
        <div className="aspect-[943/299] h-full relative shrink-0" data-name="image 1">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
          <div className="aspect-[943/299] bg-clip-padding border-0 border-[transparent] border-solid size-full" />
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-[36px] items-center justify-center overflow-clip px-[60px] py-[15px] relative rounded-[21px] shrink-0 w-[128px]" data-name="Menu">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">首页</p>
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip px-[60px] py-[15px] relative rounded-[36px] shrink-0 w-[128px]" data-name="Menu">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">剧本解析</p>
    </div>
  );
}

function Menu2() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip px-[60px] py-[15px] relative rounded-[36px] shrink-0 w-[128px]" data-name="Menu">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">角色引擎</p>
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip px-[60px] py-[15px] relative rounded-[36px] shrink-0 w-[128px]" data-name="Menu">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">高级制作</p>
    </div>
  );
}

function Menu4() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center overflow-clip px-[60px] py-[15px] relative rounded-[36px] shrink-0 w-[128px]" data-name="Menu">
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">管理系统</p>
    </div>
  );
}

function Menu5() {
  return (
    <div className="bg-[rgba(255,255,255,0.01)] relative rounded-[27px] shrink-0" data-name="Menu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[4px] relative">
        <Menu />
        <Menu1 />
        <Menu2 />
        <Menu3 />
        <Menu4 />
      </div>
    </div>
  );
}

function Fill() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[1000px] shrink-0 w-full" data-name="Fill" style={{ backgroundImage: "linear-gradient(151.726deg, rgb(48, 58, 255) 8.3445%, rgb(76, 164, 255) 75.66%), linear-gradient(90deg, rgb(57, 117, 254) 0%, rgb(57, 117, 254) 100%)" }}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-0 relative size-full">
          <p className="font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">立即开始</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.6px] border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_239px_67px_0px_rgba(0,0,0,0),0px_10px_21px_0px_rgba(0,0,0,0.14),0px_38px_38px_0px_rgba(0,0,0,0.12),0px_86px_52px_0px_rgba(0,0,0,0.08),0px_153px_61px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[50px] relative rounded-[1000px] shrink-0 w-[164px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[50px] items-start p-[4px] relative w-[164px]">
        <Fill />
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="relative size-full" data-name="Navbar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-0 pr-[0.016px] py-0 relative size-full">
          <Container />
          <Menu5 />
          <Button />
        </div>
      </div>
    </div>
  );
}