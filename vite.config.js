import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/SkinsForLOL/', // 👈 Change this to your repo name
});
