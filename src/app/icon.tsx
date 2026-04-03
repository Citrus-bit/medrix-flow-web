import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
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
          borderRadius: 6,
          background: "linear-gradient(135deg, #0891b2 0%, #06b6d4 40%, #14b8a6 100%)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          M
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
