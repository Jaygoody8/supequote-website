import { ArrowRight, Check, ChevronRight, CircleDollarSign, FileText, Send } from "lucide-react";
import { SectionEyebrow } from "@/components/brand";
import { Reveal } from "@/components/reveal";

const stages = [
  { number: "01", name: "Build your estimate", type: "ESTIMATE" },
  { number: "02", name: "Understand your costs", type: "COST" },
  { number: "03", name: "Price for profit", type: "PRICE + PROFIT" },
  { number: "04", name: "Send the quote", type: "QUOTE" },
];

export function Workflow() {
  return <section id="how-it-works" className="overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto max-w-[1240px]">
      <Reveal className="grid gap-6 md:grid-cols-[.85fr_1.15fr] md:items-end">
        <div><SectionEyebrow>How it works</SectionEyebrow><h2 className="max-w-[540px] text-[clamp(2.25rem,4.2vw,3.75rem)] font-semibold leading-[1.02] tracking-[-.065em] text-[#171421]">One job. A clearer path from start to send.</h2></div>
        <p className="max-w-[425px] justify-self-start text-[14px] leading-6 text-[#706c7b] md:justify-self-end">Follow the estimate as it moves from job details to costs, pricing, profit, and a customer-ready quote.</p>
      </Reveal>
      <div className="relative mt-10 border-y border-[#e7e2ec] sm:mt-14">
        <div className="absolute left-[6%] right-[6%] top-[29px] hidden h-px bg-[#d9cce8] xl:block" />
        <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage, index) => <Reveal key={stage.number} delay={index * .055} className={`relative min-w-0 py-6 md:px-5 md:py-7 xl:border-b-0 ${index < stages.length - 1 ? "border-b border-[#e7e2ec] md:border-b-0 xl:border-r" : ""} ${index % 2 === 0 ? "md:border-r" : "md:border-r-0"} ${index < 2 ? "md:border-b" : ""} ${index === 0 ? "md:pl-0" : ""} ${index === stages.length - 1 ? "border-b-0 md:pr-0" : ""}`}>
            <div className="relative z-10 flex items-center gap-2.5 md:mb-5"><span className="grid size-[30px] place-items-center rounded-full border border-[#dccbec] bg-[#f6f7f9] text-[10px] font-semibold tabular-nums text-[#7541bd]">{stage.number}</span><span className="text-[10px] font-semibold tracking-[.14em] text-[#80778b]">{stage.type}</span></div>
            <h3 className="mt-3 text-[16px] font-semibold tracking-[-.035em] text-[#2a2634]">{stage.name}</h3>
            {index === 0 && <div className="mt-4 rounded-xl border border-[#e9e5ed] bg-white p-3.5"><div className="grid grid-cols-2 gap-3"><div><p className="text-[9px] text-[#918b99]">CUSTOMER</p><p className="mt-1 text-[11px] font-semibold text-[#393444]">Jordan Ellis</p></div><div><p className="text-[9px] text-[#918b99]">PROPERTY</p><p className="mt-1 text-[11px] font-medium text-[#625c6b]">Lakewood, CO</p></div></div><p className="mt-3 border-t border-[#efecf1] pt-2.5 text-[9px] text-[#817b89]">Roof replacement · Sample job</p></div>}
            {index === 1 && <div className="mt-4 space-y-2 rounded-xl border border-[#e9e5ed] bg-white p-3.5"><p className="flex justify-between text-[10px] text-[#625c6b]"><span>Materials</span><span>$4,820</span></p><p className="flex justify-between text-[10px] text-[#625c6b]"><span>Labor</span><span>$2,100</span></p><p className="flex justify-between text-[10px] text-[#625c6b]"><span>Overhead</span><span>$1,500</span></p><p className="flex justify-between border-t border-[#efecf1] pt-2.5 text-[10px] font-semibold text-[#302b39]"><span>Job cost</span><span>$8,420</span></p></div>}
            {index === 2 && <div className="mt-4 rounded-xl border border-[#e3d8ef] bg-[#faf7fd] p-3.5"><p className="text-[9px] text-[#847b8e]">RECOMMENDED PRICE</p><p className="mt-1 text-[18px] font-semibold tracking-[-.05em] text-[#60329a]">$12,680</p><div className="mt-2.5 flex items-center justify-between border-t border-[#e9e0f1] pt-2.5"><span className="text-[9px] text-[#756d7e]">Profit</span><span className="text-[10px] font-semibold text-[#7042a9]">$4,260 <span className="ml-1 text-[#287e41]">· 33.6%</span></span></div></div>}
            {index === 3 && <div className="mt-4 rounded-xl border border-[#e9e5ed] bg-white p-3.5"><div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-[#f2ecfb] text-[#7541bd]"><FileText size={13} /></span><div><p className="text-[10px] font-semibold text-[#393444]">Customer quote</p><p className="text-[9px] text-[#8a8492]">Jordan Ellis · $12,680</p></div></div><div className="mt-3 flex items-center justify-between border-t border-[#efecf1] pt-2.5"><span className="flex items-center gap-1.5 text-[9px] font-medium text-[#666071]"><Check size={12} className="text-[#287e41]" />Ready to share</span><Send size={13} className="text-[#7850ae]" /></div></div>}
            {index < stages.length - 1 && <span aria-hidden="true" className="absolute bottom-[-7px] right-[-8px] z-10 hidden size-4 place-items-center bg-[#f6f7f9] text-[#9877bd] xl:grid"><ChevronRight size={15} /></span>}
          </Reveal>)}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-[#e7e2ec] py-4 text-[9px] font-semibold uppercase tracking-[.12em] text-[#817989] sm:py-4.5"><span>Estimate</span><ArrowRight size={11} className="text-[#936dbc]" /><span>Cost</span><ArrowRight size={11} className="text-[#936dbc]" /><span>Price</span><ArrowRight size={11} className="text-[#936dbc]" /><span>Profit</span><ArrowRight size={11} className="text-[#936dbc]" /><span>Quote</span><CircleDollarSign size={12} className="ml-1 text-[#8756bc]" /></div>
      </div>
    </div>
  </section>;
}
