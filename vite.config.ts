import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root path for custom domain, or '/portfolio_site/' for github.io subdomain
  base: process.env.GITHUB_PAGES && !process.env.CUSTOM_DOMAIN ? '/portfolio_site/' : '/',
})
