import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { LeadPopup } from "@/components/lead-popup";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://arodev.com.br";

const title = "Aro Dev: Sites que transformam visitantes em clientes.";
const description =
  "Sistemas e sites sob medida, rápidos, otimizados para o Google e desenhados para o posicionamento do seu negócio.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Aro Dev",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground font-sans">
        {children}
        <LeadPopup />
      </body>
    </html>
  );
}
