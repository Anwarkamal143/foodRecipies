import { Icon } from "@components"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "@icons"
import React from "react"
import FooterLeftSide from "./footerLeftSides"
import FooterRightSide from "./footerRightSide"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="main-footer">
      <div className="instagramBlock">
        <img src="/images/footer.jpg" alt="footer" />
        <span className="followButton">
          <InstagramIcon />
          Follow&nbsp;on&nbsp;Instagram
        </span>
      </div>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerHolder">
            <div className="footerLeft">
              <strong className="footerLogo">
                <img src="/svg/logo-white.svg" alt="brand" />
              </strong>
              <FooterLeftSide />
            </div>
            <div className="footerRight">
              <FooterRightSide />
            </div>
          </div>
          <div className="footerBottom">
            <div className="footerLinks">
              <p className="copyrights">©2022 OnlineCook LLC</p>
              <ul className="footerLinksList">
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Code of Conduct</a></li>
                <li><a href="#">Accessibility Policy</a></li>
              </ul>
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
            </div>
          </div>
        </div>
        <a href="#" className="help-link"><img src="/images/device-message.svg" alt="icon" /> Help</a>
      </div>
    </div>
  )
}

export default Footer
