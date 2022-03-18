import { AppDispatch } from "@redux"
import { useDispatch } from "react-redux"

export const useAppDispatch = () => useDispatch<AppDispatch>()
