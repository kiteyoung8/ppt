import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/你的倉庫名稱/', // 例如 '/quote-generator/'
})