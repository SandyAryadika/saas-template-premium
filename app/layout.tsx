import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Menggunakan font Inter yang modern dan bersih
const inter = Inter({ subsets: ["latin"] });

// 1. VIEWPORT CONFIGURATION (Penting untuk mobile responsiveness)
export const viewport: Viewport = {
  themeColor: "#4f46e5", // Warna tema bar browser (Indigo 600)
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// 2. METADATA CONFIGURATION (SEO Master)
export const metadata: Metadata = {
  // Title menggunakan template agar otomatis berubah di setiap sub-halaman
  title: {
    default: "SaaSFlow - Platform Otomatisasi Alur Kerja Modern 2025",
    template: "%s | SaaSFlow",
  },
  description: "Tingkatkan produktivitas tim Anda dengan SaaSFlow. Dashboard SaaS premium yang dibangun dengan Next.js 15 dan Tailwind CSS v4 untuk performa maksimal.",
  keywords: [
    "SaaS Dashboard", 
    "Next.js 15 Template", 
    "Tailwind CSS v4", 
    "Workflow Automation", 
    "Startup Boilerplate",
    "Admin Dashboard Premium"
  ],
  authors: [{ name: "Brand Anda", url: "https://saasflow.com" }],
  creator: "Tim Kreatif SaaSFlow",
  
  // OpenGraph (Preview saat link dibagikan di WhatsApp/Facebook/LinkedIn)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://saasflow.com",
    siteName: "SaaSFlow Studio",
    title: "SaaSFlow - Modern Dashboard for High-Growth Teams",
    description: "Luncurkan produk SaaS Anda lebih cepat dengan template dashboard enterprise-ready.",
    images: [
      {
        url: "/og-image.png", // Pastikan file ini ada di folder /public
        width: 1200,
        height: 630,
        alt: "SaaSFlow Preview",
      },
    ],
  },

  // Twitter Card (Preview khusus Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "SaaSFlow - Next.js 15 Premium Dashboard",
    description: "Template dashboard SaaS paling modern dengan performa ultra-cepat.",
    images: ["/og-image.png"],
    creator: "@username_anda",
  },

  // Metadata tambahan untuk Robot Mesin Pencari
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Ikon (Favicon)
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png", // Ikon saat disimpan di home screen iPhone
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white text-zinc-900`}>
        {/* Sonner Toaster untuk notifikasi sukses/error di seluruh aplikasi */}
        <Toaster 
          position="top-right" 
          expand={false} 
          richColors 
          closeButton
          toastOptions={{
            style: { 
              borderRadius: '1.25rem', 
              padding: '1rem',
              border: '1px solid #e4e4e7',
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}