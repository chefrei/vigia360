# Vigia 360 - Landing Page Profesional

Una landing page moderna, profesional y fully responsive para una empresa de vigilancia y seguridad.

## 📋 Descripción

Landing page desarrollada con Next.js 16, React 19 y Tailwind CSS v4, diseñada para captar clientes corporativos y residenciales. Incluye todas las secciones solicitadas con animaciones sutiles y un diseño profesional alineado con la identidad visual de Vigia 360.

## 🚀 Características

- ✅ **100% Responsive** - Adaptable a móviles, tablets y desktop
- ✅ **Animaciones Suaves** - Fade-in al hacer scroll con transiciones fluidas
- ✅ **Header Fijo** - Navegación siempre visible con menú móvil
- ✅ **Logo Integrado** - Logo profesional de Vigia 360 en el header
- ✅ **Hero Section** - Con imagen de fondo y CTAs destacados
- ✅ **Secciones Completas**:
  - Quiénes Somos - Con descripción y valores
  - Servicios - 6 tarjetas con iconos profesionales
  - Nuestro Compromiso - 4 pilares clave
  - Contacto - Formulario + métodos directos + redes sociales
  - Footer - Información y enlaces rápidos
- ✅ **Formulario de Contacto** - Con validación básica y feedback visual
- ✅ **Integración de Redes Sociales** - Facebook, Instagram, TikTok, LinkedIn
- ✅ **Botones de Contacto Directo** - WhatsApp y Email
- ✅ **Optimizado para SEO** - Meta etiquetas y Open Graph
- ✅ **Variables CSS** - Paleta de colores completamente editable
- ✅ **Código Limpio y Comentado** - Fácil de mantener y personalizar

## 🎨 Paleta de Colores (Vigia 360)

Basada en el logo profesional:
- **Primario**: Azul Marino Oscuro (`#1A3A52`) - Seriedad y confianza
- **Acento**: Oro/Beige (`#C9A876`) - Elegancia y profesionalismo
- **Secundario**: Azul Cielo (`#4A9FD8`) - Modernidad
- **Fondo**: Blanco Puro (`#FFFFFF`) - Limpieza
- **Texto**: Azul Marino (`#1A1A1A`) - Legibilidad

## 📝 Cómo Editar

### 1. **Cambiar Información de Contacto**

Busca y reemplaza en los siguientes archivos:
- Email: `contacto@vigia360.com` → Tu correo
- WhatsApp: `https://wa.me/1234567890` → Tu número
- Ubicación: `Tu ciudad, País` → Tu dirección

**Archivos donde aparece:**
- `components/contact.tsx` (Formulario y contactos directos)
- `components/footer.tsx` (Información de pie)

### 2. **Cambiar Redes Sociales**

En `components/contact.tsx` y `components/footer.tsx`:
```tsx
<a href="https://facebook.com/vigia360">Facebook</a>
<a href="https://instagram.com/vigia360">Instagram</a>
<a href="https://tiktok.com/@vigia360">TikTok</a>
<a href="https://linkedin.com/company/vigia360">LinkedIn</a>
```

### 3. **Personalizar Colores**

Edita las variables CSS en `app/globals.css`:

```css
:root {
  --primary: oklch(0.24 0.09 260);      /* Azul marino - Color principal */
  --accent: oklch(0.72 0.12 60);        /* Oro - Color de botones */
  --secondary: oklch(0.62 0.18 260);    /* Azul cielo - Secundario */
  --background: oklch(0.98 0.001 0);    /* Blanco - Fondo */
  --foreground: oklch(0.15 0.02 260);   /* Azul oscuro - Texto */
}
```

### 4. **Actualizar Contenido de Secciones**

- **Quiénes Somos**: Edita `components/about-us.tsx`
- **Servicios**: Edita `components/services.tsx` (Añade/modifica servicios)
- **Compromiso**: Edita `components/commitment.tsx` (Pilares y valores)
- **Hero Section**: Edita el texto en `components/hero.tsx`

### 5. **Cambiar Imágenes**

Las imágenes actuales son placeholders profesionales. Reemplázalas:

**Hero Section:**
```tsx
// En components/hero.tsx
<Image src="/tu-imagen-seguridad.jpg" alt="..." />
```

**About Section:**
```tsx
// En components/about-us.tsx
<Image src="/tu-equipo.jpg" alt="..." />
```

**Commitment Section:**
```tsx
// En components/commitment.tsx
<img src="/tu-imagen-profesionales.jpg" alt="..." />
```

### 6. **Logo de la Empresa**

