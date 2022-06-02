/* eslint-disable @next/next/no-img-element */
import { AddProfile, InfoArrow } from "@icons"
import classNames from "classnames"
import styled from "styled-components"
import { Button } from "../Button"
import Tabs from "../Tabs"

interface Props {
  className?: string
}
const TabPane = Tabs.TabPane

const ProfileCook = ({ className }: Props) => {
  return (
    <div className={classNames(className)}>
      <div>
        <img src="/images/bg_panel.jpg" alt="profile_bg" />
      </div>
      <div>
        <img src="/images/cook.png" alt="profile_img" />
      </div>
      <div>
        <h2>Nick Digiovanni</h2>
        <ul>
          <li>85 Recipes |</li>
          <li>1.5k Saves |</li>
          <li>4.3K Followers</li>
        </ul>
      </div>
      <div>
        <Button iconLeft={<AddProfile />} type="info">
          Follow Cook
        </Button>
        <Button iconRight={<InfoArrow />} type="info">
          InfoArrow
        </Button>
      </div>
      <Tabs defaultActiveKey="1" type="line">
        <TabPane tab={<span>Recipes</span>} key="1">
          <div>
            <img src="/images/illustration.png" alt="" />
            <h2>No Products to Display Yet</h2>
            <span>
              Check back later to see what I add. In the meantime, check out
              some of my recipes below:
            </span>
            <Button iconLeft={<InfoArrow />} type="info">
              Check Out My Recipes
            </Button>
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default styled(ProfileCook)``
