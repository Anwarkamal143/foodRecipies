import { Icon, Input } from "@components"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "@icons"
import React from "react"
import styled from "styled-components"

type Props = {
  className?: string
}

const FooterRightSide = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="socialIcons">
        <Icon className="socialIconsItem facebook">
          <FacebookIcon />
        </Icon>
        <Icon className="socialIconsItem youtube">
          <YoutubeIcon />
        </Icon>
        <Icon className="socialIconsItem twitter">
          <TwitterIcon />
        </Icon>
        <Icon className="socialIconsItem instagram">
          <InstagramIcon />
        </Icon>
      </div>

      <div className="Company">
        <span>
          <img src="images/mail-box.png" alt="" />
          <h2>Personalized Reccomendations</h2>
        </span>
        <p>
          Join our outreach to recieve personalized recipe reccomendations,
          cooking tips, and stay up to date on your favorite cooks.
        </p>
      </div>
      <Input icon={<span>Subscribe</span>} />
    </div>
  )
}

export default styled(FooterRightSide)``
