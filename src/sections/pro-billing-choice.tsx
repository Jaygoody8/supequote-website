"use client";

import { useState } from "react";
import Link from "next/link";

type BillingPlan = "monthly" | "annual";

function isBillingPlan(value: string): value is BillingPlan {
  return value === "monthly" || value === "annual";
}

export function ProBillingChoice() {
  const [plan, setPlan] = useState<BillingPlan>("monthly");
  const checkoutContinuationUrl = `https://app.supequote.com/billing/continue?plan=${plan}`;

  return (
    <div className="mt-6 space-y-3">
      <label htmlFor="pro-billing-plan" className="block text-[11px] font-medium text-[#595463]">
        Choose billing interval
      </label>
      <select
        id="pro-billing-plan"
        value={plan}
        onChange={(event) => {
          if (isBillingPlan(event.target.value)) setPlan(event.target.value);
        }}
        className="min-h-11 w-full rounded-xl border border-[#dcd6e3] bg-white px-3 text-[12px] font-medium text-[#393545] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
      >
        <option value="monthly">Monthly — $49/month</option>
        <option value="annual">Annual — $468/year, billed annually</option>
      </select>
      <Link href={checkoutContinuationUrl} className="group inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#7c3aed] px-5 text-[13px] font-semibold text-white shadow-[0_5px_16px_rgba(124,58,237,.16)] transition hover:bg-[#6d28d9] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7c3aed]">
        Get Pro <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
      </Link>
    </div>
  );
}
