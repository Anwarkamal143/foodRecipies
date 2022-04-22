//// Example

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { MediaType } from "@apptypes/media"
import type { AppState } from "../store1"
import { SearchCooksMockData, SearchRecipesMockData } from "@redux/data/smartSearch"
// Define a type for the slice state

interface ISmartSearchState {
  isSearching?:boolean
  smatSearch?: {
    recipes: {items: [], totalCount: 0}
    cooks: {items: [], totalCount: 0}
  }
  
}

// Define the initial state using that type
const initialState: ISmartSearchState = {
  
  isSearching:false
}
export const toggleCommentLike = createAsyncThunk<
  {
    text?: string;
    data?: ISmartSearchState['smatSearch'];
  },
  { text?: string; callback?: (...args: any) => void }
>('sale/postcommenttoggle', async ({ text, callback }) => {
  const data: ISmartSearchState['smatSearch'] = await new Promise((res,rej) => {
    setTimeout(() => {
      res({recipes: {items: SearchRecipesMockData, totalCount: SearchRecipesMockData.length}, cooks:{items:  SearchCooksMockData, totalCount: SearchCooksMockData.length}})
    }, 200);
  })
  callback?.(data);
  return  data;
});
export const smartSearchSlice = createSlice({
  name: "smartSearchSlice",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.isOpen = action.payload
    },
  },
  extraReducers: builder => {},
})

// Extract the action creators object and the reducer
const { actions, reducer } = smartSearchSlice

export const { toggleSidebar } = actions

// Other code such as selectors can use the imported `RootState` type
export const selectSmartSearchSlice = (state: AppState) => state.smartSearch

export const Sidebar = reducer
