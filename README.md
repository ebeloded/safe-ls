# safe-ls 🗃

A small convenience wrapper over `localStorage` API, allowing to store objects, with memory storage fallback when localStorage is not available (e.g. in Safari private mode, when all cookies are disabled in Chrome, or on the server during SSR).

```ts
import ls from 'safe-ls'

const keyStore = ls('KEY') // create store with KEY as key

keyStore.set({ foo: 'bar' }) // set value

const value = keyStore.get() // retreive value

ls.clear() // clear localStorage
```
