import imgFeatureAnalysis from "figma:asset/aedeec87d2094987f838d1fe0da34a921fc43f01.png";

function FeatureAnalysis() {
  return (
    <div className="absolute h-[387px] left-0 top-px w-[625px]" data-name="FeatureAnalysis">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[160.98%] left-[-44.48%] max-w-none top-[-30.49%] w-[188.97%]" src={imgFeatureAnalysis} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#00c950] opacity-[0.877] relative rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-[8px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[137.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[16px] relative w-[137.281px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#d1d5dc] text-[12px] text-nowrap top-px whitespace-pre">Analyzing Script...</p>
      </div>
    </div>
  );
}

function FeatureAnalysis1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16px] items-center relative shrink-0 w-full" data-name="FeatureAnalysis">
      <Container />
      <Text />
    </div>
  );
}

function Container1() {
  return <div className="bg-[#2b7fff] h-[4px] shrink-0 w-full" data-name="Container" />;
}

function FeatureAnalysis2() {
  return (
    <div className="bg-[#364153] content-stretch flex flex-col h-[4px] items-start overflow-clip relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="FeatureAnalysis">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] content-stretch flex flex-col gap-[8px] h-[62px] items-start left-[32px] pb-px pt-[17px] px-[17px] rounded-[16.4px] top-[412px] w-[434px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <FeatureAnalysis1 />
      <FeatureAnalysis2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[389px] left-[-1px] top-[-1px] w-[625px]" data-name="Container">
      <FeatureAnalysis />
      <Container2 />
    </div>
  );
}

export default function FeatureAnalysis3() {
  return (
    <div className="bg-[#1a1f2e] border border-[rgba(255,255,255,0.1)] border-solid overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="FeatureAnalysis">
      <Container3 />
    </div>
  );
}