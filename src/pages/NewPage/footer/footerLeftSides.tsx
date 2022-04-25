import React from "react"
import styled from "styled-components"

type Props = {
  className?: string
}

const FooterLeftSide = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="Company">
        <h2>Company</h2>
        <ul>
          <li>About Online Cook</li>
          <li>Our Team</li>
          <li>Sponsorships</li>
          <li>Our Community</li>
          <li>Podcast Network</li>
          <li>Join the Team</li>
        </ul>
      </div>
      <div className="Company">
        <h2>Cooks</h2>
        <ul>
          <li>View all Cooks</li>
          <li>Cook Collections</li>
          <li>Cook Leaderboards</li>
          <li>Request a Cook</li>
          <li>Online Cook Application</li>
          <li>Cook Sponsorship</li>
        </ul>
      </div>
      <div className="Explore">
        <h2>Explore</h2>
        <ul>
          <li>View all Recipes</li>
          <li>Recipe Leaderboards</li>
          <li>Recipes by Type</li>
          <li>Recipes by Cuisine</li>
          <li>Recipes by Cuisine</li>
          <li>Recipe Collections</li>
        </ul>
      </div>
    </div>
  )
}

export default styled(FooterLeftSide)``
