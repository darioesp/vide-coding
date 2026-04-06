# CLAUDE.md - Guía de Desarrollo

## Descripción del Proyecto

Landing page informativa sobre "Vibe Coding" basada en el trabajo de Peter Wong.
Proyecto construido con Deno Fresh con soporte para internacionalización
(español e inglés) y tema oscuro.

## Stack Tecnológico

- **Runtime**: Deno
- **Framework**: Fresh 1.7.3
- **UI**: Preact 10.22.0
- **CSS**: Tailwind CSS 3.4.1
- **Deployment**: Cloudflare Workers (via Wrangler)

## Convenciones de Código

### Componentes Fresh

- **Components** (`/components/`): Componentes estáticos renderizados en
  servidor
- **Islands** (`/islands/`): Componentes interactivos que se hidratan en cliente
- Usar `PageProps` con generics para tipado de props en rutas
- Handler functions en `Handlers<Data, MiddlewareState>`

### Nomenclatura

- Archivos: PascalCase (ej: `Footer.tsx`, `DarkMode.tsx`)
- Componentes: PascalCase export default
- Funciones utilities: camelCase
- Interfaces: PascalCase con sufijo `Props` para componentes

### Props de Componentes

Usar interfaces explícitas con `readonly` para propiedades de solo lectura:

```tsx
interface SectionWrapperContentProps {
  readonly title?: string;
  readonly attrClass?: string;
  readonly children: preact.ComponentChildren;
}
```

### Internacionalización

- Archivos JSON en `/locales` con estructura anidada por sección
- Función `t(lang)` en `utils/i18n.ts` para cargar traducciones
- Fallback automático a español si el idioma no existe
- Usar `dangerouslySetInnerHTML` con `deno-lint-ignore react-no-danger` para
  HTML en traducciones

### Dark Mode

- Implementado con Tailwind `dark:` classes
- Estado guardado en `localStorage` con key `theme`
- Detecta preferencia del sistema via `prefers-color-scheme`

## Comandos Importantes

```bash
deno task start    # Desarrollo con hot-reload
deno task check    # Fmt + Lint + Type check (verificación completa)
deno task build    # Build de producción
deno task deploy   # Desplegar a Cloudflare Workers
deno fmt          # Formatear código
deno lint         # Verificar lint
deno check **/*.ts # Verificar tipos
```

## Patrones Comunes

### Ruta con Middleware State

```tsx
interface MiddlewareState {
  lang: string;
  translations: typeof translations;
}

interface Data {
  languages: string[];
}

export const handler: Handlers<Data, MiddlewareState> = {
  async GET(_, ctx) {
    const languages = await getLanguages();
    return ctx.render({ languages });
  },
};

export default function Home(
  { state, data }: PageProps<Data, MiddlewareState>,
) {
  // state contiene lang y translations del middleware
  // data contiene los datos del handler
}
```

### Componente Island con useEffect

```tsx
"use client";
import { useEffect, useState } from "preact/hooks";

export default function Component() {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Efectos de cliente
  }, []);

  return <button onClick={() => setState(!state)}>Toggle</button>;
}
```

## Archivos Importantes

- `deno.json` - Configuración de tareas, imports y lint
- `fresh.config.ts` - Plugins de Fresh (Tailwind)
- `tailwind.config.ts` - Configuración de Tailwind
- `wrangler.jsonc` - Configuración de Cloudflare Workers
- `.github/workflows/deploy.yml` - Pipeline de CI/CD

## Notas de Deployment

- El proyecto está configurado para Cloudflare Workers
- Secrets necesarios para Wrangler si se agregan
- El archivo `static/styles.css` es generado por Tailwind durante el build
