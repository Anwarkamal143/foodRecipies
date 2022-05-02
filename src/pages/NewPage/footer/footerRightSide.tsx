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
      <ul className="socialIcons">
        <li>
          <Icon className="socialIconsItem facebook">
          <FacebookIcon />
        </Icon>
        </li>
        <li>
          <Icon className="socialIconsItem youtube">
            <YoutubeIcon />
          </Icon>
        </li>
        <li>
          <Icon className="socialIconsItem twitter">
            <TwitterIcon />
          </Icon>
        </li>
        <li>
          <Icon className="socialIconsItem instagram">
            <InstagramIcon />
          </Icon>
        </li>
      </ul>

      <div className="subscribeForm">
        <div className="titleWrap">
          <img src="images/mail-box.png" alt="" />
          <strong className="title">Personalized Reccomendations</strong>
        </div>
        <p className="text">
          Join our outreach to recieve personalized recipe reccomendations,
          cooking tips, and stay up to date on your favorite cooks.
        </p>
      </div>
      <Input placeholder="Hello@onlinecook.com" icon={<span>Subscribe</span>} />
    </div>
  )
}

export default styled(FooterRightSide)``
