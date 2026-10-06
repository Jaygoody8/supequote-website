import Link from "next/link";
import { ArrowUpRight, MoveDown } from "lucide-react";
import { ArrowMark, SectionEyebrow } from "@/components/brand";
import { ProductPreview } from "@/components/product-preview";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return <section id="top" className="relative overflow-hidden bg-[#faf9fc] px-5 pb-20 pt-[128px] sm:px-8 sm:pb-24 sm:pt-[154px]">
    <div className="pointer-events-none absolute -right-40 top-10 size-[480px] rounded-full bg-[radial-gradient(circle,rgba(196,168,241,.23)_0%,rgba(246,247,249,0)_69%)]" />
    <div className="pointer-events-none absolute left-[42%] top-[66%] size-[400px] rounded-full bg-[radial-gradient(circle,rgba(231,221,247,.35)_0%,rgba(246,247,249,0)_70%)]" />
    <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-5">
      <Reveal className="relative z-10 max-w-[555px]">
        <SectionEyebrow>Roofing estimates, made clearer</SectionEyebrow>
        <h1 className="text-[clamp(2.8rem,6.3vw,5.45rem)] font-semibold leading-[.96] tracking-[-.075em] text-[#11101a]">Estimate smarter.<br /><span className="text-[#7c3aed]">Quote faster.</span><br />Win more jobs.</h1>
        <p className="mt-6 max-w-[450px] text-[15px] leading-7 text-[#666374] sm:mt-7 sm:text-[16px]">SupeQuote helps roofing contractors create accurate estimates, protect their margins, and send professional quotes in minutes.</p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
          <Link href="https://app.supequote.com/signup" className="group inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#7c3aed] px-6 text-[13px] font-semibold text-white shadow-[0_8px_22px_rgba(124,58,237,.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#6d28d9] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7c3aed]">Start estimating free <ArrowMark /></Link>
          <Link href="#how-it-works" className="group inline-flex min-h-[50px] items-center justify-center rounded-full border border-[#dfdce5] bg-white/70 px-6 text-[13px] font-semibold text-[#393545] transition hover:border-[#c8b2e7] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7c3aed]">See how it works <ArrowMark diagonal /></Link>
        </div>
        <div className="mt-6 flex items-center gap-2 text-[11px] text-[#878393]"><span className="grid size-5 place-items-center rounded-full bg-[#eeebf3] text-[#6c6476]"><ArrowUpRight size={11} /></span>Built around the numbers behind every roofing job.</div>
      </Reveal>
      <Reveal delay={0.12} className="relative mx-auto w-full max-w-[840px] lg:ml-auto lg:translate-x-4 lg:translate-y-3">
        <ProductPreview className="max-w-[840px]" />
        <div className="mx-auto mt-8 flex max-w-[560px] items-center justify-between gap-2 px-2 text-[9px] font-semibold uppercase tracking-[.13em] text-[#827b8b] sm:text-[10px]">
          <span>Estimate</span><span className="h-px min-w-2 flex-1 bg-[#ddd6e7]" /><span>Cost</span><span className="h-px min-w-2 flex-1 bg-[#ddd6e7]" /><span>Price</span><span className="h-px min-w-2 flex-1 bg-[#cbb8df]" /><span className="text-[#7343bd]">Profit</span><span className="h-px min-w-2 flex-1 bg-[#ddd6e7]" /><span>Quote</span>
        </div>
      </Reveal>
    </div>
    <div className="relative mx-auto mt-[76px] hidden max-w-[1240px] items-center justify-between border-t border-[#e9e6ed] pt-5 text-[10px] font-medium text-[#777383] md:flex">
      <span className="uppercase tracking-[.13em] text-[#a19baa]">One clear workflow</span>
      <span className="flex items-center gap-2">From job details <MoveDown size={11} className="rotate-[-90deg] text-[#a19baa]" /> to a quote you can send</span>
    </div>
  </section>;
}