El logo está ubicado en `/public/logo.png`. Reemplázalo con tu logo:
1. Guarda tu logo en `/public/logo.png`
2. El logo aparecerá automáticamente en el header

## 🔧 Configuración

### Requisitos
- Node.js 18+
- npm o yarn
- Git (opcional, para versionado)

### Instalación Local

```bash
# Clonar o descargar el proyecto
cd vigia360-landing

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Accede a http://localhost:3000
```

### Build para Producción

```bash
npm run build
npm start
```

## 📱 Breakpoints Responsive

- **Móvil**: < 640px (`sm:` en Tailwind)
- **Tablet**: 640px - 1024px (`md:` en Tailwind)
- **Desktop**: > 1024px (`lg:` en Tailwind)

## 🎯 CTAs Principales (Llamadas a la Acción)

1. **Header**: Botón "Contáctanos" (navegación a #contacto)
2. **Hero**: "Solicita una Cotización" y "Conoce Más"
3. **Services**: Tarjetas con hover effects
4. **Contact**: Formulario, WhatsApp, Email y redes sociales

## 📊 Estructura de Archivos

```
vigia360-landing/
├── app/
│   ├── layout.tsx              # Layout principal con metadata
│   ├── page.tsx                # Página home
│   ├── globals.css             # Estilos globales y variables CSS
│
├── components/
│   ├── header.tsx              # Navegación con menú responsive
│   ├── hero.tsx                # Sección principal hero
│   ├── about-us.tsx            # Sección Quiénes Somos
│   ├── services.tsx            # Sección de Servicios (6 tarjetas)
│   ├── commitment.tsx          # Sección Compromiso y valores
│   ├── contact.tsx             # Sección Contacto con formulario
│   └── footer.tsx              # Pie de página
│
└── public/
    ├── logo.png                # Logo de Vigia 360
    ├── professional-security-monitoring-center-with-camer.jpg
    ├── professional-security-team-meeting-in-office.jpg
    └── security-professionals-with-technology-and-reliabi.jpg
```

## ✏️ Variables Editables

**Nombre de la Empresa:**
Busca `Vigia 360` y reemplázalo en:
- `components/header.tsx` (línea ~30)
- `components/footer.tsx` (línea ~50)
- `app/layout.tsx` (metadata - línea ~11)

**Lema/Tagline:**
Busca `Protección • Resguardo` en:
- `components/header.tsx`
- `components/footer.tsx`

## 🚀 Deploy (Recomendado)

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opción 2: GitHub + Vercel
1. Sube tu código a GitHub
2. Conecta el repositorio en Vercel
3. Deploy automático en cada push

### Opción 3: Netlify
1. Conecta tu repositorio de GitHub
2. Configura build: `npm run build`
3. Publish directory: `.next`

## 🔍 SEO

Metaetiquetas optimizadas en `app/layout.tsx`:
- Title: "Vigia 360 - Seguridad Profesional 24/7"
- Description: Descripción completa de servicios
- Keywords: "vigia 360, seguridad 360, vigilancia profesional, monitoreo 24/7, sistemas de seguridad"
- Open Graph: Para compartir en redes sociales

## 📧 Formulario de Contacto

El formulario incluye:
- Validación básica (campos requeridos)
- Feedback visual al enviar
- Campos: Nombre, Correo, Teléfono, Mensaje
- Actualmente guarda datos en consola (puedes integrar con tu backend)

**Para integrar con un servicio de email:**
- EmailJS
- SendGrid
- AWS SES
- Tu propio backend

## 🎬 Animaciones

Todas las secciones tienen animaciones suaves:
- `animate-fade-in` - Fade in vertical
- `animate-fade-in-left` - Slide desde izquierda
- `animate-fade-in-right` - Slide desde derecha
- `animate-bounce` - Indicador de scroll

## 🔐 Seguridad

- Sin dependencias externas inseguras
- Código validado y limpio
- Sin APIs expuestas en cliente
- Cookies y datos protegidos

## 📞 Soporte y Cambios Futuros

Para futuras personalizaciones:
1. Edita los componentes en `/components/`
2. Modifica estilos en `app/globals.css`
3. Actualiza metadata en `app/layout.tsx`

## 📄 Licencia

© 2025 **Vigia 360** - Seguridad Profesional. Todos los derechos reservados.

---

**Desarrollado con:**
- 🚀 Next.js 16
- ⚛️ React 19
- 🎨 Tailwind CSS v4
- 📱 Mobile-first responsive design

**¡Tu sitio está listo para convertir visitantes en clientes!**
