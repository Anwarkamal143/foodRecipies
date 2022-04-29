import { Dayjs } from "dayjs"
export type RecipeProgressStatus = "up" | "down"
export type RecipeStatus = "live" | "draft" | "scheduled"

export type RecipeCreator = {
  _id: string
  name: string
  profileImage: string
  socialAccounts: string[] //array of social accounts urls
}
export type RecipeViews = {
  total: number
  progress: number
  status: RecipeProgressStatus
}
export type RecipeViewer = {
  _id: string
  name: string
  followed: boolean // is person followed the creator
  profileImage: string
  liked: boolean // is person liked the recipe
  isRecipeSaved: boolean // is person saved recipe
}

export type Recipe = {
  _id?: string
  rightDetails?: any
  description: string
  name?: string
  likes: number
  createdAt?: string | Dayjs
  updatedAt?: string | Dayjs
  creator: RecipeCreator
  person?: RecipeViewer
  images?: string[]
  status: RecipeStatus
  views?: RecipeViews
  rating?: number
  isDeleted?: boolean
  tags?: string[]
}
