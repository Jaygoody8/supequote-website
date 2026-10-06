import { ArrowUpRight, House, Sparkles } from "lucide-react";
import { SectionEyebrow } from "@/components/brand";
import { Reveal } from "@/components/reveal";

export function Vision() {
  return <section className="overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
    <div className="relative mx-auto grid max-w-[1240px] gap-8 overflow-hidden rounded-[24px] border border-[#e7e1ed] bg-[#fbf9fd] p-6 sm:p-10 lg:grid-cols-[1fr_.7fr] lg:items-center lg:p-14">
      <div className="pointer-events-none absolute -right-16 -top-24 size-[300px] rounded-full bg-[radial-gradient(circle,rgba(195,169,231,.2)_0%,transparent_72%)]" />
      <Reveal className="relative z-10"><SectionEyebrow>Focused on roofing</SectionEyebrow><h2 className="max-w-[590px] text-[clamp(2.35rem,4.5vw,4rem)] font-semibold leading-[1.02] tracking-[-.068em] text-[#171421]">Built for roofing contractors.<br /><span className="text-[#7c3aed]">Ready for what’s next.</span></h2><p className="mt-5 max-w-[455px] text-[13px] leading-6 text-[#706c7b]">Start with a sharper way to estimate and quote roofing work. Keep your process clear as your business grows.</p></Reveal>
      <Reveal delay={.08} className="relative z-10 lg:justify-self-end"><div className="flex items-center gap-4 rounded-2xl border border-[#e8e2ed] bg-white p-5 shadow-[0_10px_28px_rgba(43,28,64,.05)] sm:p-6"><span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#f1ebfa] text-[#7441bb]"><House size={22} strokeWidth={1.5} /></span><div><p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#938d9b]">Built around the trade</p><p className="mt-1 text-[15px] font-semibold tracking-[-.035em] text-[#2b2735]">Roofing, from estimate to quote.</p></div><Sparkles size={15} className="ml-auto self-start text-[#a781d6]" /></div><p className="mt-3 flex items-center gap-1.5 pl-1 text-[10px] text-[#888291]">SupeQuote <ArrowUpRight size={12} className="text-[#8b5cf6]" /> A Supe Digital product</p></Reveal>
    </div>
  </section>;
}
