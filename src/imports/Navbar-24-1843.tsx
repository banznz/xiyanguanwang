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

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[6.8px] shrink-0 w-[96px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-[96px]">
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] text-nowrap whitespace-pre">首页</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[6.8px] shrink-0 w-[96px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-[96px]">
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] text-nowrap whitespace-pre">剧本解析</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[6.8px] shrink-0 w-[96px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-[96px]">
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] text-nowrap whitespace-pre">角色引擎</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[6.8px] shrink-0 w-[96px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-[96px]">
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] text-nowrap whitespace-pre">高级制作</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[6.8px] shrink-0 w-[96px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-[96px]">
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] text-nowrap whitespace-pre">管理系统</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] h-[36px] items-start relative">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[36px] relative rounded-[100px] shrink-0 w-[104px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[36px] relative w-[104px]">
        <p className="absolute font-['PingFang_SC:Medium',sans-serif] leading-[20px] left-[52px] not-italic text-[14px] text-center text-nowrap text-white top-[8px] translate-x-[-50%] whitespace-pre">立即开始</p>
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
          <Container1 />
          <Button />
        </div>
      </div>
    </div>
  );
}