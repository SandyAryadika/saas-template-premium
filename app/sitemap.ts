import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saasflow.com'; // Sesuaikan dengan domain Anda

  // Daftar halaman statis yang ingin Anda indeks
  const routes = [
    '',
    '/auth',
    '/#harga',
    '/#fitur',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8, // Landing page diberi prioritas utama (1)
  }));

  return [...routes];
}