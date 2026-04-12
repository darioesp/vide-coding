// Cloudflare Workers entry point for the vibe-coding landing page.
// The Fresh project is pre-rendered to static HTML during CI build (see deploy.yml).
// All requests are served from the pre-rendered dist/ directory via the ASSETS binding.
export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response("Asset binding not configured", { status: 500 });
    }
    return env.ASSETS.fetch(request);
  },
};
