import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { UserSlice, Slider } from "./reducers"

const initialState = {}
// eslint-disable-next-line
let _store: any
const createStore = (preloadedState: any = initialState) => {
  return configureStore({
    reducer: { user: UserSlice, slider: Slider },
    preloadedState,
  })
}
export const initialiseStore = (preloadedState?: any) => {
  console.log(_store)
  let store = _store ?? createStore(preloadedState)
  if (preloadedState && _store) {
    store = createStore({ ..._store.getState(), ...(preloadedState || {}) })
    _store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return store
  // Create the store once in the client
  if (!_store) _store = store

  return store as ReturnType<typeof createStore>
}
// export function makeStore() {
//   return configureStore({
//     reducer: { counter: counterReducer },
//   })
// }
export function makeStore() {
  return initialiseStore() as ReturnType<typeof createStore>
}

const rStore = makeStore()

export type AppState = ReturnType<typeof rStore.getState>

export type AppDispatch = typeof rStore.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export const store = rStore
