import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/', // Mengizinkan akses ke landing page
      disallow: '/dashboard/', // Menyembunyikan dashboard agar tidak muncul di hasil pencarian Google (demi privasi pengguna)
    },
    sitemap: 'https://saasflow.com/sitemap.xml', // Sesuaikan dengan domain Anda nanti
  };
}