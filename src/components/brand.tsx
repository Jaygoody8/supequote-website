import Link from "next/link";

const markPath = "M34 14.5c-2.6-2.1-5.9-3.2-10.2-3.2-6.5 0-10.8 3.1-10.8 7.8 0 4.3 3.4 6.4 9.3 7.4l3.2.5c4.9.8 7.4 2.3 7.4 5.7 0 4.3-4.1 7.3-10.5 7.3-4.7 0-8.7-1.7-11.5-4.8";

export function SupeQuoteMark({ size = 36, variant = "solid", className = "" }: { size?: number; variant?: "solid" | "on-white"; className?: string }) {
  const onWhite = variant === "on-white";
  return (
    <span
      aria-hidden="true"
      className={`inline-grid shrink-0 place-items-center rounded-[28%] ${onWhite ? "border border-[#e8e1ef] bg-white" : "bg-[#7c3aed]"} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 48 48" fill="none" className="h-[76%] w-[76%]">
        <path d={markPath} stroke={onWhite ? "#7C3AED" : "#FFFFFF"} strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m28 35.5 5.7 5.7" stroke={onWhite ? "#7C3AED" : "#FFFFFF"} strokeWidth="4.4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function BrandName({ className = "" }: { className?: string }) {
  return <span aria-label="SupeQuote" className={`whitespace-nowrap text-[15px] font-bold leading-none tracking-[-.055em] ${className}`}><span className="text-[#08060f]">SUPE</span><span className="text-[#7c3aed]">QUOTE</span></span>;
}

export function Wordmark({ compact = false, href = "#top" }: { compact?: boolean; href?: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2.5" aria-label="SupeQuote home">
      <SupeQuoteMark size={36} className="shadow-[0_5px_16px_rgba(124,58,237,.18)] transition-transform duration-200 group-hover:-rotate-3" />
      <span className="leading-none">
        <BrandName />
        {!compact && <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[.13em] text-[#6b6475]">A SUPE DIGITAL PRODUCT</span>}
      </span>
    </Link>
  );
}

export function ProductBrand() {
  return <span className="inline-flex items-center gap-2.5"><SupeQuoteMark size={28} /><BrandName className="text-[12px]" /></span>;
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.17em] text-[#7c3aed]"><span className="h-px w-5 bg-[#8b5cf6]" />{children}</p>;
}

export function ArrowMark({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="ml-2 text-[17px] leading-none transition-transform group-hover:translate-x-0.5">{diagonal ? "↗" : "→"}</span>;
}
