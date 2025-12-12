import imgImage39 from "figma:asset/e3e15552ac224391646e9257a9733d79d1f8c725.png";
import imgImage40 from "figma:asset/b314270a42bbe0e214b63fabfb968192f05e4f9d.png";
import imgImage41 from "figma:asset/e362a04054685bd4c856079d8f7b8b60b2c8aba9.png";

function Container() {
  return (
    <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.4)] content-stretch flex items-center justify-center left-[12px] rounded-[16px] size-[32px] top-[12px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#121415] h-full relative rounded-[16px] shrink-0 w-[254px]">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[254px]">
        <Container />
        <div className="absolute bottom-0 h-[249px] left-0 w-[254px]" data-name="image 39">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage39} />
        </div>
        <p className="[white-space-collapse:collapse] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[52px] not-italic overflow-ellipsis overflow-hidden text-[14px] text-nowrap text-white top-[18px] w-[190px]">我在阁楼的樟木箱底翻到那张照片时，指尖先触到了一层薄薄的霉斑。</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.4)] content-stretch flex items-center justify-center left-[12px] rounded-[16px] size-[32px] top-[12px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#121415] h-full relative rounded-[16px] shrink-0 w-[254px]">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[254px]">
        <Container1 />
        <div className="absolute bottom-0 h-[249px] left-0 w-[254px]" data-name="image 40">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage40} />
        </div>
        <p className="[white-space-collapse:collapse] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[52px] not-italic overflow-ellipsis overflow-hidden text-[14px] text-nowrap text-white top-[18px] w-[190px]">昏黄的日光从老虎窗斜射进来，刚好落在照片边缘卷起的折痕上。</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.4)] content-stretch flex items-center justify-center left-[12px] rounded-[16px] size-[32px] top-[12px]" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#121415] h-full relative rounded-[16px] shrink-0 w-[254px]">
      <div className="h-full overflow-clip relative rounded-[inherit] w-[254px]">
        <Container2 />
        <div className="absolute bottom-0 h-[249px] left-0 w-[254px]" data-name="image 40">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage41} />
        </div>
        <p className="[white-space-collapse:collapse] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[52px] not-italic overflow-ellipsis overflow-hidden text-[14px] text-nowrap text-white top-[18px] w-[190px]">照片上是十七岁的我和阿柚，站在学校后门的老槐树下，</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[305px] items-center left-[32px] top-[147px]">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Content">
      <div className="-webkit-box font-['PingFang_SC:Regular',sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="mb-0">我在阁楼的樟木箱底翻到那张照片时，指尖先触到了一层薄薄的霉斑。昏黄的日光从老虎窗斜射进来，刚好落在照片边缘卷起的折痕上，像给褪色的画面镶了道金边。​</p>
        <p className="mb-0">照片上是十七岁的我和阿柚，站在学校后门的老槐树下。她扎着高马尾，额前碎发被风掀起，嘴角弯成月牙，手里举着半块融化的绿豆冰，糖汁顺着指缝滴在白色校服裙上，留下淡淡的黄渍。我站在她左边，校服领口扣得严严实实，表情僵硬得像块木板，却在镜头捕捉的瞬间，偷偷往她那边偏了偏肩膀。​</p>
        <p className="mb-0">最显眼的是照片右下角的水印 ——“夏日照相馆” 五个红色小字，带着年代感的楷体，边缘已经晕开，像被雨水打湿过。这是当年校门口最便宜的照相馆，十块钱两张，老板总说 “拍得多送水印，留个念想”。那时候我们总嘲笑这水印土气，发誓以后有钱了要去拍没有水印的艺术照，可直到毕业，这张带着红水印的照片，还是成了我们唯一的合影。​</p>
        <p className="mb-0">我用袖口轻轻擦掉照片上的浮尘，指腹抚过阿柚的笑脸，记忆突然就涌了上来。那天是高考结束的下午，蝉鸣聒噪得让人心慌，阿柚拉着我跑遍了半条街，非要找家照相馆留影。我别扭地推脱，说 “又不是再也见不到了”，她却突然红了眼眶，攥着我的手说：“万一呢？”​</p>
        <p className="mb-0">后来真的成了 “万一”。她考上了南方的大学，我留在北方的小城，起初还会隔着屏幕分享日常，后来渐渐被学业、工作填满，联系越来越淡，最后只剩下朋友圈里偶尔的点赞。那张照片被我夹在语文课本里，跟着我搬了三次家，最后被遗忘在阁楼的箱子里，连同十七岁的夏天一起蒙了尘。​</p>
        <p className="mb-0">我把照片拿到阳光下，试图看清水印背后模糊的背景。老槐树的叶子绿得发亮，远处的教学楼顶飘着国旗，还有两个穿着校服的身影，正勾着肩膀从树下走过。突然想起那天拍照时，阿柚悄悄在我耳边说：“以后想我的时候，就看看这张照片，水印是我们的秘密暗号。” 当时我嗤之以鼻，现在却对着那褪色的红小字，眼眶发热。​</p>
        <p className="mb-0">手机突然震动了一下，是陌生号码发来的短信：“我是阿柚，最近整理旧物，翻到了一张老照片，想问问你还好吗？”​</p>
        <p className="mb-0">我握着手机，看着照片上的水印，突然笑了。原来有些回忆，就像这褪色的水印，看似被时光掩盖，却从未真正消失。它藏在旧物的褶皱里，藏在不经意的瞬间，等着某一天被重新拾起，依然能唤起心底最柔软的悸动。​</p>
        <p>我回复短信：“我很好，刚好也找到了那张带水印的照片。” 发送成功的那一刻，阳光穿过树叶的缝隙，落在照片上，水印的红色仿佛又鲜艳了几分。</p>
      </div>
    </div>
  );
}

function InputBasic() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="*Input* / Basic">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
          <Content />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-0 border-[#e5e6eb] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function InputPrePostTab() {
  return (
    <div className="absolute bg-[#121415] h-[91px] left-1/2 rounded-[16px] top-[32px] translate-x-[-50%] w-[632px]" data-name="Input / Pre Post Tab">
      <div className="content-stretch flex flex-col h-[91px] items-start overflow-clip relative rounded-[inherit] w-[632px]">
        <InputBasic />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#0f1012] h-[484px] left-[7px] overflow-clip rounded-[28px] top-[7px] w-[696px]" data-name="Container">
      <div className="absolute h-[336px] left-0 top-[336px] w-[696px]">
        <div className="absolute inset-[-23.81%_-11.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856 496">
            <g filter="url(#filter0_f_4154_223)" id="Ellipse 3193">
              <ellipse cx="428" cy="248" fill="url(#paint0_linear_4154_223)" rx="348" ry="168" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="496" id="filter0_f_4154_223" width="856" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_4154_223" stdDeviation="40" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4154_223" x1="428" x2="428" y1="416" y2="80">
                <stop stopColor="#2B7FFF" stopOpacity="0.1" />
                <stop offset="1" stopColor="#00B8DB" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame />
      <InputPrePostTab />
    </div>
  );
}

export default function FeatureRow() {
  return (
    <div className="bg-[#151515] border border-[rgba(255,255,255,0.05)] border-solid overflow-clip relative rounded-[32px] size-full" data-name="FeatureRow">
      <Container3 />
    </div>
  );
}