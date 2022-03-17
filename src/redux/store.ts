import { configureStore, ThunkAction } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { Action } from "redux"
import { UserSlice } from "./reducers"

const makeStore = () =>
  configureStore({
    reducer: {
      user: UserSlice,
    },
    devTools: true,
  })
export const store = makeStore()
export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

// export const fetchSubject =
//   (id: any): AppThunk =>
//   async dispatch => {
//     const timeoutPromise = (timeout: number) =>
//       new Promise(resolve => setTimeout(resolve, timeout))

//     await timeoutPromise(200)

//     dispatch(
//       subjectSlice.actions.setEnt({
//         [id]: {
//           id,
//           name: `Subject ${id}`,
//         },
//       })
//     )
//   }

export const wrapper = createWrapper<AppStore>(makeStore)

// export const selectSubject = (id: any) => (state: AppState) =>
//   state?.[subjectSlice.name]?.[id]
