import { join } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {},
  resolve: {
    alias: {
      '@': join(process.cwd(), 'src'),
    },
  },
});
