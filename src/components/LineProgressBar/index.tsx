import styled from "styled-components"

type IProgressBarprops = {
  progresspercent: number
  bgColor: string
  showPrgress?: boolean
  title?: string
}
const ProgressBarr = (props: IProgressBarprops) => {
  const { bgColor, progresspercent, showPrgress = true, title } = props

  const containerStyles = {
    height: 7,
    width: "100%",
    backgroundColor: "#e5e8ef",
    borderRadius: 7,
  }

  const fillerStyles = {
    height: "100%",
    width: `${progresspercent}%`,
    backgroundColor: bgColor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  }

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  }
  const showLabels = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  }

  return (
    <div className="ctn-bar">
      <div style={showLabels}>
        <span>{title}</span>
        <span>{`${progresspercent}%`}</span>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {showPrgress && (
            <span style={labelStyles}>{`${progresspercent}%`}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export const ProgressBar = styled(ProgressBarr)``
