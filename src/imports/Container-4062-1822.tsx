function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#53a4ff] text-[18px] text-nowrap whitespace-pre">角色驱动与高保真一致性</p>
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
    <div className="h-[30px] relative shrink-0 w-full" data-name="Paragraph">
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex font-['MiSans',sans-serif] font-bold gap-[6px] items-center justify-center leading-[50px] not-italic px-[450px] py-0 relative text-[48px] text-center text-nowrap w-full whitespace-pre">
          <p className="relative shrink-0 text-white">千人千面</p>
          <p className="bg-clip-text bg-gradient-to-r from-[#51a2ff] relative shrink-0 to-[#ffffff]" style={{ WebkitTextFillColor: "transparent" }}>
            始终如一
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[80px] px-0 relative size-full" data-name="Container">
      <Paragraph />
      <Heading />
    </div>
  );
}