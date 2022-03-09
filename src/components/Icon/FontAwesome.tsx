import { FontAwesomeWrapper, IconWrapper } from "./Fontawesome.styled"

export type FontAwesomeProps = {
  variant?: "fad" | "fal" | "fas" | "far" | "fab"
  icon: string
}
export const FontAwesome = (props: FontAwesomeProps) => {
  const { variant, icon } = props
  return (
    <FontAwesomeWrapper>
      <IconWrapper className={`${variant} ${icon}`} />
    </FontAwesomeWrapper>
  )
}

FontAwesome.propTypes = {}
FontAwesome.defaultProps = {
  variant: "fas",
  icon: "",
}
