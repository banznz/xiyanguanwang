function Image() {
  return (
    <div className="absolute h-[483px] left-px top-px w-[695px]" data-name="Image (剧本智能拆解)">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/93d78db7ec488b09e0e7005735086aca64644f18" />
      </video>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-gradient-to-b from-[#0f1012] h-[483px] left-px opacity-20 to-[rgba(0,0,0,0)] top-px via-50% via-[rgba(0,0,0,0)] w-[695px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute bg-[#0f1012] h-[484px] left-1/2 overflow-clip rounded-[28px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[696px]" data-name="Container">
      <Image />
      <Container />
    </div>
  );
}

export default function FeatureRow() {
  return (
    <div className="bg-[#151515] border border-[rgba(255,255,255,0.05)] border-solid overflow-clip relative rounded-[32px] size-full" data-name="FeatureRow">
      <Container1 />
    </div>
  );
}