import React from "react"
import styled from "styled-components"

type Props = {
  className?: string
}

const FooterLeftSide = ({ className }: Props) => {
  return (
    <div className={`${className} footerColumns`}>
      <div className="footerNav">
        <strong className="title">Company</strong>
        <ul>
          <li><a href="#">About Online Cook</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Sponsorships</a></li>
          <li><a href="#">Our Community</a></li>
          <li><a href="#">Podcast Network</a></li>
          <li><a href="#">Join the Team</a></li>
        </ul>
      </div>
      <div className="footerNav">
        <strong className="title">Cooks</strong>
        <ul>
          <li><a href="#">View all Cooks</a></li>
          <li><a href="#">Cook Collections</a></li>
          <li><a href="#">Cook Leaderboards</a></li>
          <li><a href="#">Request a Cook</a></li>
          <li><a href="#">Online Cook Application</a></li>
          <li><a href="#">Cook Sponsorship</a></li>
        </ul>
      </div>
      <div className="footerNav">
        <strong className="title">Explore</strong>
        <ul>
          <li><a href="#">View all Recipes</a></li>
          <li><a href="#">Recipe Leaderboards</a></li>
          <li><a href="#">Recipes by Type</a></li>
          <li><a href="#">Recipes by Cuisine</a></li>
          <li><a href="#">Recipes by Cuisine</a></li>
          <li><a href="#">Recipe Collections</a></li>
        </ul>
      </div>
    </div>
  )
}

export default styled(FooterLeftSide)``
