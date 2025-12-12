import imgImageHeroBackground from "figma:asset/841a6c239480ab2a325e32ebef4984191d1cd05f.png";
import imgImageHeroBackground1 from "figma:asset/6b98079722cde45f338c8d9f11566b7829167c92.png";
import imgImageHeroBackground2 from "figma:asset/f4c3115c0159c8e0f71e81b55b74184dcbb50187.png";

function ImageHeroBackground() {
  return (
    <div className="absolute h-[1080px] left-[-111px] opacity-[0.78] top-0 w-[2142px]" data-name="Image (Hero Background)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-60%] w-full" src={imgImageHeroBackground} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[170.64%] left-0 max-w-none top-[-70.19%] w-full" src={imgImageHeroBackground1} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[171.16%] left-0 max-w-none top-[-70.66%] w-full" src={imgImageHeroBackground2} />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-gradient-to-t from-[rgba(10,10,10,0.5)] h-[1080px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(10,10,10,0)] w-[1920px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-gradient-to-b from-[#0a0a0a] h-[1080px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[1920px]" data-name="Container" />;
}

export default function Hero() {
  return (
    <div className="relative size-full" data-name="Hero">
      <ImageHeroBackground />
      <Container />
      <Container1 />
    </div>
  );
}