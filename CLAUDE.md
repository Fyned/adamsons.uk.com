# CLAUDE.md — Adamsons Accountants Website

## Proje
- **Tip:** website
- **Musteri:** Adamsons Accountants (Ingiltere)
- **Domain:** adamsons.uk.com
- **Durum:** Production

## Teknoloji
- React 18 + Vite 4 + JSX
- Tailwind CSS 3 + @tailwindcss/typography
- Radix UI (dialog, tabs, dropdown, toast vb.)
- Framer Motion (animasyon)
- React Router DOM 6
- class-variance-authority + clsx + tailwind-merge
- Lucide React (ikonlar)
- React Helmet (SEO)

## Yapi
```
src/
  components/    # UI bilesenleri
  hooks/         # Ozel React hook'lari
  layouts/       # Sayfa layout'lari
  lib/           # Yardimci fonksiyonlar
  pages/         # Sayfa bilesenleri
  main.jsx       # Uygulama giris noktasi
  App.jsx        # Root bilesen
config/          # Yapilandirma dosyalari
plugins/         # Vite eklentileri
theme/           # Tema ayarlari
tools/           # Build araclari (llms.txt generator vb.)
public/          # Statik dosyalar
```

## Kurallar
- Proje JSX kullanir, TypeScript degil.
- UI bilesenleri icin Radix UI primitifleri tercih edilmeli.
- Build sirasinda `tools/generate-llms.js` scripti otomatik calisir.
- Stil birlestirme icin `class-variance-authority` + `clsx` + `tailwind-merge` deseni kullanilir.
