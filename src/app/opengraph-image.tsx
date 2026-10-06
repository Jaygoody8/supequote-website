import { ImageResponse } from "next/og";

export const alt = "SUPEQUOTE — Estimate smarter. Quote faster. Win more jobs.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#f8f6fb", color: "#111827", padding: 64, fontFamily: "Arial, sans-serif", position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", border: "1px solid #e7e1ed", borderRadius: 30, background: "#fff", padding: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", width: 54, height: 54, alignItems: "center", justifyContent: "center", borderRadius: 16, background: "#7c3aed" }}>
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M34 14.5c-2.6-2.1-5.9-3.2-10.2-3.2-6.5 0-10.8 3.1-10.8 7.8 0 4.3 3.4 6.4 9.3 7.4l3.2.5c4.9.8 7.4 2.3 7.4 5.7 0 4.3-4.1 7.3-10.5 7.3-4.7 0-8.7-1.7-11.5-4.8" stroke="#fff" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round"/><path d="m28 35.5 5.7 5.7" stroke="#fff" strokeWidth="4.4" strokeLinecap="round"/></svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}><span style={{ display: "flex", fontSize: 22, fontWeight: 700, letterSpacing: -1 }}><span style={{ color: "#08060f" }}>SUPE</span><span style={{ color: "#7c3aed" }}>QUOTE</span></span><span style={{ marginTop: 4, fontSize: 10, letterSpacing: 2, color: "#6b6475" }}>A SUPE DIGITAL PRODUCT</span></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
            <span style={{ fontSize: 67, lineHeight: 1.06, fontWeight: 650, letterSpacing: -4 }}>Estimate smarter.</span>
            <span style={{ fontSize: 67, lineHeight: 1.06, fontWeight: 650, letterSpacing: -4, color: "#7c3aed" }}>Quote faster. Win more jobs.</span>
            <span style={{ marginTop: 22, fontSize: 21, lineHeight: 1.5, color: "#6b7280" }}>Accurate roofing estimates. Clearer margins. Professional quotes.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#6b7280", fontSize: 14, letterSpacing: 2 }}>BUILT FOR ROOFING CONTRACTORS <span style={{ color: "#7c3aed", fontSize: 22 }}>↗</span></div>
        </div>
      </div>
    ),
    { ...size },
  );
}
