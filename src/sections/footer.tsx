import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Wordmark } from "@/components/brand";

const productLinks = [
  { label: "Product", href: "#features" },
  { label: "Resources", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export function Footer({ landingPage = true }: { landingPage?: boolean }) {
  const productHref = (href: string) => landingPage ? href : `/${href}`;

  return <footer className="border-t border-[#e7e4eb] bg-[#faf9fc] px-5 pb-7 pt-10 sm:px-8 sm:pt-12">
    <div className="mx-auto max-w-[1240px]">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div><Wordmark href={landingPage ? "#top" : "/"} /></div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:flex sm:gap-8">
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:gap-5">{productLinks.map((link) => <Link key={link.href} href={productHref(link.href)} className="text-[12px] font-medium text-[#696473] transition hover:text-[#6f3bb6]">{link.label}</Link>)}</nav>
          <nav aria-label="Legal" className="flex flex-col gap-2.5"><span className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#8a8492]">Legal</span>{legalLinks.map((link) => <Link key={link.href} href={link.href} className="text-[12px] font-medium text-[#696473] transition hover:text-[#6f3bb6]">{link.label}</Link>)}</nav>
          <nav aria-label="Support" className="flex flex-col gap-2.5"><span className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#8a8492]">Support</span><Link href="/contact" className="text-[12px] font-medium text-[#696473] transition hover:text-[#6f3bb6]">Contact</Link></nav>
        </div>
        <Link href="https://app.supequote.com" className="group inline-flex items-center gap-1.5 self-start text-[11px] font-semibold text-[#6740a5]">app.supequote.com <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
      </div>
      <div className="mt-9 flex flex-col gap-2 border-t border-[#e9e6ed] pt-5 text-[9px] text-[#928c9a] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Supe Digital.</span><span>Estimate smarter. Quote faster. Win more jobs.</span></div>
    </div>
  </footer>;
}
