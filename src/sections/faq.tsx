import { ChevronDown } from "lucide-react";
import { SectionEyebrow } from "@/components/brand";
import { Reveal } from "@/components/reveal";

const questions = [
  { q: "What can I include in a roofing estimate?", a: "Add the job information and costs that make sense for your work. SupeQuote brings those inputs into the estimate so you can review the price and expected margin." },
  { q: "How does SupeQuote help me understand profit?", a: "SupeQuote shows job cost, recommended selling price, estimated profit, and net margin together. The result depends on the figures and assumptions you enter, so review them before sending a quote." },
  { q: "Can I send a quote to my customer?", a: "Yes. You can prepare a customer-facing quote from an estimate and share it for the customer to review." },
  { q: "Can a customer accept a quote online?", a: "Customers can open a public quote and accept it online. You can then see the quote’s acceptance reflected with the estimate." },
  { q: "How do I get started?", a: "Create an account, add your company details for customer quotes, and start an estimate for a roofing job." },
  { q: "Can I keep track of estimates?", a: "Yes. The estimates area keeps your estimates together with their current status, so you can review what is ready, sent, or accepted." },
];

export function FAQ() {
  return <section id="faq" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
      <Reveal><SectionEyebrow>Questions, answered</SectionEyebrow><h2 className="max-w-[390px] text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-.065em] text-[#171421]">A few things contractors ask.</h2><p className="mt-4 max-w-[340px] text-[14px] leading-6 text-[#706b7a]">A clear view of what happens from estimate to customer response.</p></Reveal>
      <Reveal delay={.08} className="divide-y divide-[#eae7ee] border-y border-[#eae7ee]">
        {questions.map(({ q, a }) => <details key={q} className="group py-0">
          <summary className="flex min-h-[62px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-[13px] font-semibold text-[#302b39] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed] [&::-webkit-details-marker]:hidden">{q}<span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#e9e4ed] text-[#777080] transition-transform duration-200 group-open:rotate-180 group-open:border-[#d7c6e9] group-open:text-[#7541bd]"><ChevronDown size={14} /></span></summary>
          <div className="max-w-[610px] pb-5 pr-10 text-[13px] leading-6 text-[#706b7a]">{a}</div>
        </details>)}
      </Reveal>
    </div>
  </section>;
}
