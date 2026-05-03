import { Dithering } from '@paper-design/shaders-react';

export default function Hero() {
  return (
    <div className="[font-synthesis:none] w-[1440px] h-[974px] overflow-clip relative antialiased">
      <div
        className="w-[1440px] h-full object-[center_center] [background-position-x:50%] [background-position-y:55%] left-0 top-0 absolute bg-size-[auto,cover] bg-position-[0%_0%,50%_55%]"
        style={{
          backgroundImage:
            'linear-gradient(in oklab 180deg, oklab(95.5% 0 0 / 0%) 23.46%, oklab(95.5% 0 0) 100%), url(https://app.paper.design/file-assets/01KPAK0NQ7N61HMB5WPEXK7FP2/3JCD24ABPZE3GHNAYC1MB4E659.jpg)',
        }}
      />
      <Dithering
        speed={0.28}
        shape="warp"
        type="4x4"
        size={5.3}
        scale={1.38}
        colorBack="#00000000"
        colorFront="#FFFFFF33"
        className="w-[1440px] h-[974px] top-0 left-0 mix-blend-overlay absolute"
        style={{
          backgroundImage:
            'linear-gradient(in oklab 180deg, oklab(73.8% -0.066 -0.131) 0%, oklab(59% -0.064 -0.130 / 0%) 100%)',
        }}
      />
      <div className="[letter-spacing:-1.74px] mb-[45px] text-center w-[734px] top-[200px] left-[353px] absolute text-[#191919] font-['Inter_Tight',system-ui,sans-serif] font-bold whitespace-pre-wrap text-[64px]/[64px]">
        Make the work happen.<br />We'll handle the friction.
      </div>
      <div className="text-center w-[674px] tracking-[-0.04em] mix-blend-multiply top-[344px] left-[383px] absolute text-[#01010199] font-['Inter_Tight',system-ui,sans-serif] font-medium text-[24px]/[30px]">
        Onit gives home-grown Indian brands a team of contextual AI agents that handle the execution while your org stays lean.
      </div>
      <div
        className="items-center flex justify-center rounded-2xl py-3 px-16 top-[calc(50%+18px)] h-[64px] left-[50%] absolute bg-[#0E172A] border border-solid border-[#FFFFFF33] [outline:1px_solid_#202B42] cursor-pointer"
        style={{ translate: '-50% -50%' }}
      >
        <div className="flex [letter-spacing:-0.2px] text-[#F0F0F0] font-['Inter_Tight',system-ui,sans-serif] font-bold text-base/[25.6px]">
          See Demo
        </div>
      </div>
    </div>
  );
}
