import { type PageProps } from "$fresh/server.ts";

/* 
import { Handlers } from "$fresh/server.ts";
import marked from "marked"; */

/* export const handler: Handlers = {
  async GET(req, ctx) {
    // Lee el archivo Markdown
    const markdownContent = await Deno.readTextFile("./static/mi-archivo.md");

    // Convierte el Markdown a HTML
    const htmlContent = marked(markdownContent);

    return new Response(htmlContent, {
      headers: { "Content-Type": "text/html" },
    });
  },
} */

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>vibe coding</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#f9f9f9] text-[#444444]">
        <Component />
      </body>
    </html>
  );
}
