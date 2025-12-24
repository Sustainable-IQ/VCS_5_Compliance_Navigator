import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/VCS_5_Compliance_Navigator/',
  server: {
    port: 3000,
    open: true
  }
})
