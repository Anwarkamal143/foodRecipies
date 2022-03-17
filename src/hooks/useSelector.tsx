import { AppState } from "@redux"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
