import { defineConfig } from "vite";

export default defineConfig({
  base: "/SPA_Header_NR/", // Usa rutas relativas en los enlaces generados en el HTML

  build: {
    outDir: "dist", // Asegura que la carpeta de salida es "dist"
    assetsDir: "assets", // Mantiene los archivos JS y CSS en "dist/assets"
  },
  
  server: {
    watch: {
      usePolling: true, // Activa la detección de cambios en ciertos entornos
    },
    host: true, // Permite acceder desde otras IPs (útil en WSL o Docker)
    strictPort: true, // Evita que cambie de puerto automáticamente
  },
});
