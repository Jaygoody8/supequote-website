import { ArrowRight, Minus } from "lucide-react";
import { SectionEyebrow } from "@/components/brand";
import { Reveal } from "@/components/reveal";

const costLines = [
  { label: "Materials", note: "Shingles, underlayment & flashing", value: "$4,820", width: "57%" },
  { label: "Labor", note: "Crew & installation", value: "$2,100", width: "25%" },
  { label: "Overhead", note: "Disposal, permits & other costs", value: "$1,500", width: "18%" },
];

export function Problem() {
  return <section className="bg-[#f6f7f9] px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
      <Reveal>
        <SectionEyebrow>Before the quote goes out</SectionEyebrow>
        <h2 className="max-w-[470px] text-[clamp(2.5rem,4.8vw,4.25rem)] font-semibold leading-[.99] tracking-[-.072em] text-[#171421]">Stop guessing what a job should cost.</h2>
        <p className="mt-5 max-w-[400px] text-[14px] leading-6 text-[#6d6679]">When costs are easy to miss and every estimate is different, it’s hard to know what the job will leave behind.</p>
        <div className="mt-7 space-y-3 border-t border-[#dcd3e6] pt-5 text-[12px] text-[#5f5969]">
          <p className="flex items-center gap-2.5"><Minus size={14} className="text-[#8861b2]" />Overlooked job costs</p>
          <p className="flex items-center gap-2.5"><Minus size={14} className="text-[#8861b2]" />Inconsistent pricing from one estimate to the next</p>
          <p className="flex items-center gap-2.5"><Minus size={14} className="text-[#8861b2]" />A quote that takes too long to prepare</p>
        </div>
      </Reveal>
      <Reveal delay={.08}>
        <div className="relative border-y border-[#dedee5] py-6 sm:py-8">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#e4e3e9] pb-5">
            <div><p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#7952ad]">Cost inputs · Sample job</p><p className="mt-2 text-[15px] font-medium tracking-[-.02em] text-[#302b39]">Architectural shingle replacement</p></div>
            <div className="sm:text-right"><p className="text-[10px] font-semibold uppercase tracking-[.13em] text-[#85808d]">Job cost</p><p className="mt-1 text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-.075em] tabular-nums text-[#211d2a]">$8,420</p></div>
          </div>
          <div className="mt-5 space-y-4">
            {costLines.map((line) => <div key={line.label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <div className="flex min-w-0 items-center gap-3"><span className="h-px shrink-0 bg-[#9a76c2]" style={{ width: `clamp(18px, ${line.width}, 86px)` }} /><div className="min-w-0"><p className="text-[13px] font-semibold text-[#373341]">{line.label}</p><p className="mt-0.5 text-[11px] leading-5 text-[#777280]">{line.note}</p></div></div>
              <span className="text-[14px] font-medium tabular-nums text-[#373341]">{line.value}</span>
            </div>)}
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-[#e4e3e9] pt-4 text-[10px] font-semibold uppercase tracking-[.13em] text-[#716b7a]"><span>Materials</span><span className="text-[#9b7cbd]">+</span><span>Labor</span><span className="text-[#9b7cbd]">+</span><span>Overhead</span><ArrowRight size={13} className="ml-auto text-[#8157b1]" /><span className="text-[#62339a]">Job cost</span></div>
          <p className="mt-4 text-[11px] leading-5 text-[#777280]">Illustrative sample values; amounts are not customer data.</p>
        </div>
      </Reveal>
    </div>
  </section>;
}
