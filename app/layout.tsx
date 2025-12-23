import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaSFlow - Platform Otomatisasi Alur Kerja Modern",
  description: "Tingkatkan produktivitas tim Anda dengan SaaSFlow. Solusi manajemen project terbaik dengan integrasi API lengkap untuk startup tahun 2025.",
  keywords: ["SaaS Template", "Next.js Template", "Landing Page Modern", "Automation Tool"],
  authors: [{ name: "Nama Anda/Brand Anda" }],
  openGraph: {
    title: "SaaSFlow - Modern Workflow Automation",
    description: "Build your future SaaS faster.",
    url: "https://template-anda.com",
    siteName: "SaaSFlow",
    images: [
      {
        url: "/og-image.png", // Jangan lupa siapkan gambar untuk preview di WhatsApp/Twitter
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}