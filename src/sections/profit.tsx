import { ArrowRight, Check, CircleDollarSign } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/brand";

const costLines = [
  { label: "Materials", value: "$4,820", width: "57%", color: "bg-[#8050bd]" },
  { label: "Labor", value: "$2,100", width: "25%", color: "bg-[#a27bcf]" },
  { label: "Overhead", value: "$1,500", width: "18%", color: "bg-[#d0bee3]" },
];

export function ProfitStory() {
  return <section className="overflow-hidden bg-[#f0ebf7] px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-16">
      <Reveal>
        <SectionEyebrow>Make the margin visible</SectionEyebrow>
        <h2 className="max-w-[490px] text-[clamp(2.5rem,4.7vw,4.25rem)] font-semibold leading-[1.01] tracking-[-.07em] text-[#171421]">Don’t just know the price.<br /><span className="text-[#7140b7]">Know the profit.</span></h2>
        <p className="mt-5 max-w-[410px] text-[15px] leading-7 text-[#6d6679]">See the job cost beside your selling price, estimated profit, and net margin before you send the quote.</p>
        <div className="mt-7 flex items-center gap-2 text-[12px] font-medium text-[#605970]"><CircleDollarSign size={15} className="text-[#7541bd]" />Built from the numbers in your estimate.</div>
      </Reveal>
      <Reveal delay={.1}>
        <div className="overflow-hidden rounded-[22px] border border-[#ded5e9] bg-white shadow-[0_22px_55px_rgba(55,37,82,.11)]">
          <div className="flex items-center justify-between border-b border-[#eeeaf2] px-5 py-4 sm:px-6"><div><p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#918a9a]">Price & profit</p><p className="mt-1 text-[14px] font-semibold tracking-[-.02em] text-[#292434]">Architectural shingle replacement</p></div><span className="rounded-full bg-[#f3eff8] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.1em] text-[#76539e]">Sample job</span></div>
          <div className="px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex items-end justify-between gap-3"><div><p className="text-[10px] font-semibold uppercase tracking-[.13em] text-[#918a9a]">Job cost</p><p className="mt-1 text-[30px] font-semibold tracking-[-.06em] text-[#262231] sm:text-[36px]">$8,420</p></div><div className="pb-1 text-right"><p className="text-[10px] text-[#827b8c]">Cost breakdown</p><p className="mt-1 text-[11px] font-medium text-[#625c6c]">Materials · Labor · Overhead</p></div></div>
            <div className="mt-5 flex h-[9px] overflow-hidden rounded-full bg-[#f0edf3]">{costLines.map((line) => <span key={line.label} className={`${line.color} h-full`} style={{ width: line.width }} />)}</div>
            <div className="mt-3 grid grid-cols-3 gap-2">{costLines.map((line) => <div key={line.label}><div className="flex items-center gap-1.5"><span className={`size-2 rounded-full ${line.color}`} /><span className="text-[10px] text-[#6f6878]">{line.label}</span></div><p className="mt-1.5 text-[12px] font-semibold tabular-nums text-[#363140]">{line.value}</p></div>)}</div>
            <div className="my-5 flex items-center gap-3"><span className="h-px flex-1 bg-[#ebe7ef]" /><span className="rounded-full border border-[#e9e2f0] bg-[#faf8fc] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#766e7e]">Estimate calculation</span><span className="h-px flex-1 bg-[#ebe7ef]" /></div>
            <div className="grid grid-cols-2 border-y border-[#eeeaf2] sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_.8fr] sm:items-center">
              <div className="py-4 pr-3 sm:py-5"><p className="text-[10px] font-semibold uppercase leading-4 tracking-[.1em] text-[#807989]">Job cost</p><p className="mt-1.5 text-[clamp(1.25rem,2.3vw,1.75rem)] font-semibold tracking-[-.06em] tabular-nums text-[#282332]">$8,420</p></div>
              <div className="hidden place-items-center px-2 text-[#a38bbd] sm:grid"><ArrowRight size={15} /></div>
              <div className="border-l border-[#eeeaf2] py-4 pl-3 pr-3 sm:border-0 sm:py-5 sm:pl-0"><p className="text-[10px] font-semibold uppercase leading-4 tracking-[.1em] text-[#76589b]">Recommended price</p><p className="mt-1.5 text-[clamp(1.25rem,2.3vw,1.75rem)] font-semibold tracking-[-.06em] tabular-nums text-[#62339a]">$12,680</p></div>
              <div className="hidden place-items-center px-2 text-[#a38bbd] sm:grid"><ArrowRight size={15} /></div>
              <div className="border-t border-[#eeeaf2] py-4 pr-3 sm:border-0 sm:py-5"><p className="text-[10px] font-semibold uppercase leading-4 tracking-[.1em] text-[#807989]">Estimated profit</p><p className="mt-1.5 text-[clamp(1.25rem,2.3vw,1.75rem)] font-semibold tracking-[-.06em] tabular-nums text-[#62339a]">+$4,260</p></div>
              <div className="hidden place-items-center px-2 text-[#a38bbd] sm:grid"><ArrowRight size={15} /></div>
              <div className="border-l border-t border-[#eeeaf2] py-4 pl-3 sm:border-0 sm:py-5 sm:pl-0"><p className="text-[10px] font-semibold uppercase leading-4 tracking-[.1em] text-[#807989]">Net margin</p><p className="mt-1.5 text-[clamp(1.25rem,2.3vw,1.75rem)] font-semibold tracking-[-.06em] tabular-nums text-[#28834b]">33.6%</p></div>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-[#eeeaf2] pt-3 text-[9px] text-[#8a8492]"><Check size={12} className="text-[#2f9953]" />Illustrative figures shown for a sample estimate.</div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;
}
