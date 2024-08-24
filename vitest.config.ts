// vite.config.ts
import { coverageConfigDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // Point to your setup file for Vitest
    coverage: {
      exclude: [
        '**/*.stories.@(js|jsx|mjs|ts|tsx)/**',
        '**/*.mocks.ts',
        'src/main.tsx',
        'src/App.tsx',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
})
