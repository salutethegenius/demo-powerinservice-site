import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#073B2A",
          color: "#E4C75C",
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: 1,
        }}
      >
        PI
      </div>
    ),
    size,
  );
}
