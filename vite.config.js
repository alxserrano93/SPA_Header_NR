import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // Usa rutas relativas en los enlaces generados en el HTML
  server: {
    watch: {
      usePolling: true, // Activa la detección de cambios en ciertos entornos
    },
    host: true, // Permite acceder desde otras IPs (útil en WSL o Docker)
    strictPort: true, // Evita que cambie de puerto automáticamente
  },
});
