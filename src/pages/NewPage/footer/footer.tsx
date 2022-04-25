import { InstagramIcon } from "@icons"
import React from "react"
import FooterLeftSide from "./footerLeftSides"
import FooterRightSide from "./footerRightSide"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <div className="footer-img">
        <img src="/images/footer.jpg" alt="footer" />
        <span>
          <InstagramIcon />
          Follow on Instagram
        </span>
      </div>
      <div className="footer">
        <div className="footer-left">
          <img src="/svg/logo-white.svg" alt="brand" />
          <FooterLeftSide />
        </div>
        <div className="footer-right">
          <FooterRightSide />
        </div>
      </div>
    </div>
  )
}

export default Footer
