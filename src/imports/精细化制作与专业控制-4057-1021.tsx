import imgImage18 from "figma:asset/e393b0088a83d2103180fd7bb06e50cadbdd6ced.png";
import imgImage19 from "figma:asset/9a4114f44778e98c0528ea9d9f87a70e46a4dcc0.png";
import imgImage20 from "figma:asset/1a4d8e0df96c19064730e30c1786eb1898c19759.png";

export default function Component() {
  return (
    <div className="relative size-full" data-name="精细化制作与专业控制">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[268px] items-start justify-center px-[49px] py-[103px] relative size-full">
          <div className="relative shrink-0 size-[64px]" data-name="image 18">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage18} />
          </div>
          <div className="relative shrink-0 size-[64px]" data-name="image 19">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage19} />
          </div>
          <div className="relative shrink-0 size-[64px]" data-name="image 20">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage20} />
          </div>
        </div>
      </div>
    </div>
  );
}