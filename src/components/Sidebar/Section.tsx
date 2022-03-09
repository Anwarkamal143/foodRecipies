import { FC } from "react"

export type ISectionProps = {
  className?: string
  division?: boolean
  top?: boolean
  bottom?: boolean
  [key: string]: any
}
const SectionWrapper: FC<ISectionProps> = ({
  className,
  children,
  top,
  bottom,
  division,
}) => {
  const showtop = division && top
  const showbottom = division && bottom
  return (
    <>
      {showtop && (
        <div className="px-6">
          <hr className="border-gray-700" />
        </div>
      )}
      <div className={` px-5 py-5 ${className}`}>{children}</div>
      {showbottom && (
        <div className="px-6">
          <hr className="border-gray-700" />
        </div>
      )}
    </>
  )
}

export default SectionWrapper
