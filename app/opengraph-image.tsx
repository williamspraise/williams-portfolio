import { ImageResponse } from "next/og";

export const alt = "Williams Praise - Product Builder and Technical Product Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#08151e",
          color: "#f6f2e9",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "68px 74px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#21c28e",
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Williams Praise
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
            Product Builder &amp;
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
            Technical Product Lead
          </div>
          <div style={{ color: "#9babb1", display: "flex", fontSize: 26 }}>
            Turning ambiguous problems into shipped systems.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
