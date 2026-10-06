import type { Metadata } from "next";
import { InformationPage, PolicySection } from "@/components/information-page";
import { supportEmail } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact SupeQuote",
  description: "Contact SupeQuote about product, account, billing, refund, or privacy questions.",
};

export default function ContactPage() {
  return <InformationPage eyebrow="Support" title="Contact SupeQuote">
    <PolicySection title="How we can help"><p>For product, account, billing, refund, privacy, or general questions, contact the SupeQuote team.</p>
      <p>Email: <a href={`mailto:${supportEmail}`}>{supportEmail}</a></p>
      <p>We’ll use this address to help with product questions, account issues, billing questions, refund requests, and privacy inquiries.</p>
      <p>For billing or refund questions, include the account email and relevant purchase details. Avoid sending passwords or sensitive payment information by email.</p>
    </PolicySection>
  </InformationPage>;
}
