import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#1a2332",
          borderRadius: 7,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 6.5 L5 19" stroke="#00d9a3" strokeWidth={3.2} strokeLinecap="round" />
          <path d="M12 6.5 L19 19" stroke="#00d9a3" strokeWidth={3.2} strokeLinecap="round" />
          <circle cx="12" cy="6.5" r="2.3" fill="#00d9a3" />
          <circle cx="12" cy="6.5" r="0.95" fill="#1a2332" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
