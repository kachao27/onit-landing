import { ImageDithering } from '@paper-design/shaders-react';

const problems = [
  ['01', 'Coordination & chaos'],
  ['02', "Can't scale without headcount"],
  ['03', 'Too lean to even launch'],
  ['04', 'Skill gaps, budget constrained'],
  ['05', 'No proactive intelligence'],
  ['06', 'Context erosion at scale'],
  ['07', 'No continuous feedback loops'],
  ['08', 'High TAT on trivial tasks'],
];

export default function Problem() {
  return (
    <div className="[font-synthesis:none] w-[1440px] h-[1390px] overflow-clip relative bg-[#F0F0F0] antialiased">
      <ImageDithering
        originalColors={false}
        inverted={false}
        type="8x8"
        size={5.3}
        colorSteps={4}
        image="https://app.paper.design/file-assets/01KPAK0NQ7N61HMB5WPEXK7FP2/01KPCC2S3FFJ8JC2VA4GJXVDT2.svg"
        scale={0.8}
        fit="contain"
        colorBack="#00000000"
        colorFront="#BCBCBC"
        colorHighlight="#F0F0F0"
        className="-left-[246px] -top-[638px] w-[1932px] h-[1444px] absolute bg-[#F0F0F0]"
      />
      <div
        className="text-center tracking-[-0.01em] mix-blend-multiply top-[100px] left-[50%] absolute text-[#19191966] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-[24px]/[30px]"
        style={{ translate: '-50%' }}
      >
        THE PROBLEM
      </div>
      <div
        className="left-[calc(50%+2px)] top-[174px] w-[686px] h-[488px] absolute"
        style={{ translate: '-50%' }}
      >
        <div className="[letter-spacing:-1.74px] text-center w-[654px] -top-[4px] left-[9px] absolute text-[#1E1E1E] font-['Inter_Tight',system-ui,sans-serif] font-bold h-[240px] text-[80px]/[80px]">
          India's D2C Market has scaled itself to $100B.
        </div>
        <div
          className="[letter-spacing:-1.74px] text-center w-[686px] top-[244px] left-[50%] opacity-[0.4] absolute text-[#1E1E1E] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[80px]/[80px]"
          style={{ translate: '-50%' }}
        >
          But a closer look unravels its real challenges.
        </div>
      </div>
      <div className="absolute top-[671px] left-[240px] w-[960px] rounded-[40px] h-[400px] overflow-clip bg-[#F0F0F0] [border-width:1.5px] border-solid border-[#1E1E1E1A]">
        <div
          className="w-[1035px] h-[476px] [left:-44.5px] [top:-1.5px] mix-blend-difference absolute bg-cover bg-position-[50%_55.556%]"
          style={{
            backgroundImage:
              'url(https://app.paper.design/file-assets/01KPAK0NQ7N61HMB5WPEXK7FP2/01KPCESTZ4M20M76TMD08YS1RZ.png)',
          }}
        />
      </div>
      <div
        className="absolute top-[1110px] left-[50%] w-[1440px] h-[280px] bg-[#F0F0F0]"
        style={{ translate: '-50%' }}
      >
        <div className="absolute top-[51px] left-[80px] tracking-[0.14em] uppercase text-[#19191959] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-[11px]/[14px]">
          What breaks as you scale
        </div>
        <div className="absolute -top-[15px] left-[284px] tracking-[0.14em] uppercase text-[#191919B3] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[11px]/[14px]">
          10-Person team
        </div>
        <div className="absolute -top-[15px] left-[635px] tracking-[0.14em] uppercase text-[#191919B3] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[11px]/[14px]">
          50-Person team
        </div>
        <div className="absolute -top-[15px] left-[931px] tracking-[0.14em] uppercase text-[#191919B3] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[11px]/[14px]">
          &gt;100-Person team
        </div>
        <div className="absolute top-[84px] left-[80px] w-[1280px] h-px bg-[#19191926]" />

        {problems.slice(0, 4).map(([n, t], i) => (
          <div key={n} className="absolute top-[100px] w-[300px]" style={{ left: 80 + i * 320 }}>
            <div className="tracking-widest mb-1.5 text-[#1919194D] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-[10px]/[12px]">
              {n}
            </div>
            <div className="[letter-spacing:-0.3px] text-[#1E1E1E] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[17px]/[22px]">
              {t}
            </div>
          </div>
        ))}

        <div className="absolute top-[172px] left-[80px] w-[1280px] h-px bg-[#1919191A]" />

        {problems.slice(4).map(([n, t], i) => (
          <div key={n} className="absolute top-[188px] w-[300px]" style={{ left: 80 + i * 320 }}>
            <div className="tracking-widest mb-1.5 text-[#1919194D] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-[10px]/[12px]">
              {n}
            </div>
            <div className="[letter-spacing:-0.3px] text-[#1E1E1E] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[17px]/[22px]">
              {t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
