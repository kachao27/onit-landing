import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Section2 from './sections/Section2';

function Logo() {
  return (
    <svg width="80" height="22" viewBox="0 0 200 28" fill="none">
      <text x="0" y="22" fontFamily="'Inter Tight',system-ui" fontSize="22" fontWeight="800" letterSpacing="-0.5" fill="#191919">
        onit
      </text>
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] flex justify-center">
      <div className="relative w-[1440px]">
        {/* Top nav floating over hero */}
        <div className="absolute top-6 left-10 z-20">
          <Logo />
        </div>
        <div className="absolute top-5 right-10 z-20">
          <button className="rounded-2xl px-5 py-2.5 bg-[#0E172A] border border-solid border-[#FFFFFF33] [outline:1px_solid_#202B42] text-[#F0F0F0] font-['Inter_Tight',system-ui,sans-serif] font-bold text-sm cursor-pointer">
            See Demo
          </button>
        </div>

        <Hero />
        <Problem />
        <Section2 />
      </div>
    </div>
  );
}
