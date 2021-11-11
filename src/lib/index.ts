const isEnabled: boolean = (() => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return true
    }
  } catch (err) {
    // swallow error, warn later
  }
  if (typeof window !== 'undefined') {
    console.warn(`Local storage is not available. Changes won't persist.`)
  }
  return false
})()

const memoMap = new Map<string, any>()

function ls<T = string | object | null>(key: string) {
  return {
    get(): T | undefined {
      if (memoMap.has(key)) {
        return memoMap.get(key)
      }
      if (!isEnabled) return
      const lsItem = isEnabled && localStorage.getItem(key)
      if (lsItem) {
        try {
          const { value } = JSON.parse(lsItem)
          return value
        } catch {
          return lsItem as unknown as T
        }
      }
      return
    },
    set(value: T): void {
      memoMap.set(key, value)
      isEnabled && localStorage.setItem(key, JSON.stringify({ value }))
    },
    delete() {
      memoMap.delete(key)
      isEnabled && localStorage.removeItem(key)
    },
  }
}

ls.clear = function () {
  memoMap.clear()
  isEnabled && localStorage.clear()
}

export default ls
