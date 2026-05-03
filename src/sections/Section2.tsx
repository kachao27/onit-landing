import { Dithering } from '@paper-design/shaders-react';
import AvatarPurple from './AvatarPurple';

function ChatBubble({
  bg,
  children,
  name,
  role,
  dark,
}: {
  bg: string;
  children: React.ReactNode;
  name: string;
  role: string;
  dark?: boolean;
}) {
  return (
    <div className="relative w-[round(50%,1px)] my-6">
      <div className="inline-flex max-w-full relative rounded-2xl py-2 px-4 gap-2" style={{ background: bg }}>
        <div className="max-w-full text-[#191919] font-['Inter_Tight',system-ui,sans-serif] font-medium text-base/5">
          {children}
        </div>
        <div className="h-[18px] -left-0.5 absolute -top-0.5 w-[18px] rounded-full" style={{ background: bg }} />
        <div className="-left-1.5 absolute -top-1.5 rounded-full size-1.5" style={{ background: bg }} />
      </div>
      <div className="items-center flex mt-2 gap-1">
        <div className="text-[#5C5C5C] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-sm/5">
          {name}
        </div>
        <div className="text-[#5C5C5C] font-['Inter',system-ui,sans-serif] text-sm/5">•</div>
        <div className="text-[#5C5C5C] font-['Inter_Tight',system-ui,sans-serif] text-sm/5">{role}</div>
      </div>
      <div
        className="rounded-full w-[42px] h-[42px] absolute -top-3 -left-12 flex items-center justify-center"
        style={{ background: bg }}
      >
        <AvatarPurple dark={dark} />
      </div>
    </div>
  );
}

function ScreenshotCard({ src, height = 552 }: { src: string; height?: number }) {
  return (
    <div
      className="flex justify-center relative w-[976px] rounded-2xl pt-10 overflow-clip [box-shadow:#0000000D_0px_1px_2px] shrink-0 px-10"
      style={{
        height,
        backgroundImage:
          'linear-gradient(in oklab 45deg, oklab(93.2% -0.025 -0.031 / 0%) 0%, oklab(75.2% -0.076 -0.123 / 20%) 100%)',
      }}
    >
      <Dithering
        speed={1}
        shape="sphere"
        type="4x4"
        size={2}
        scale={1.61}
        colorBack="#00000000"
        colorFront="#F8F8F8"
        className="w-[976px] h-[732px] absolute left-[50%] top-[50%]"
        style={{ translate: '-50% -50%' }}
      />
      <div
        className="rounded-xl absolute left-[50%] top-[50%] bg-cover bg-center [box-shadow:#0000000D_8px_-8px_0px]"
        style={{
          backgroundImage: `url(${src})`,
          width: 852,
          height: height - 100,
          translate: '-50% -50%',
        }}
      />
    </div>
  );
}

const platforms: { name: string; slug: string }[] = [
  { name: 'Shopify', slug: 'shopify' },
  { name: 'Zepto', slug: 'zepto' },
  { name: 'Blinkit', slug: 'blinkit' },
  { name: 'Amazon', slug: 'amazon' },
  { name: 'Flipkart', slug: 'flipkart' },
];

