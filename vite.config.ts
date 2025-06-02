import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const GITHUB_REPO_NAME = 'ReactPortfolio-v.2';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${GITHUB_REPO_NAME}/`,
})
