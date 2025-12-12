import imgImage21 from "figma:asset/2ecbffc9985fbe8e35f9b83430d9b55519a1caa9.png";
import imgImage22 from "figma:asset/c1d19375b27c8e02136d36089acc14a6b8e831b2.png";

export default function Component() {
  return (
    <div className="relative size-full" data-name="文本转视觉的">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[268px] items-start justify-center px-[49px] py-[103px] relative size-full">
          <div className="relative shrink-0 size-[64px]" data-name="image 21">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage21} />
          </div>
          <div className="relative shrink-0 size-[64px]" data-name="image 22">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage22} />
          </div>
        </div>
      </div>
    </div>
  );
}