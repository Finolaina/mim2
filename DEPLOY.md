# Guía de Despliegue - MIM Sistemas

Este proyecto está construido con **Next.js 14**, lo que hace que su despliegue sea nativo y optimizado en **Vercel**.

## 1. Requisitos Previos

- Tener una cuenta en [Vercel](https://vercel.com).
- Tener el código subido a un repositorio (GitHub, GitLab o Bitbucket).

## 2. Pasos para Desplegar en Vercel

1.  Ve a tu dashboard de Vercel y haz clic en **"Add New..."** -> **"Project"**.
2.  Importa el repositorio de Git donde has subido este código.
3.  **Configuración del Proyecto**:
    - **Framework Preset**: Next.js (se detectará automáticamente).
    - **Root Directory**: `./` (por defecto).
    - **Build Command**: `next build` (o `npm run build`).
    - **Output Directory**: `.next` (por defecto).
    - **Environment Variables**: No hay variables de entorno obligatorias para el arranque básico, pero si configuramos un servicio de email, deberías añadirlas aquí (ej: `RESEND_API_KEY`).
4.  Haz clic en **"Deploy"**.

## 3. Verificación Post-Despliegue

Una vez desplegado:
- Verifica que las páginas estáticas (`/servicios`, `/servicios/placas-solares`) cargan instantáneamente.
- Prueba el formulario de contacto (nota: sin backend conectado, la simulación actual funcionará visualmente pero no enviará emails reales hasta conectar un servicio como Resend).

## 4. Configuración de Dominio

1.  En Vercel, ve a **Settings** -> **Domains**.
2.  Añade tu dominio (ej: `mimsistemas.com`).
3.  Sigue las instrucciones DNS (normalmente añadir un registro A o CNAME en tu proveedor de dominio).

---

## Opción Alternativa: Netlify

1.  Arrastra la carpeta `.next` (si usas `next export`, que no es este caso) o conecta tu Git.
2.  Build settings:
    - Base directory: `/`
    - Build command: `npm run build`
    - Publish directory: `.next` (requiere plugin de Next.js para Netlify).

*Recomendamos encarecidamente Vercel para proyectos Next.js.*
