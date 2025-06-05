// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/funcionariodomeis/', // your repo name!
  plugins: [react()]
})