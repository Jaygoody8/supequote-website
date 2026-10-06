import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function FinalCTA() {
  return <section className="px-5 py-20 sm:px-8 sm:py-28">
    <Reveal className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[24px] border border-[#e4d9ee] bg-[#f4eff9] px-6 py-12 text-center text-[#211a2b] sm:px-12 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#b695db] to-transparent" />
      <div className="relative mx-auto max-w-[730px]">
        <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#7848b7]">Make the next quote count</p>
        <h2 className="mt-4 text-[clamp(2.3rem,5vw,4.35rem)] font-semibold leading-[1.02] tracking-[-.07em]">Turn your next estimate into a better quote.</h2>
        <p className="mx-auto mt-4 max-w-[500px] text-[14px] leading-6 text-[#696275]">Keep the costs in view, understand your margin, and give your customer a quote that’s ready to review.</p>
        <div aria-label="Estimate to profit to quote" className="mx-auto mt-7 flex max-w-[390px] items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[.13em] text-[#766c81] sm:text-[10px]"><span className="inline-flex items-center gap-1.5"><CircleCheck size={13} className="text-[#7541bd]" />Estimate</span><ArrowRight size={12} className="text-[#9672bd]" /><span>Profit</span><ArrowRight size={12} className="text-[#9672bd]" /><span>Quote</span></div>
        <Link href="https://app.supequote.com/signup" className="group mt-7 inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#7c3aed] px-6 text-[13px] font-semibold text-white shadow-[0_7px_20px_rgba(124,58,237,.16)] transition hover:bg-[#6d28d9] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7c3aed]">Start estimating free <ArrowUpRight size={15} className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
      </div>
    </Reveal>
  </section>;
}
