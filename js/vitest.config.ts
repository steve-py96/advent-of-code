import { join } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 60_000,
  },
  resolve: {
    alias: {
      '@': join(process.cwd(), 'src'),
    },
  },
});
