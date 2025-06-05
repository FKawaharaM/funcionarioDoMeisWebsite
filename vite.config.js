// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/funcionariodomeis/', // 👈 repo name here
  plugins: [react()],
})
