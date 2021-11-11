import { defineConfig } from 'vite'

const name = 'RENAME_ME'

export default defineConfig({
  build: {
    lib: {
      entry: new URL('src/lib/index.ts', import.meta.url).pathname,
      formats: ['cjs', 'es'],
      name,
      fileName: (format) =>
        ({
          cjs: 'lib.cjs',
          es: 'lib.js',
        }[format]),
    },
  },
})
