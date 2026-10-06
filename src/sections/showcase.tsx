import { Check, FileText, Layers3, Send } from "lucide-react";
import { SectionEyebrow } from "@/components/brand";
import { CustomerQuotePreview, EstimatesPreview } from "@/components/product-preview";
import { Reveal } from "@/components/reveal";

export function Showcase() {
  return <section className="overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto max-w-[1240px]">
      <Reveal className="grid gap-6 md:grid-cols-[.9fr_1.1fr] md:items-end">
        <div><SectionEyebrow>Made to move the job forward</SectionEyebrow><h2 className="max-w-[520px] text-[clamp(2.2rem,4.4vw,3.8rem)] font-semibold leading-[1.04] tracking-[-.065em] text-[#171421]">From your estimate to their decision.</h2></div>
        <p className="max-w-[430px] justify-self-start text-[14px] leading-6 text-[#706c7b] md:justify-self-end">Keep estimates easy to review on your side, then give your customer a clear quote to consider.</p>
      </Reveal>
      <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-12">
        <Reveal><EstimatesPreview /></Reveal>
        <Reveal delay={.1} className="flex flex-col items-center gap-5 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
          <div className="max-w-[240px] self-start sm:self-center lg:self-start xl:self-center"><p className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#926bc5]">For your customer</p><h3 className="mt-2 text-[22px] font-semibold leading-tight tracking-[-.05em] text-[#211d2a]">A quote that feels as considered as the work.</h3><p className="mt-3 text-[12px] leading-5 text-[#797483]">Share the job, the price, and a clear next step in a customer-facing quote.</p><div className="mt-5 space-y-2.5 text-[10px] font-medium text-[#5c5765]"><p className="flex items-center gap-2"><Check size={13} className="text-[#7541bd]" />Professional quote preview</p><p className="flex items-center gap-2"><Check size={13} className="text-[#7541bd]" />Customer can review and respond</p></div></div>
          <CustomerQuotePreview />
        </Reveal>
      </div>
      <Reveal className="mt-14 grid gap-3 border-t border-[#ece9f0] pt-6 sm:grid-cols-3">
        <div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-lg bg-[#f2ecfb] text-[#7541bd]"><Layers3 size={15} /></span><div><p className="text-[10px] font-semibold text-[#393444]">Estimate in one place</p><p className="mt-0.5 text-[9px] text-[#878291]">Review the job and its pricing</p></div></div>
        <div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-lg bg-[#f2ecfb] text-[#7541bd]"><FileText size={15} /></span><div><p className="text-[10px] font-semibold text-[#393444]">A polished quote</p><p className="mt-0.5 text-[9px] text-[#878291]">Present the estimate clearly</p></div></div>
        <div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-lg bg-[#f2ecfb] text-[#7541bd]"><Send size={15} /></span><div><p className="text-[10px] font-semibold text-[#393444]">Ready to share</p><p className="mt-0.5 text-[9px] text-[#878291]">Continue the conversation</p></div></div>
      </Reveal>
    </div>
  </section>;
}
