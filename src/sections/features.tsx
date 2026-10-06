import { Calculator, FileCheck2, Gauge, ListChecks, Send, ShieldCheck } from "lucide-react";
import { SectionEyebrow } from "@/components/brand";
import { Reveal } from "@/components/reveal";

const items = [
  { number: "01", icon: Calculator, label: "ESTIMATE", title: "Start with the work in front of you.", text: "Create an estimate around the roofing job, then build up the costs that inform your price." },
  { number: "02", icon: Gauge, label: "PRICE", title: "See the margin behind the number.", text: "Review recommended selling price, estimated profit, and net margin together." },
  { number: "03", icon: FileCheck2, label: "PRESENT", title: "Make the quote feel professional.", text: "Turn the estimate into a clear customer-facing quote they can review." },
  { number: "04", icon: ListChecks, label: "FOLLOW THROUGH", title: "Keep your estimates organized.", text: "Review estimates and see their status as you work through each opportunity." },
];

export function Features() {
  return <section id="features" className="px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto max-w-[1240px]">
      <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionEyebrow>Made for the work</SectionEyebrow><h2 className="max-w-[560px] text-[clamp(2.2rem,4.3vw,3.75rem)] font-semibold leading-[1.04] tracking-[-.065em] text-[#171421]">A little less guesswork at every step.</h2></div><p className="max-w-[390px] text-[14px] leading-6 text-[#706c7b]">Practical tools for the estimating and quoting work behind roofing jobs.</p></Reveal>
      <div className="mt-12 grid gap-x-12 border-y border-[#e6e2eb] md:grid-cols-2 md:gap-x-16">
        {items.map((item, index) => { const Icon = item.icon; return <Reveal key={item.number} delay={(index % 2) * .08} className={`group grid grid-cols-[46px_1fr] gap-4 py-6 sm:grid-cols-[54px_1fr] sm:gap-5 ${index < 2 ? "md:border-b md:border-[#e6e2eb]" : ""}`}>
          <div className="grid size-11 place-items-center rounded-xl border border-[#e8e2ef] bg-white text-[#7948bd] transition duration-200 group-hover:border-[#d3c0eb] group-hover:bg-[#f8f4fd] sm:size-12"><Icon size={18} strokeWidth={1.55} /></div>
          <div><div className="flex items-center gap-2"><span className="text-[10px] font-semibold tracking-[.14em] text-[#9473ba]">{item.number}</span><span className="h-px w-4 bg-[#d9cbe8]" /><span className="text-[10px] font-semibold tracking-[.14em] text-[#807989]">{item.label}</span></div><h3 className="mt-2 text-[17px] font-semibold tracking-[-.035em] text-[#2a2634]">{item.title}</h3><p className="mt-2 max-w-[400px] text-[13px] leading-6 text-[#706b7a]">{item.text}</p></div>
        </Reveal>; })}
      </div>
      <Reveal className="mt-7 flex flex-col gap-4 rounded-2xl border border-[#e8e3ec] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"><div className="flex items-start gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#f2ecfb] text-[#7541bd]"><ShieldCheck size={17} /></span><div><p className="text-[12px] font-semibold text-[#393444]">Your numbers, clearly in view.</p><p className="mt-1 text-[11px] leading-5 text-[#827c8a]">Estimate costs and review the resulting pricing before preparing your customer quote.</p></div></div><span className="inline-flex items-center gap-2 pl-12 text-[10px] font-semibold uppercase tracking-[.12em] text-[#756d7e] sm:pl-0"><Send size={13} className="text-[#8659c1]" />Estimate to quote</span></Reveal>
    </div>
  </section>;
}
