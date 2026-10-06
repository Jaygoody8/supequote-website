import type { ReactNode } from "react";
import { Footer } from "@/sections/footer";
import { Navigation } from "@/components/navigation";

export function InformationPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navigation landingPage={false} />
      <main className="min-h-[65vh] bg-[#f6f7f9] px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
        <article className="mx-auto max-w-[780px] rounded-3xl border border-[#e7e4eb] bg-white px-6 py-9 shadow-[0_12px_40px_rgba(24,16,38,.035)] sm:px-12 sm:py-12">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.17em] text-[#7c3aed]">{eyebrow}</p>
          <h1 className="max-w-[650px] text-3xl font-semibold leading-tight tracking-[-.04em] text-[#111827] sm:text-[42px]">{title}</h1>
          {updated && <p className="mt-4 text-sm text-[#6b7280]">Last updated: {updated}</p>}
          <div className="mt-9 space-y-8 text-[15px] leading-7 text-[#4b5563] [&_h2]:mb-2 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-[-.02em] [&_h2]:text-[#111827] [&_a]:font-medium [&_a]:text-[#6d28d9] [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_ul]:mt-2 [&_ul]:space-y-1">
            {children}
          </div>
        </article>
      </main>
      <Footer landingPage={false} />
    </>
  );
}

export function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return <section><h2>{title}</h2><div className="space-y-3">{children}</div></section>;
}
