import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Premium Vegetarian, From Gayathri's Kitchen`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f241b",
          color: "#f7f3e9",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #c9a24b",
            borderRadius: 24,
            padding: "72px 96px",
            backgroundColor: "#17352a",
          }}
        >
          <div style={{ display: "flex", fontSize: 30, letterSpacing: 14, color: "#c9a24b" }}>
            EST. 2026
          </div>
          <div style={{ display: "flex", alignItems: "baseline", marginTop: 24 }}>
            <span style={{ fontSize: 96, fontStyle: "italic", fontWeight: 300 }}>Simply&nbsp;</span>
            <span style={{ fontSize: 96, fontWeight: 700, color: "#d6b47a" }}>Signature</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 26,
              letterSpacing: 8,
              color: "#e3c98f",
            }}
          >
            PREMIUM VEGETARIAN · FROM GAYATHRI&apos;S KITCHEN
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 24,
              color: "#f7f3e9",
              opacity: 0.75,
            }}
          >
            Small batches · Homemade with love · {site.location.community}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
