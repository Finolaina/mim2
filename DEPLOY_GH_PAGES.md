# Guía de Despliegue - GitHub Pages

Este proyecto ha sido configurado para desplegarse automáticamente en **GitHub Pages** usando GitHub Actions.

## 1. Configuración Automática

He añadido un archivo `.github/workflows/deploy.yml` que se encargará de todo. Cada vez que subas código a `main`, GitHub construirá tu web y la publicará.

## 2. Pasos obligatorios en GitHub

Para que esto funcione, debes activar los permisos en tu repositorio:

1.  Ve a tu repositorio en GitHub: [https://github.com/Finolaina/mim2](https://github.com/Finolaina/mim2)
2.  Haz clic en **Settings** (pestaña superior derecha).
3.  En el menú lateral izquierdo, busca **Pages** (casi al final, bajo la sección "Code and automation").
4.  En **"Build and deployment"**:
    - **Source**: Selecciona **GitHub Actions** (¡Importante! Por defecto suele poner "Deploy from a branch").
5.  ¡Listo!

## 3. Verificar Despliegue

Ve a la pestaña **Actions** de tu repositorio. Deberías ver un workflow llamado "Deploy Next.js site to Pages" ejecutándose (o en cola).
Cuando termine (icono verde ✅), tu web estará disponible en:

👉 **https://finolaina.github.io/mim2/**

---

## Nota sobre Rutas (Base Path)

Como GitHub Pages aloja tu web en una subcarpeta (`/mim2`), he configurado `next.config.ts` para añadir este prefijo automáticamente en producción.
Si en el futuro decides usar un dominio propio (ej: `www.mimsistemas.com`), deberás quitar el `basePath` en `next.config.ts`.
