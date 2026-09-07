# Senja Kitchen — Website Company Profile F&B

Website company profile modern & minimalis untuk bisnis Food & Beverage, dibangun dengan **Next.js 15**, **TypeScript**, dan **Tailwind CSS**.

## Fitur

- **Home** — Hero, keunggulan, menu favorit, cerita brand, testimoni, blog preview, lokasi
- **Menu** — Filter kategori, card produk dengan badge (Best Seller / New / Promo)
- **Tentang Kami** — Storytelling, visi-misi, nilai, sertifikasi
- **Galeri** — Grid masonry dengan filter & lightbox
- **Lokasi/Cabang** — Card cabang + embed Google Maps + status buka/tutup
- **Blog** — List artikel + halaman detail (SEO-friendly)
- **Kontak** — Form kontak + info + WhatsApp CTA
- Floating WhatsApp button di semua halaman
- Responsive (mobile-first)
- Design system sesuai `design.md` (warna, tipografi, spacing)

## Stack

- Next.js (App Router) + React 19
- Tailwind CSS 3
- Lucide React (ikon)
- Google Fonts: Fraunces (heading) + Inter (body)
- Image optimization via `next/image` (Unsplash demo images)

## Menjalankan Lokal

```bash
cd senja-cafe
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur

```
src/
  app/           # Halaman (App Router)
  components/    # Navbar, Footer, MenuCard, dll
  lib/data.ts    # Sample data (menu, cabang, artikel, dll)
```

## Catatan

- Data bersifat **static sample** (bukan CMS). Untuk produksi, hubungkan ke headless CMS (Sanity/Strapi) atau database sesuai ERD.
- Ganti gambar Unsplash dengan foto produk asli untuk kredibilitas & SEO gambar.
- Sesuaikan `siteConfig` di `src/lib/data.ts` dengan identitas brand Anda.
- Schema.org markup dan sitemap.xml dapat ditambahkan di fase SEO setup.

## Design Reference

Mengikuti dokumen:
- `design.md` — Palet warna, tipografi, layout, komponen
- `prd.md` — Scope halaman & requirement SEO
- `erd.md` — Struktur data (untuk fase CMS)
