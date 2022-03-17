//// Example

import { createSlice } from "@reduxjs/toolkit"
import { MediaType } from "@apptypes/media"
import type { AppState } from "../store1"
// Define a type for the slice state
interface IChatSliderState {
  isOpen: boolean
  attachments: {
    items: Omit<MediaType, "isPaidType" | "orignalFile" | "islocK">[]
    active: any
  }
}

// Define the initial state using that type
const initialState: IChatSliderState = {
  attachments: { items: [], active: null },
  isOpen: false,
}

export const siderSlice = createSlice({
  name: "siderSlice",
  initialState,
  reducers: {
    toggleSlider: (state, action) => {
      state.isOpen = action.payload
    },
    setSliderAttachments: (state, action) => {
      state.attachments = action.payload
    },
  },
  extraReducers: builder => {},
})

// Extract the action creators object and the reducer
const { actions, reducer } = siderSlice

export const { toggleSlider, setSliderAttachments } = actions

// Other code such as selectors can use the imported `RootState` type
export const selectSlider = (state: AppState) => state.slider

export const Slider = reducer
