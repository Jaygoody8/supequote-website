import { ProductPreview } from "@/components/product-preview";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/brand";

const story = [
  { title: "Job details", symbol: "01" },
  { title: "Materials + labor", symbol: "02" },
  { title: "Selling price", symbol: "03" },
  { title: "Profit + margin", symbol: "04" },
  { title: "Customer quote", symbol: "05" },
];

export function Credibility() {
  return <section className="relative overflow-hidden bg-[#fbf9fd] px-5 py-24 sm:px-8 sm:py-32">
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[38%] h-[46%] opacity-50" style={{ backgroundImage: "radial-gradient(rgba(124,58,237,.19) .7px, transparent .7px)", backgroundSize: "14px 14px", maskImage: "linear-gradient(to right, transparent, black 14%, black 86%, transparent)" }} />
    <div className="relative mx-auto max-w-[1320px]">
      <Reveal className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div><SectionEyebrow>Inside SupeQuote</SectionEyebrow><h2 className="max-w-[675px] text-[clamp(2.35rem,4.5vw,4rem)] font-semibold leading-[1.01] tracking-[-.07em] text-[#171421]">Everything you need to price the job with confidence.</h2></div>
        <p className="max-w-[365px] text-[13px] leading-6 text-[#706b7b]">Job details, costs, selling price, and margin—together in the estimate workflow.</p>
      </Reveal>
      <Reveal delay={.08}>
        <div className="relative px-0 sm:px-3 lg:px-8">
          <ProductPreview className="max-w-[1000px]" />
        </div>
      </Reveal>
      <Reveal delay={.14} className="relative mx-auto mt-8 max-w-[1100px]">
        <div className="absolute left-[7%] right-[7%] top-[15px] hidden h-px bg-[#d7c7e8] sm:block" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-5 sm:gap-0">
          {story.map((step, index) => <div key={step.symbol} className={`relative flex items-start gap-2.5 ${index === story.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
            <span className="relative z-10 grid size-[30px] shrink-0 place-items-center rounded-full border border-[#dccbec] bg-[#fbf9fd] text-[9px] font-semibold tabular-nums text-[#7541bd]">{step.symbol}</span>
            <span className="pt-1 text-[10px] font-medium text-[#5f5969] sm:text-[11px]">{step.title}</span>
          </div>)}
        </div>
      </Reveal>
    </div>
  </section>;
}
