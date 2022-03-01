import ls from './lib'

const keyStore = ls('KEY')

keyStore.set({ foo: 'bar' })

const v = keyStore.get()

console.log(v)

ls.clear()
