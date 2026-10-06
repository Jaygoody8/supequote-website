import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, CircleHelp, FileText, Home, Plus, Settings2 } from "lucide-react";
import { ProductBrand } from "@/components/brand";

const costs = [
  { name: "Materials", detail: "Shingles, underlayment & flashing", amount: "$4,820", color: "bg-violet-500" },
  { name: "Labor", detail: "Crew & installation", amount: "$2,100", color: "bg-blue-400" },
  { name: "Overhead", detail: "Disposal, permits & other costs", amount: "$1,500", color: "bg-amber-400" },
];

export function ProductPreview({ className = "max-w-[620px]" }: { className?: string }) {
  return (
    <div className={`product-frame relative mx-auto w-full rounded-[22px] border border-[#e4e0e9] bg-white p-2.5 shadow-[0_26px_70px_rgba(39,24,62,.13),0_4px_12px_rgba(39,24,62,.05)] sm:rounded-[26px] sm:p-3.5 ${className}`}>
      <div className="overflow-hidden rounded-[15px] border border-[#eeeaf2] bg-[#faf9fc] sm:rounded-[19px]">
        <div className="flex h-12 items-center justify-between border-b border-[#eeeaf2] bg-white px-3.5 sm:h-[54px] sm:px-5">
          <div className="flex items-center gap-2.5">
            <ProductBrand />
          </div>
          <div className="flex items-center gap-2.5 text-[10px] text-[#777284]"><span className="hidden sm:inline">Tuesday, May 12</span><span className="grid size-7 place-items-center rounded-full bg-[#f0eafd] text-[10px] font-semibold text-[#6431be]">JD</span></div>
        </div>
        <div className="grid min-h-[355px] grid-cols-[38px_minmax(0,1fr)] sm:min-h-[394px] sm:grid-cols-[49px_minmax(0,1fr)]">
          <aside aria-label="Product navigation preview" className="flex flex-col items-center gap-4 border-r border-[#eeeaf2] bg-white py-4 sm:gap-5 sm:py-5">
            <span className="grid size-7 place-items-center rounded-lg bg-[#f1eafe] text-[#7c3aed]"><Home size={14} /></span>
            <span className="text-[#a8a3b2]"><FileText size={14} /></span>
            <span className="text-[#a8a3b2]"><Settings2 size={14} /></span>
          </aside>
          <div className="min-w-0 p-3.5 sm:p-5">
            <div className="flex items-start justify-between gap-2">
              <div><p className="text-[10px] font-semibold uppercase tracking-[.13em] text-[#8b8496]">New estimate</p><h2 className="mt-1 text-[14px] font-semibold tracking-[-.035em] text-[#1d1927] sm:text-[17px]">Price with confidence</h2></div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#e7dafa] bg-[#f8f4fe] px-2 py-1 text-[9px] font-semibold text-[#6940a4]"><span className="size-1.5 rounded-full bg-[#8b5cf6]" />Draft</span>
            </div>
            <div className="mt-3.5 rounded-xl border border-[#ece8f0] bg-white p-3 sm:mt-4 sm:p-3.5">
              <div className="flex items-center justify-between gap-2"><div><p className="text-[9px] font-medium text-[#898394] sm:text-[10px]">CUSTOMER</p><p className="mt-1 text-[10px] font-semibold text-[#282332] sm:text-[11px]">Jordan Ellis</p></div><div className="text-right"><p className="text-[9px] font-medium text-[#898394] sm:text-[10px]">PROPERTY</p><p className="mt-1 truncate text-[10px] font-medium text-[#514c5a] sm:text-[11px]">Lakewood, CO</p></div><span className="hidden size-8 place-items-center rounded-lg bg-[#f5f2f9] text-[#7c3aed] sm:grid"><FileText size={14} /></span></div>
            </div>
            <div className="mt-3.5 flex items-center justify-between sm:mt-4"><div><p className="text-[11px] font-semibold text-[#282332] sm:text-xs">Job costs</p><p className="mt-0.5 text-[9px] text-[#8b8496] sm:text-[10px]">Materials, labor, and other costs</p></div><span aria-hidden="true" className="grid size-7 place-items-center rounded-lg border border-[#e8e3ef] bg-white text-[#6f42bd]"><Plus size={13} /></span></div>
            <div className="mt-2.5 space-y-1.5">
              {costs.map((cost) => <div key={cost.name} className="flex items-center justify-between gap-2 rounded-lg border border-[#efecf3] bg-white px-2.5 py-2 sm:px-3 sm:py-2.5"><div className="flex min-w-0 items-center gap-2"><span className={`size-1.5 shrink-0 rounded-full ${cost.color}`} /><div className="min-w-0"><p className="truncate text-[10px] font-semibold text-[#393445] sm:text-[11px]">{cost.name}</p><p className="hidden truncate text-[9px] text-[#9691a0] sm:block">{cost.detail}</p></div></div><span className="shrink-0 text-[10px] font-semibold tabular-nums text-[#302b39] sm:text-[11px]">{cost.amount}</span></div>)}
            </div>
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-[#ece8f0] bg-white p-2.5 sm:p-3"><p className="text-[9px] text-[#8b8496] sm:text-[10px]">TOTAL JOB COST</p><p className="mt-1 text-[14px] font-semibold tracking-[-.04em] text-[#272232] sm:text-[16px]">$8,420</p></div>
              <div className="rounded-lg border border-[#ded0f3] bg-[#f8f4fe] p-2.5 sm:p-3"><p className="text-[9px] text-[#765b9d] sm:text-[10px]">RECOMMENDED PRICE</p><p className="mt-1 text-[14px] font-semibold tracking-[-.04em] text-[#5b21b6] sm:text-[16px]">$12,680</p></div>
            </div>
            <div className="mt-2.5 flex items-center justify-between rounded-lg bg-[#f2ecfa] px-3 py-2.5 text-[#392b4c] sm:px-3.5"><div><p className="text-[9px] font-semibold text-[#755b92]">ESTIMATED PROFIT</p><p className="mt-0.5 text-[14px] font-semibold tracking-[-.03em] text-[#5b3290] sm:text-[16px]">$4,260</p></div><div className="text-right"><p className="text-[9px] font-semibold text-[#755b92]">NET MARGIN</p><p className="mt-0.5 inline-flex items-center gap-1 text-[12px] font-semibold text-[#287d48] sm:text-[13px]"><ArrowUpRight size={13} />33.6%</p></div></div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[#eeeaf2] bg-white px-3 py-2.5 sm:px-5"><span className="text-[9px] text-[#918b9b] sm:text-[10px]">Estimate preview · Sample job</span><span className="inline-flex items-center gap-1 text-[9px] font-medium text-[#766e80] sm:text-[10px]">View quote <ArrowDownRight size={11} /></span></div>
      </div>
      <div className="pointer-events-none absolute -bottom-5 left-5 hidden items-center gap-2 rounded-full border border-[#eeeaf2] bg-white px-3.5 py-2 text-[10px] font-medium text-[#4b4655] shadow-[0_8px_22px_rgba(35,22,54,.08)] sm:flex"><span className="grid size-5 place-items-center rounded-full bg-[#e9f8ed] text-[#18843a]"><Check size={12} /></span>Costs clear. Margin visible.</div>
      <div className="pointer-events-none absolute -right-3 top-[23%] hidden items-center gap-2 rounded-full border border-[#eeeaf2] bg-white px-3 py-2 text-[10px] font-medium text-[#4b4655] shadow-[0_8px_22px_rgba(35,22,54,.08)] lg:flex"><span className="grid size-5 place-items-center rounded-full bg-[#f3edfc] text-[#7541c3]"><CircleHelp size={12} /></span>Made for roofing estimates</div>
    </div>
  );
}

export function EstimatesPreview() {
  const rows = [
    ["Jordan Ellis", "Architectural shingle replacement", "$12,680", "Draft"],
    ["Morgan Lee", "Roof repair & flashing", "$3,940", "Sent"],
    ["Casey Brooks", "Detached garage roof", "$6,215", "Ready"],
  ];
  return <div className="overflow-hidden rounded-2xl border border-[#e8e3ee] bg-white shadow-[0_18px_45px_rgba(36,23,53,.08)]">
    <div className="flex items-center justify-between border-b border-[#efedf2] px-4 py-3.5 sm:px-5"><div><p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#8b8496]">Estimates</p><p className="mt-1 text-sm font-semibold text-[#252130]">Keep every quote in view</p></div><span aria-hidden="true" className="flex items-center gap-1 rounded-lg border border-[#eae6ef] px-2.5 py-2 text-[10px] font-medium text-[#686273]">All estimates <ChevronDown size={12} /></span></div>
    <div className="hidden grid-cols-[1.2fr_1.5fr_.7fr_.5fr] gap-2 bg-[#faf9fc] px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[.1em] text-[#9690a0] sm:grid"><span>Customer</span><span>Job</span><span>Amount</span><span>Status</span></div>
    {rows.map((row, i) => <div key={row[0]} className={`grid grid-cols-[1fr_auto] gap-2 px-4 py-3.5 sm:grid-cols-[1.2fr_1.5fr_.7fr_.5fr] sm:items-center sm:px-5 ${i < rows.length - 1 ? "border-b border-[#f0edf3]" : ""}`}><div><p className="text-[11px] font-semibold text-[#302b39]">{row[0]}</p><p className="mt-1 text-[9px] text-[#908a99] sm:hidden">{row[1]}</p></div><span className="hidden truncate text-[10px] text-[#6f6978] sm:block">{row[1]}</span><span className="self-center text-[10px] font-semibold tabular-nums text-[#302b39]">{row[2]}</span><span className={`col-start-1 row-start-2 w-fit rounded-full px-2 py-1 text-[8px] font-semibold sm:col-auto sm:row-auto ${row[3] === "Sent" ? "bg-[#f1edfa] text-[#6e45ad]" : row[3] === "Ready" ? "bg-[#eef4ff] text-[#3765b4]" : "bg-[#f3f1f5] text-[#777180]"}`}>{row[3]}</span></div>)}
    <div className="flex items-center justify-between border-t border-[#efedf2] px-4 py-3 sm:px-5"><span className="text-[9px] text-[#928c9a]">Sample estimates</span><span className="text-[9px] font-medium text-[#7541c3]">Estimate · Review · Send</span></div>
  </div>;
}

export function CustomerQuotePreview() {
  return <div className="relative mx-auto w-full max-w-[460px] rounded-[22px] border border-[#e5e0eb] bg-white p-5 shadow-[0_18px_50px_rgba(36,23,53,.1)] sm:p-6">
    <div className="flex items-start justify-between gap-3 border-b border-[#eeebf1] pb-4"><div><p className="text-[9px] font-semibold uppercase tracking-[.14em] text-[#8b8496]">Roofing estimate</p><h3 className="mt-1.5 text-[16px] font-semibold tracking-[-.03em] text-[#252130]">A clear quote, ready to share.</h3></div><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#f2ecfb] text-[#7442bc]"><FileText size={17} /></span></div>
    <div className="flex items-center justify-between py-3.5"><div><p className="text-[9px] text-[#8b8496]">PREPARED FOR</p><p className="mt-1 text-[11px] font-semibold text-[#302b39]">Jordan Ellis</p></div><div className="text-right"><p className="text-[9px] text-[#8b8496]">QUOTE DATE</p><p className="mt-1 text-[10px] font-medium text-[#5f5968]">May 12, 2026</p></div></div>
    <div className="space-y-2 border-y border-[#eeebf1] py-3"><div className="flex justify-between text-[10px] text-[#686273]"><span>Roof replacement</span><span>$11,880</span></div><div className="flex justify-between text-[10px] text-[#686273]"><span>Flashing & cleanup</span><span>$800</span></div><div className="flex justify-between pt-2 text-[11px] font-semibold text-[#282332]"><span>Total</span><span>$12,680</span></div></div>
    <p className="mt-3 text-[9px] leading-4 text-[#888291]">Review the work and estimate details, then respond to the contractor.</p>
    <div className="mt-3 grid grid-cols-2 gap-2"><span className="grid min-h-10 place-items-center rounded-lg border border-[#e7e3eb] bg-white text-[10px] font-semibold text-[#514b5a]">Review details</span><span className="grid min-h-10 place-items-center rounded-lg bg-[#7c3aed] text-[10px] font-semibold text-white">Accept estimate</span></div>
    <p className="mt-3 text-center text-[8px] text-[#a09aa8]">Customer quote preview · Sample details</p>
  </div>;
}
