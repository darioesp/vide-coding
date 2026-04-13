# Vibe Coding - The Ultimate Guide / La Guía Definitiva

> Basado en el trabajo de Peter Wong · Creado por
> [@daesdev](https://github.com/daesdev)

<p align="center">
    <img width="800px" src="./static/preview.webp" alt="Localhost preview page Mac">
</p>

### Tecnologías usadas

[Deno Fresh](https://fresh.deno.dev/docs/getting-started) para el desarrollo de
la aplicación.

[Tailwind CSS](https://tailwindcss.com/docs) para el diseño de la aplicación.

[Cloudflare Workers](https://developers.cloudflare.com/workers/) para el
despliegue de la aplicación.

### Deploy

```bash
deno task deploy
```

### Información

[Post Linkedin Midudev](https://www.linkedin.com/posts/midudev_he-traducido-la-gu%C3%ADa-del-vibe-coding-por-activity-7305964730001596416-dTiG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB3PwcUBiv3bSv2wXSWJredG6j5r6cHfe4M)

[Post X Peter](https://x.com/peterwong_xyz/status/1898090027873452542)

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```bash
deno task start
```

### Development Workflow

Este proyecto usa **Husky** para ejecutar validaciones automáticas antes de cada
commit.

#### Setup inicial (solo una vez):

```bash
# Instalar dependencias npm (Wrangler para CI/CD)
npm install

# Configurar git hooks de Husky
deno task prepare
```

**Nota**: Este proyecto usa Deno como runtime principal, pero incluye un
`package.json` mínimo con Wrangler como devDependency para facilitar el deploy
en GitHub Actions.

#### Pre-commit Hook

Cada vez que hagas `git commit`, se ejecutan automáticamente:

1. **`deno fmt`** - Formatea el código automáticamente
2. **`deno lint`** - Valida reglas de linting (bloquea si falla)
3. **`deno check`** - Valida tipos TypeScript (bloquea si falla)

#### Comandos útiles:

```bash
deno task fmt          # Formatear código manualmente
deno task check        # Validar sin modificar (como en CI)
deno task precommit    # Formatear + validar (como en el hook)
deno task start        # Desarrollo con hot-reload
```

#### Bypass de hooks (solo emergencias):

```bash
git commit --no-verify -m "emergency fix"
```

**⚠️ NO abusar de `--no-verify`** - el CI de GitHub Actions igual validará el
código.
