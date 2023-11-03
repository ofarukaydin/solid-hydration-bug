import solid from "solid-start/vite";
import { defineConfig } from "vite";
// import cloudflare from "solid-start-cloudflare-pages";
import vercel from "solid-start-vercel";

export default defineConfig({
  plugins: [solid({ ssr: true, adapter: vercel({ edge: true }) })],
});
