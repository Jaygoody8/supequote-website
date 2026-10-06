import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#7C3AED", borderRadius: 42 }}>
        <svg width="142" height="142" viewBox="0 0 48 48" fill="none">
          <path d="M34 14.5c-2.6-2.1-5.9-3.2-10.2-3.2-6.5 0-10.8 3.1-10.8 7.8 0 4.3 3.4 6.4 9.3 7.4l3.2.5c4.9.8 7.4 2.3 7.4 5.7 0 4.3-4.1 7.3-10.5 7.3-4.7 0-8.7-1.7-11.5-4.8" stroke="#fff" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m28 35.5 5.7 5.7" stroke="#fff" strokeWidth="4.4" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
