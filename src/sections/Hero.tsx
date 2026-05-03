import { Dithering } from '@paper-design/shaders-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[974px] overflow-hidden antialiased">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            'linear-gradient(in oklab 180deg, oklab(95.5% 0 0 / 0%) 23.46%, oklab(95.5% 0 0) 100%), url(https://app.paper.design/file-assets/01KPAK0NQ7N61HMB5WPEXK7FP2/3JCD24ABPZE3GHNAYC1MB4E659.jpg)',
          backgroundPosition: '0% 0%, 50% 55%',
          backgroundSize: 'auto, cover',
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
        className="absolute inset-0 w-full h-full mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(in oklab 180deg, oklab(73.8% -0.066 -0.131) 0%, oklab(59% -0.064 -0.130 / 0%) 100%)',
        }}
      />

      {/* Centered content */}
      <div className="relative mx-auto w-[1440px] h-full">
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
    </section>
  );
}
