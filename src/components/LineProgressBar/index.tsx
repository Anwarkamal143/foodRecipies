import styled from "styled-components"

type IProgressBarprops = {
  progresspercent: number
  bgColor: string
  showPrgress?: boolean
}
const ProgressBarr = (props: IProgressBarprops) => {
  const { bgColor, progresspercent, showPrgress = true } = props

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
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

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {showPrgress && (
          <span style={labelStyles}>{`${progresspercent}%`}</span>
        )}
      </div>
    </div>
  )
}

export const ProgressBar = styled(ProgressBarr)``
