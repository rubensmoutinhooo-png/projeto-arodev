import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo-icon.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1a2332",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(255,255,255,0.06)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={40} height={30} alt="" />
          </div>
          <span style={{ fontSize: 32, fontWeight: 700 }}>Aro Dev</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Sites que transformam visitantes em clientes.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 780,
          }}
        >
          Sistemas e sites sob medida, otimizados para o Google e desenhados
          para o posicionamento do seu negócio.
        </div>
      </div>
    ),
    { ...size }
  );
}
