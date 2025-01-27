import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        dashboard_remote: {
          type: "module",
          name: "dashboard_remote",
          entry: "http://localhost:3000/remoteEntry.js",
        },
      },

      filename: "remoteEntry.js",
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: dependencies.react,
          singleton: true,
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
    minify: false,
  },
});
