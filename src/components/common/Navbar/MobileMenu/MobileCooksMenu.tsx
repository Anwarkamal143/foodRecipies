/* eslint-disable @next/next/no-img-element */
import React from "react"
import ExploreNewCooks from "./MobileCooksMenu/ExploreNewCooks "
import MobileCooksMenuContext, {
  MobileCooksMenuItems,
  useMobileCooksMenu,
} from "./MobileCooksMenu/MobileCooksMenuContext"
import MostActiveCooks from "./MobileCooksMenu/MostActiveCooks"
import MyFollowedCooks from "./MobileCooksMenu/MyFollowedCooks"
import TopRankedCooks from "./MobileCooksMenu/TopRankedCooks"
import { useMobileMenu } from "./MobileMenuContext"
import { MobileRecipiesNavigation } from "./MobileRecipiesMenu"

function MobileCooksMenu() {
  return (
    <MobileCooksMenuContext>
      <MobileCooksMenuLogicalComponent />
    </MobileCooksMenuContext>
  )
}

function MobileCooksMenuLogicalComponent() {
  const { setOpenState } = useMobileMenu()
  const { mobileCooksOpenState } = useMobileCooksMenu()
  return (
    <>
      <div className="flex flex-col w-full h-full gap-4 py-4 bg-white ">
        <MobileCooksMenuItems />
        {mobileCooksOpenState === "Most_Active_Cooks" ? (
          <MostActiveCooks />
        ) : mobileCooksOpenState === "Top_Ranked_Cooks" ? (
          <TopRankedCooks />
        ) : mobileCooksOpenState === "Explore_New_Cooks_" ? (
          <ExploreNewCooks />
        ) : mobileCooksOpenState === "My_Followed_Cooks" ? (
          <MyFollowedCooks />
        ) : null}
      </div>
    </>
  )
}

export function MobileCooksMenuHeader() {
  const { setOpenState } = useMobileMenu()

  return (
    <div className="flex items-center w-full ">
      <MobileRecipiesNavigation
        icon="/svg/RecipiesLeaderboard.svg"
        title="Cooks"
        goNagivation={setOpenState}
      />
    </div>
  )
}

export default MobileCooksMenu
