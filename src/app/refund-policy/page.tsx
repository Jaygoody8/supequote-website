import type { Metadata } from "next";
import { InformationPage, PolicySection } from "@/components/information-page";
import { supportEmail } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | SupeQuote",
  description: "Subscription cancellation and refund request information for SupeQuote.",
};

export default function RefundPolicyPage() {
  return <InformationPage eyebrow="Legal · Billing" title="Refund & Cancellation Policy" updated="October 6, 2026">
    <PolicySection title="Subscriptions and renewals"><p>Monthly Pro subscriptions are charged monthly; annual Pro subscriptions are charged annually. Subscriptions renew for the selected period unless canceled before the renewal date. Cancel using the subscription management option provided with your purchase or follow the instructions in your purchase confirmation. Cancellation stops future renewals; access generally continues through the paid period, after which Pro access ends or the account moves to an available free plan.</p></PolicySection>
    <PolicySection title="Refund requests"><p>Refund requests are reviewed individually. Email <a href={`mailto:${supportEmail}`}>{supportEmail}</a> with the account email, purchase date, and a brief explanation so the request can be reviewed. A request does not guarantee a refund; any refund will be considered under applicable law and the terms presented at purchase.</p></PolicySection>
    <PolicySection title="Lemon Squeezy checkout"><p>Purchases made through Lemon Squeezy checkout are subject to the applicable Lemon Squeezy refund and chargeback processes. Lemon Squeezy may issue refunds in certain circumstances, including to help prevent chargebacks. See its <a href="https://docs.lemonsqueezy.com/help/payments/refunds-chargebacks" target="_blank" rel="noopener noreferrer">refund and chargeback guidance</a> for details.</p></PolicySection>
    <PolicySection title="Contact"><p>For refund or billing requests, email <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p></PolicySection>
  </InformationPage>;
}
