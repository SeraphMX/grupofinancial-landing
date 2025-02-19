import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import sitemap from 'vite-plugin-sitemap'

import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    sitemap({
      hostname: 'https://grupofinancial.online',
      dynamicRoutes: [
        '/productos/credito-simple',
        '/productos/credito-revolvente',
        '/productos/arrendamiento',
        '/solicitud',
        '/solicitud-credito-simple',
        '/solicitud-credito-revolvente',
        '/solicitud-arrendamiento',
        '/nosotros',
        '/privacidad',
        '/terminos',
        '/comisiones'
      ]
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    // Ajustar el límite de tamaño de los chunks
    //chunkSizeWarningLimit: 1000, // 1MB, puedes ajustar este valor según sea necesario

    // Configuración para controlar los chunks manualmente
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Agrupa todas las dependencias en un solo chunk llamado 'vendor'
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})
