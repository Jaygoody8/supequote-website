"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/brand";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation({ landingPage = true }: { landingPage?: boolean }) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-5 sm:px-8">
      <nav aria-label="Main navigation" className="mx-auto flex h-[82px] max-w-[1240px] items-center justify-between border-b border-[#e8e6ed]">
        <Wordmark href={landingPage ? "#top" : "/"} />
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => <Link key={link.href} href={landingPage ? link.href : `/${link.href}`} className="text-[13px] font-medium text-[#626273] transition-colors hover:text-[#111827]">{link.label}</Link>)}
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          <Link href="https://app.supequote.com/login" className="text-[13px] font-medium text-[#555568] transition-colors hover:text-[#111827]">Log in</Link>
          <Link href="https://app.supequote.com/signup" className="group inline-flex min-h-11 items-center rounded-full bg-[#7c3aed] px-5 text-[13px] font-semibold text-white shadow-[0_5px_16px_rgba(124,58,237,.18)] transition hover:bg-[#6d28d9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]">Start estimating free <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-0.5">→</span></Link>
        </div>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="grid size-11 place-items-center rounded-xl border border-[#e5e7eb] bg-white text-[#252335] lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && <motion.div id="mobile-navigation" initial={reduceMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={reduceMotion ? undefined : { opacity: 0, height: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} className="overflow-hidden rounded-b-2xl border border-t-0 border-[#e8e6ed] bg-white px-5 shadow-[0_15px_35px_rgba(28,20,43,.08)] lg:hidden">
          <div className="flex flex-col py-2">
            {links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} href={landingPage ? link.href : `/${link.href}`} className="border-b border-[#f0eef3] py-3.5 text-sm font-medium text-[#555568]">{link.label}</Link>)}
            <Link onClick={() => setOpen(false)} href="https://app.supequote.com/login" className="py-3.5 text-sm font-medium text-[#555568]">Log in</Link>
            <Link onClick={() => setOpen(false)} href="https://app.supequote.com/signup" className="my-2 inline-flex min-h-11 items-center justify-center rounded-full bg-[#7c3aed] px-5 text-sm font-semibold text-white">Start estimating free <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
