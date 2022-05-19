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
    height: 3,
    width: "100%",
    backgroundColor: "#e5e8ef",
    borderRadius: 4,
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
      <div className="ctn-barTitleWrap">
        <span className="ctn-barTitle">{title}</span>
        <span className="ctn-barProgress"><span className="ctnQty">40g</span> <span className="ctn-barProgressStatus">({`${progresspercent}%`})</span></span>
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
