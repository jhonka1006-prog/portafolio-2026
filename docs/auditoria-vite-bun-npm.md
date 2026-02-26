# Auditoría de estructura (Vite + TypeScript + Bun/NPM)

## Dependencias: Bun vs NPM
- Usa un solo gestor de paquetes para evitar instalaciones no deterministas.
- Si tu elección es **Bun**, conserva `bun.lockb` y elimina `package-lock.json`.
- Si tu elección es **NPM**, conserva `package-lock.json` y elimina `bun.lockb`.

## `index.html` en Vite
- Vite toma como entrada principal el `index.html` en la raíz del proyecto.
- Los `index.html` en rutas paralelas (`/sobre-mi`, `/privacidad`, etc.) no forman parte del flujo SPA y pueden causar confusión de build/deploy.

## Organización recomendada de páginas
- Mueve el contenido de rutas a `src/pages` (o `src/routes`) y gestiona URLs con React Router.
- Mantén sólo assets estáticos en `public/` (favicon, robots, imágenes públicas).

## TypeScript
- La separación `tsconfig.json` + `tsconfig.app.json` + `tsconfig.node.json` es válida para Vite.
- Puede simplificarse consolidando opciones compartidas en `tsconfig.json` y dejando `app/node` como extensiones ligeras.