export default function Section2() {
  return (
    <section className="[font-synthesis:none] w-full h-[6200px] overflow-hidden relative antialiased text-xs/4 bg-[#F0F0F0]">
      {/* THE QUESTION header */}
      <div
        className="text-center tracking-[-0.01em] mix-blend-multiply top-[40px] left-[50%] absolute text-[#19191966] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-2xl/[30px]"
        style={{ translate: '-50%' }}
      >
        THE QUESTION
      </div>

      {/* "Unfortunately, D2C brands..." */}
      <div className="left-[50%] top-[146px] w-[689px] absolute" style={{ translate: '-50%' }}>
        <div
          className="[letter-spacing:-1.74px] text-center w-[598px] left-[50%] opacity-[0.6] absolute text-[#1E1E1E] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[40px]/[40px]"
          style={{ translate: '-50%' }}
        >
          Unfortunately, D2C brands can't keep their teams lean and scale at the same time
        </div>
      </div>

      {/* "Presenting Onit..." */}
      <div className="left-[50%] top-[282px] w-[689px] absolute" style={{ translate: '-50%' }}>
        <div
          className="[letter-spacing:-1.74px] text-center top-0 left-[50%] w-[598px] absolute text-[#191919] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[40px]/[40px]"
          style={{ translate: '-50%' }}
        >
          Presenting Onit, an AI operations team for lean D2C brands. It
        </div>
        <div
          className="[letter-spacing:-1.74px] text-center opacity-[0.6] top-[82px] left-[50%] w-[598px] absolute text-[#1E1E1E] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[40px]/[40px]"
          style={{ translate: '-50%' }}
        >
          understands how the business works across catalog, storefront, campaigns, support, and internal communication, and executes work where teams already operate.
        </div>
      </div>

      {/* Brain in action heading + agent conversation */}
      <div
        className="flex flex-col gap-8 left-[50%] top-[749px] w-[976px] absolute"
        style={{ translate: '-50%' }}
      >
        <div className="flex flex-col w-full gap-2">
          <div className="text-[#6D5273] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-base/7">
            Brain in action
          </div>
          <div className="[letter-spacing:-0.5px] text-[#191919] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[40px]/[54.4px]">
            The agents coordinate and act in real time
          </div>
        </div>

        <ChatBubble bg="#E1DBE3" name="Yashwik Ahuja" role="Founder, onit">
          @opsagent help me understand the inventory health across my top 3 platforms
        </ChatBubble>
        <ChatBubble bg="#DBDBDB" name="Agent Org" role="Ops Agent, onit" dark>
          on it.
        </ChatBubble>

        <ScreenshotCard src="https://app.paper.design/file-assets/01KPAK0NQ7N61HMB5WPEXK7FP2/01KPCRHXM0W8WCA3JKCKSC1STE.png" />

        <div className="flex flex-col w-full gap-2">
          <div className="[letter-spacing:-0.5px] text-black font-['Inter_Tight',system-ui,sans-serif] font-semibold text-xl/7">
            Your Company's Observatory.
          </div>
          <div className="text-[#5C5C5C] font-['Inter_Tight',system-ui,sans-serif] font-medium text-base/5">
            Coordinates work, context, and execution across your entire business.
          </div>
        </div>

        <ChatBubble bg="#DBDBDB" name="Agent Org" role="Coding Agent, onit" dark>
          Done. gone for approval to @maulikkhanna16!
        </ChatBubble>

        <ScreenshotCard src="https://app.paper.design/file-assets/01KPAK0NQ7N61HMB5WPEXK7FP2/01KPCSEXYKW8NGEWV2ZX04BC39.png" />

        <div className="flex flex-col w-full gap-2">
          <div className="[letter-spacing:-0.5px] text-black font-['Inter_Tight',system-ui,sans-serif] font-semibold text-xl/7">
            Snap Actions.
          </div>
          <div className="text-[#5C5C5C] font-['Inter_Tight',system-ui,sans-serif] font-medium text-base/5">
            Saving you time is our priority. And chat actions is the way we achieve that. Chat on Slack or WhatsApp, you can ask them to code, plan or manage.
          </div>
        </div>

        <ChatBubble bg="#E1DBE3" name="Yashwik Ahuja" role="Founder, onit">
          Help me plan Blinkit dispatch plan for tomorrow
        </ChatBubble>
        <ChatBubble bg="#DBDBDB" name="Agent Org" role="Ops Agent, onit" dark>
          Done. Blinkit dispatch plan — 80 units BLKPRT
        </ChatBubble>

        <ScreenshotCard src="https://app.paper.design/file-assets/01KPAK0NQ7N61HMB5WPEXK7FP2/01KPCT1BK74NXM5SK4D5RSKX0D.png" />

        <div className="flex flex-col w-full gap-2">
          <div className="[letter-spacing:-0.5px] text-black font-['Inter_Tight',system-ui,sans-serif] font-semibold text-xl/7">
            3-Day TAT reduced to 3 seconds. Magic.
          </div>
          <div className="text-[#5C5C5C] font-['Inter_Tight',system-ui,sans-serif] font-medium text-base/5">
            While other brands can assign their tasks to their interns and wait for eternity. Onit gives you the luxury of autonomous agency.
          </div>
        </div>
      </div>

      {/* "Work picked up from anywhere..." headline */}
      <div className="left-[50%] top-[3644px] w-[689px] absolute" style={{ translate: '-50%' }}>
        <div
          className="[letter-spacing:-1.74px] text-center w-[636px] top-0 left-[50%] opacity-[0.6] absolute text-[#1E1E1E] font-['Inter_Tight',system-ui,sans-serif] font-bold text-[40px]/[40px]"
          style={{ translate: '-50%' }}
        >
          Work picked up from anywhere, carried across systems, and improved with every task
        </div>
      </div>

      {/* Two cards: Operations handled / Self learning workflow */}
      <div
        className="flex left-[50%] top-[3828px] items-start gap-[66px] absolute"
        style={{ translate: '-50%' }}
      >
        {[
          {
            title: 'Operations handled where the team talks.',
            body: "Operations teams are reluctant and they haven't even adopted to Slack yet. So, we thought rather we'd enter their workplace and get work done for them.",
            img: 'https://app.paper.design/file-assets/01KPAK0NQ7N61HMB5WPEXK7FP2/01KPCWTSZMWSGZRH9P4MHZBFX7.png',
          },
          {
            title: 'Self learning workflow',
            body: 'Everyone makes mistakes. AI will too. What matters is how fast it learns. Onit’s self-healing agents learn from every action, adapt their workflows, and continuously reduce repeat errors.',
            img: 'https://app.paper.design/file-assets/01KPAK0NQ7N61HMB5WPEXK7FP2/01KPCWTJY574JNTA24PZHFRS5M.png',
          },
        ].map((c) => (
          <div key={c.title} className="flex items-start w-[455px] flex-col shrink-0">
            <div
              className="flex h-[296px] justify-center relative w-full rounded-2xl pt-10 overflow-clip [box-shadow:#0000000D_0px_1px_2px] shrink-0 px-10"
              style={{
                backgroundImage:
                  'linear-gradient(in oklab 45deg, oklab(93.2% -0.025 -0.031 / 0%) 0%, oklab(75.2% -0.076 -0.123 / 20%) 100%)',
              }}
            >
              <Dithering
                speed={1}
                shape="wave"
                type="4x4"
                size={3.7}
                scale={1}
                colorBack="#00000000"
                colorFront="#FFFFFF"
                className="w-[976px] h-[732px] absolute left-[50%] top-[50%] opacity-[0.4]"
                style={{ translate: '-50% -50%' }}
              />
              <div
                className="absolute left-[50%] top-[50%] bg-cover bg-center [outline:4px_solid_#00000033] rounded-xl"
                style={{
                  backgroundImage: `url(${c.img})`,
                  width: 411,
                  height: 174,
                  translate: '-50% -50%',
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch mt-6">
              <div className="flex flex-col w-full gap-2">
                <div className="[letter-spacing:-0.5px] text-black font-['Inter_Tight',system-ui,sans-serif] font-semibold text-xl/7">
                  {c.title}
                </div>
              </div>
              <div className="text-pretty self-stretch text-[#5C5C5C] font-['Inter_Tight',system-ui,sans-serif] font-medium text-base/5">
                {c.body}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer dithering wave — full bleed */}
      <Dithering
        speed={1.05}
        shape="wave"
        type="4x4"
        size={6.3}
        scale={1.17}
        colorBack="#00000000"
        colorFront="#02B3FF"
        className="w-full h-[732px] absolute left-0 bottom-0"
      />

      {/* Black "future state" panel — full bleed */}
      <div className="absolute top-[4260px] left-0 w-full h-[1000px] bg-[#080808]">
        <div className="absolute top-[56px] left-0 w-full text-center tracking-[0.16em] uppercase text-[#FFFFFF33] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-[11px]/[14px]">
          The future state
        </div>
        <div className="absolute top-[100px] left-[50%] w-[780px] -translate-x-1/2 text-center text-[54px] leading-[57px] [letter-spacing:-1.5px] text-white font-['Inter_Tight',system-ui,sans-serif] font-extrabold">
          An autonomous org that knows your company better than you do
        </div>
        <div className="absolute top-[286px] left-[50%] w-[600px] -translate-x-1/2 text-center text-[17px] leading-[27px] [letter-spacing:-0.2px] text-[#FFFFFF52] font-['Inter_Tight',system-ui,sans-serif] font-bold whitespace-pre-wrap">
          Gets your work done. Centralises everything. Scales without headcount.
          <br />
          <br />
          We start with the 10 workflows every D2C brand runs manually catalog syncs, price parity, order ops, demand shaping. Then we build the 10 workflows unique to your brand. Those custom agents don't stay custom
          <br />
          they become the next brand's starting line.
        </div>

        {/* Orbit diagram */}
        <svg viewBox="0 0 700 480" width="700" height="480" fill="none" style={{ position: 'absolute', top: 433, left: '50%', transform: 'translateX(-50%)' }}>
          <circle cx="350" cy="250" r="150" stroke="#FFFFFF12" strokeDasharray="3 8" />
          <circle cx="350" cy="250" r="48" fill="#FFFFFF08" stroke="#FFFFFF17" />
          <text x="350" y="258" textAnchor="middle" fontFamily="'Inter Tight',system-ui" fontSize="17" fontWeight="800" fill="#FFFFFFE6" letterSpacing="-0.5">ONIT</text>

          <circle cx="350" cy="100" r="3" fill="#FFFFFF4D" />
          <text x="350" y="65" textAnchor="middle" fontFamily="'Inter Tight',system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF73">Pricing parity</text>
          <text x="350" y="78" textAnchor="middle" fontFamily="'Inter Tight',system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF73">&amp; auto updates</text>

          <circle cx="493" cy="204" r="3" fill="#FFFFFF4D" />
          <text x="524" y="186" fontFamily="'Inter Tight',system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF73">Instant catalog</text>
          <text x="524" y="199" fontFamily="'Inter Tight',system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF73">updates</text>

          <circle cx="438" cy="371" r="3" fill="#FFFFFF4D" />
          <text x="461" y="397" fontFamily="'Inter Tight',system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF73">Sales design &amp;</text>
          <text x="461" y="410" fontFamily="'Inter Tight',system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF73">demand shaping</text>

          <circle cx="262" cy="371" r="3" fill="#FFFFFF4D" />
          <text x="238" y="397" textAnchor="end" fontFamily="'Inter Tight',system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF73">Warehouse</text>
          <text x="238" y="410" textAnchor="end" fontFamily="'Inter Tight',system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF73">management</text>

          <circle cx="207" cy="204" r="3" fill="#FFFFFF4D" />
          <text x="176" y="186" textAnchor="end" fontFamily="'Inter Tight',system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF73">One key account</text>
          <text x="176" y="199" textAnchor="end" fontFamily="'Inter Tight',system-ui" fontSize="11" fontWeight="600" fill="#FFFFFF73">manager</text>
        </svg>

        {/* Supporting platforms */}
        <div className="absolute top-[924px] left-0 w-full flex justify-center items-center gap-2.5">
          <div className="tracking-[0.12em] uppercase mr-1.5 text-[#FFFFFF2E] font-['Inter_Tight',system-ui,sans-serif] font-semibold text-[10px]/[12px]">
            SUPPORTING Platforms
          </div>
          {platforms.map((p) => (
            <div
              key={p.slug}
              className="rounded-[20px] py-1 px-3.5 border border-solid border-[#FFFFFF1F] flex items-center gap-1.5"
            >
              <img
                src={`https://cdn.simpleicons.org/${p.slug}/FFFFFF99`}
                alt=""
                width={12}
                height={12}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="text-[#FFFFFF66] font-['Inter_Tight',system-ui,sans-serif] font-medium text-xs/4">
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See how we are on it CTA */}
      <div
        className="items-center flex justify-center rounded-2xl py-3 px-16 top-[5364px] h-[64px] left-[50%] absolute bg-[#0E172A] border border-solid border-[#FFFFFF33] [outline:1px_solid_#202B42] cursor-pointer z-10"
        style={{ translate: '-50% -50%' }}
      >
        <div className="flex [letter-spacing:-0.2px] text-[#F0F0F0] font-['Inter_Tight',system-ui,sans-serif] font-bold text-base/[25.6px]">
          See how we are on it
        </div>
      </div>

      {/* Big ONIT wordmark at bottom */}
      <svg
        width="1362"
        height="193"
        viewBox="0 0 1362 193"
        fill="none"
        style={{ width: '1440px', maxWidth: '100%', height: 'auto', position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: -1, mixBlendMode: 'soft-light' }}
      >
        <path d="M643.9 192.559C606.177 192.559 574.112 185.84 547.705 172.402C521.299 158.963 508.096 142.43 508.096 122.803C508.096 103.176 521.299 86.643 547.705 73.204C574.112 59.766 606.177 53.047 643.9 53.047C681.966 53.047 714.031 59.766 740.095 73.204C766.501 86.643 779.704 103.176 779.704 122.803C779.704 142.43 766.501 158.963 740.095 172.402C714.031 185.84 681.966 192.559 643.9 192.559ZM586.8 152.774C602.233 160.731 621.266 164.71 643.9 164.71C666.534 164.71 685.567 160.731 700.999 152.774C716.432 144.817 724.148 134.827 724.148 122.803C724.148 110.779 716.432 100.789 700.999 92.832C685.567 84.875 666.534 80.896 643.9 80.896C621.266 80.896 602.233 84.875 586.8 92.832C571.368 100.789 563.652 110.779 563.652 122.803C563.652 134.827 571.368 144.817 586.8 152.774Z" fill="#FFFFFF" />
        <path d="M946.114 53.047C975.607 53.047 999.441 57.909 1017.62 67.635C1035.79 77.36 1044.88 90.71 1044.88 107.685V189.111H989.325V110.602C989.325 100.7 984.18 93.097 973.892 87.792C963.604 82.488 949.544 79.835 931.711 79.835C912.163 79.835 896.388 83.018 884.385 89.384C872.382 95.572 866.381 105.121 866.381 118.029V189.111H810.824V56.495H866.381V73.47C883.185 59.854 909.762 53.047 946.114 53.047Z" fill="#FFFFFF" />
        <path d="M1150.8 31.297C1143.94 34.834 1135.71 36.602 1126.11 36.602C1116.51 36.602 1108.1 34.834 1100.9 31.297C1094.04 27.584 1090.61 23.252 1090.61 18.301C1090.61 13.35 1094.04 9.106 1100.9 5.57C1107.76 1.857 1116.16 0 1126.11 0C1136.05 0 1144.45 1.857 1151.31 5.57C1158.17 9.106 1161.6 13.35 1161.6 18.301C1161.6 23.252 1158 27.584 1150.8 31.297ZM1098.33 189.111V56.495H1153.89V189.111H1098.33Z" fill="#FFFFFF" />
        <path d="M1361.91 84.079H1298.13V147.735C1298.13 153.216 1300.53 157.195 1305.33 159.67C1310.13 161.969 1317.16 163.295 1326.42 163.649C1336.02 163.826 1347.85 163.737 1361.91 163.384V189.111C1319.39 191.764 1288.87 189.907 1270.35 183.541C1251.83 176.999 1242.57 165.064 1242.57 147.735V84.079H1298.13V27.849L1361.91 84.079Z" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
