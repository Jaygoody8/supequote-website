import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/brand";

const freeFeatures = [
  "3 estimates per month",
  "Profit & margin calculations",
  "Recommended pricing",
  "Customer quotes",
  "Public quote links",
  "Customer acceptance",
];

const proFeatures = [
  "Unlimited estimates",
  "Unlimited customer quotes",
  "Profit & margin calculations",
  "Recommended pricing",
  "Public quote links",
  "Customer acceptance",
  "Estimate history",
  "Duplicate estimates",
  "Company branding",
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5 border-t border-[#efebf2] pt-5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[12px] leading-[18px] text-[#595463]">
          <span className="mt-px grid size-[17px] shrink-0 place-items-center rounded-full bg-[#f1eafb] text-[#7541bd]">
            <Check size={11} strokeWidth={2.4} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PricingEntry() {
  return (
    <section id="pricing" className="bg-[#faf9fc] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-12">
        <Reveal className="max-w-[440px]">
          <SectionEyebrow>Pricing</SectionEyebrow>
          <h2 className="max-w-[490px] text-[clamp(2.3rem,4.4vw,3.8rem)] font-semibold leading-[1.03] tracking-[-.065em] text-[#171421]">
            Simple pricing. Better margins.
          </h2>
          <p className="mt-5 max-w-[410px] text-[14px] leading-6 text-[#706c7b]">
            Start free. Upgrade when you’re ready to estimate more jobs and keep your pricing workflow moving.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-4 md:grid-cols-2">
          <Reveal className="flex min-w-0 flex-col rounded-[20px] border border-[#e5e1e9] bg-white p-5 sm:p-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.15em] text-[#777180]">Free</p>
              <p className="mt-2 text-[12px] leading-5 text-[#706b7a]">For contractors getting started with SupeQuote.</p>
              <p className="mt-5 flex items-baseline gap-1.5 text-[#171421]"><span className="text-[38px] font-semibold leading-none tracking-[-.07em]">$0</span><span className="text-[12px] text-[#777180]">/ month</span></p>
              <p className="mt-2 text-[11px] leading-4 text-[#777180]">Free every month · no time-limited trial.</p>
              <FeatureList items={freeFeatures} />
            </div>
            <Link href="https://app.supequote.com/signup" className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#dcd6e3] bg-white px-5 text-[13px] font-semibold text-[#393545] transition hover:border-[#bca4d7] hover:bg-[#fcfaff] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7c3aed]">
              Start Free
            </Link>
          </Reveal>

          <Reveal delay={.08} className="relative flex min-w-0 flex-col rounded-[20px] border border-[#d9c8eb] bg-white p-5 shadow-[0_14px_38px_rgba(58,37,81,.07)] sm:p-6">
            <span className="absolute right-5 top-5 rounded-full bg-[#f3edf9] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.1em] text-[#7043a5] sm:right-6 sm:top-6">Most popular</span>
            <div>
              <p className="pr-24 text-[10px] font-semibold uppercase tracking-[.15em] text-[#7043a5]">Pro</p>
              <p className="mt-2 text-[12px] leading-5 text-[#706b7a]">For contractors who estimate jobs regularly.</p>
              <p className="mt-5 flex items-baseline gap-1.5 text-[#171421]"><span className="text-[38px] font-semibold leading-none tracking-[-.07em]">$49</span><span className="text-[12px] text-[#777180]">/ month</span></p>
              <p className="mt-2 text-[11px] font-medium leading-4 text-[#7043a5]">Save 20% with annual billing · $39/mo</p>
              <p className="mt-1 text-[11px] leading-4 text-[#777180]">Billed annually at $468/year.</p>
              <FeatureList items={proFeatures} />
            </div>
            <Link href="https://app.supequote.com/signup" className="group mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#7c3aed] px-5 text-[13px] font-semibold text-white shadow-[0_5px_16px_rgba(124,58,237,.16)] transition hover:bg-[#6d28d9] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7c3aed]">
              Get Pro <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </Reveal>
        </div>
      </div>

      <Reveal delay={.12} className="mx-auto mt-9 max-w-[1240px] border-t border-[#e7e2eb] pt-5 text-center">
        <p className="text-[13px] font-medium tracking-[-.01em] text-[#514a5d]">One better-priced job can pay for months of SupeQuote.</p>
      </Reveal>
    </section>
  );
}
