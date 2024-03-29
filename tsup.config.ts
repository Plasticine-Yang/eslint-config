import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: 'cjs',
  clean: true,
  shims: true,
  cjsInterop: true,
})
