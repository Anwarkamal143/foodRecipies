import classNames from "classnames"
import { ReactNode } from "react"
import { BannerWrapper } from "./Banner.styled"

interface Props {
  className?: string
  title?: string
  subTitle?: string
  lottieAnimation?: ReactNode
}
const BannerCard = ({ className, title, subTitle, lottieAnimation }: Props) => {
  return (
    <BannerWrapper className={classNames(className)}>
      <h3>{title}</h3>
      <span>{subTitle}</span>
      {lottieAnimation}
    </BannerWrapper>
  )
}

export const Banner = BannerCard
