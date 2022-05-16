//// Example

import { createSlice } from "@reduxjs/toolkit"
import { MediaType } from "@apptypes/media"
import type { AppState } from "../store1"
// Define a type for the slice state
interface ISidebarState {
  isOpen: boolean
  type: "SEARCH" | "NOTIFICATION" | "PROFILE"
}

// Define the initial state using that type
const initialState: ISidebarState = {
  isOpen: false,
  type: "SEARCH",
}

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.isOpen = action.payload?.isOpen
      state.type = action.payload?.type
    },
  },
  extraReducers: builder => {},
})

// Extract the action creators object and the reducer
const { actions, reducer } = sidebarSlice

export const { toggleSidebar } = actions

// Other code such as selectors can use the imported `RootState` type
export const selectSidebarSlice = (state: AppState) => state.slider

export const Sidebar = reducer
