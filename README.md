# RBC Tech (React)

Diese Website wurde von statischem HTML auf React mit Vite umgestellt.

## Entwicklung

1. `npm install`
2. `npm run dev`

## Production Build

1. `npm run build`
2. Ergebnis liegt in `dist/`

## Hinweise

- Die App laeuft als Single-Page-Application mit sauberen Routen wie `/about`, `/services`, `/contact`.
- Fuer GitHub Pages ist ein SPA-Fallback ueber `public/404.html` eingerichtet, damit direkte Aufrufe auf Unterseiten funktionieren.
- Assets sowie `CNAME`, `robots.txt` und `sitemap.xml` liegen im `public/`-Ordner, damit sie in den Build uebernommen werden.