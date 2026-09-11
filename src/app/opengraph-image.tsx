import { ImageResponse } from "next/og";
import { businessSettings } from "@/content/business";

export const alt = "Power In Service Inc. commercial cleaning in Orlando and Central Florida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#04271D",
          color: "#F7F6F1",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 10,
              fontWeight: 800,
            }}
          >
            {businessSettings.wordmarkPrimary}
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 16,
              letterSpacing: 8,
              color: "#E4C75C",
              fontWeight: 600,
            }}
          >
            {businessSettings.wordmarkSecondary}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 54, fontWeight: 650, lineHeight: 1.15 }}>
            Commercial cleaning and property services
          </div>
          <div style={{ marginTop: 18, fontSize: 28, color: "#E4C75C" }}>
            Orlando and Central Florida
          </div>
        </div>
      </div>
    ),
    size,
  );
}
