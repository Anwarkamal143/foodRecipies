export interface MediaType {
  createdAt?: string
  updatedAt?: string

  path?: string
  type: "image" | "video" | string
  name?: string
  thumbnail?: string
  videoDuration?: string
  _id?: string
  id?: string
  size?: string
  orignalFile?: File
  islocK?: boolean
  duration?: number
  url?: string
  isActive?: boolean
  imageURL?: string
}
