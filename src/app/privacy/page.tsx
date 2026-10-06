import type { Metadata } from "next";
import { InformationPage, PolicySection } from "@/components/information-page";
import { supportEmail } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | SupeQuote",
  description: "How Supe Digital handles information when you use SupeQuote.",
};

export default function PrivacyPage() {
  return <InformationPage eyebrow="Legal · Privacy" title="Privacy Policy" updated="October 6, 2026">
    <PolicySection title="About this policy"><p>SupeQuote is a SaaS product operated by Supe Digital, a business operating from Nigeria. In this policy, “we”, “us”, and “our” refer to Supe Digital as the operator. This policy describes information handled when you use SupeQuote, including the website and application. Contractors are responsible for the customer and job information they enter and for using it appropriately.</p></PolicySection>
    <PolicySection title="Information we handle"><p>Depending on how you use the service, information may include:</p><ul><li>Account details such as your name and email address, and authentication information needed to sign in.</li><li>Company and business details you provide, including company branding.</li><li>Estimate and quote information, including customer or property details, materials, labor, overhead, costs, prices, profit, and margin inputs.</li><li>Basic technical and operational information needed to run, protect, troubleshoot, and support the service.</li><li>If you purchase a paid SupeQuote subscription through our payment provider, transaction and subscription information may be processed by the payment provider.</li></ul></PolicySection>
    <PolicySection title="How information is used"><p>Information is used to provide estimates and quotes, operate accounts, maintain service security, respond to support requests, troubleshoot issues, and meet legal obligations. It may also be used to maintain and improve the service.</p></PolicySection>
    <PolicySection title="Service providers and sharing"><p>SupeQuote uses third-party infrastructure providers, including Supabase for authentication and data storage, to operate the service. Information may be shared with providers as needed for their services, or when required to comply with law or protect the service and its users. If you purchase a paid subscription through our payment provider, that provider processes transaction and subscription information under its applicable terms and privacy practices.</p></PolicySection>
    <PolicySection title="Retention and security"><p>Information is kept for as long as needed to provide the service, support accounts, resolve disputes, and meet applicable legal requirements. We use reasonable measures intended to protect information, but no online service can guarantee absolute security.</p></PolicySection>
    <PolicySection title="Your choices"><p>You can request access to, correction of, or deletion of personal information by emailing <a href={`mailto:${supportEmail}`}>{supportEmail}</a>, subject to applicable law and legitimate recordkeeping needs. Contractors should direct requests about customer and job information they entered to the contractor who collected it.</p></PolicySection>
    <PolicySection title="Changes"><p>This policy may be updated as the service changes. The date above identifies the latest revision. Continued use after an update is subject to the revised policy.</p></PolicySection>
  </InformationPage>;
}
