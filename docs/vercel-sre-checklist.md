# Checklist SRE para Vercel (Vite + React + TypeScript)

## 1) Router SPA sin 404
- Mantén `vercel.json` con rewrite de fallback a `/index.html` para rutas sin extensión de archivo.
- Verifica manualmente recarga directa en `/sobre-mi`, `/trayectoria`, `/privacidad`, `/terminos`.

## 2) TypeScript estricto en CI/CD
- Mantén `strict: true` compartido en `tsconfig.json`.
- Ejecuta `npm run typecheck` (o `bun run typecheck`) como parte del build.

## 3) Comandos recomendados para Vercel
- Install Command (Bun): `bun install --frozen-lockfile`
- Build Command (Bun): `bun run build:bun`
- Output Directory: `dist`

## 4) Assets y performance
- `public/`: archivos servidos tal cual (favicon, robots, sitemap, manifest).
- `src/assets/`: imágenes importadas por código para hashing de nombre y cache busting.

## 5) Variables de entorno
- Nunca subas `.env` reales al repositorio.
- Usa `.env.example` como plantilla pública.
- Carga secretos manualmente en Vercel por ambiente: Production/Preview/Development.
