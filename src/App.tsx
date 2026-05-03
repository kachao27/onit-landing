import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Section2 from './sections/Section2';
import OnitLogo from './sections/OnitLogo';

export default function App() {
  return (
    <div className="w-full overflow-x-hidden bg-[#F0F0F0]">
      {/* Top nav floating over hero */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[1440px] flex justify-between items-center px-10 z-20">
        <OnitLogo width={140} fill="#0F172A" />
        <button className="rounded-2xl px-5 py-2.5 bg-[#0E172A] border border-solid border-[#FFFFFF33] [outline:1px_solid_#202B42] text-[#F0F0F0] font-['Inter_Tight',system-ui,sans-serif] font-bold text-sm cursor-pointer">
          See Demo
        </button>
      </div>

      <Hero />
      <Problem />
      <Section2 />
    </div>
  );
}
