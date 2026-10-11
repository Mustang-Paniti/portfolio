import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Relative asset paths work for both username.github.io and project repositories.
export default defineConfig({ plugins: [react()], base: './' })
