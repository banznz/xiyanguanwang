import imgImage8 from "figma:asset/e8bbcb79f4b03af2e68462e219f96b493649c894.png";
import imgImage9 from "figma:asset/1ed99343068f917ab7e7bf2968155144b6d146b0.png";
import imgImage10 from "figma:asset/a9dff6bca3d5d4e61a841369902cad9ce2c7922d.png";
import imgImage11 from "figma:asset/714601134d326eafde5e95b12e00574ae1b6d968.png";

export default function Component() {
  return (
    <div className="relative size-full" data-name="精细化制作与专业控制">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[268px] items-start justify-center px-[49px] py-[103px] relative size-full">
          <div className="relative shrink-0 size-[64px]" data-name="image 8">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
          </div>
          <div className="relative shrink-0 size-[64px]" data-name="image 9">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
          </div>
          <div className="relative shrink-0 size-[64px]" data-name="image 10">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
          </div>
          <div className="relative shrink-0 size-[64px]" data-name="image 11">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} />
          </div>
        </div>
      </div>
    </div>
  );
}