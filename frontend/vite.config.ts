import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: path.resolve(__dirname, '..'),
  plugins: [react()],
});
