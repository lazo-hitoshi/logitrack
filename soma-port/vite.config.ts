import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * DEPLOY_TARGET:
 * - (default) "subpath" : LogiTrack内の `/soma-port/` で動かす（既存）
 * - "site"             : 独立サイト（ルート `/`）で動かす（港入港スケジュール専用）
 */
export default defineConfig(() => {
  const deployTarget = process.env.DEPLOY_TARGET || 'subpath';
  const isSite = deployTarget === 'site';

  return {
    plugins: [react()],
    base: isSite ? '/' : '/soma-port/',
    build: {
      outDir: isSite ? '../hosting_port_schedule' : '../hosting_public/soma-port',
      emptyOutDir: true
    }
  };
});

