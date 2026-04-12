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

**Nota sobre dependencias**: El proyecto usa Deno como runtime principal, pero
incluye un `package.json` mínimo con Wrangler 4.80.0 como devDependency
exclusivamente para GitHub Actions CI/CD. Tailwind y otras herramientas se
instalan vía Deno.

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
deno task start      # Desarrollo con hot-reload
deno task check      # Fmt + Lint + Type check (verificación completa)
deno task fmt        # Formatear código
deno task precommit  # Formatear + validar (usado en pre-commit hook)
deno task build      # Build de producción
deno task deploy     # Desplegar a Cloudflare Workers
deno lint            # Verificar lint
deno check **/*.ts   # Verificar tipos
```

## Git Hooks (Husky)

El proyecto usa Husky para garantizar calidad de código antes de cada commit.

### Pre-commit Hook

Ejecuta automáticamente `deno task precommit`:

1. **`deno fmt`** - Formatea código automáticamente
2. **`deno lint`** - Valida reglas de linting (bloquea si falla)
3. **`deno check **/*.ts **/*.tsx`** - Valida tipos TypeScript (bloquea si
   falla)

### Setup

Después de clonar el repositorio:

```bash
deno install         # Instala dependencias npm (Tailwind, Wrangler, etc.)
deno task prepare    # Configura git hooks de Husky
```

### Diferencia: `check` vs `precommit`

- **`deno task check`**: Usado en CI - valida sin modificar (`fmt --check`)
- **`deno task precommit`**: Usado en hook - formatea automáticamente (`fmt`)

### Bypass (solo emergencias)

```bash
git commit --no-verify -m "mensaje"
```

**Nota:** El CI de GitHub Actions ejecuta `deno task check` y validará de todas
formas.

### Troubleshooting

**Hook no se ejecuta:**

```bash
# Re-instalar hooks
deno task prepare
```

**Deno no encontrado en hook:**

El hook `.husky/pre-commit` ya incluye `export PATH="$HOME/.deno/bin:$PATH"`
para garantizar que Deno esté disponible. Si aún falla, verificar:

```bash
# Verificar que Deno está instalado
which deno

# Si no está, instalarlo:
curl -fsSL https://deno.land/install.sh | sh
```

**Hook muy lento:**

- Considerar usar `lint-staged` para verificar solo archivos modificados
- Por ahora, `deno check` verifica todos los archivos .ts/.tsx

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
- Secrets necesarios: `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` en GitHub
  Actions
- El archivo `static/styles.css` es generado por Tailwind durante el build

## Cloudflare Workers - Diferencias vs Deno Deploy

### Runtime Edge

- **V8 Isolates**: Sin filesystem, solo APIs Web Standards
- **Cold start**: ~5ms (súper rápido)
- **300+ edge locations**: Latencia ultra baja global

### Limitaciones

- ❌ NO `Deno.readTextFile()` / `Deno.writeFile()` - sin filesystem
- ❌ NO `Deno.env.get()` - usar env bindings de Cloudflare
- ✅ Usar imports estáticos para assets (JSON, archivos)
- ⚠️ Límite CPU: 50ms por request (plan gratuito)
- ⚠️ Bundle size: 1MB compressed

### Assets Estáticos

- Servidos desde Cloudflare CDN (configurado en `wrangler.jsonc`)
- Directorio `./static` sube automáticamente
- Accesibles vía rutas absolutas (ej: `/styles.css`)

### Traducciones (i18n)

- Importadas estáticamente en `utils/i18n.ts`
- Bundleadas en build time (no filesystem en runtime)
- Agregar nuevo idioma requiere rebuild + deploy
