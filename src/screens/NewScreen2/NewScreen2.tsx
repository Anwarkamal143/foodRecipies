import { Banner, SocialCard } from "@components"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "@icons"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
import Lottie from "react-lottie"
import SearchBar from "src/pages/NewPage/SearchBar"
import styled from "styled-components"

interface Props {
  className?: string
}

const NewScreen2 = ({ className }: Props) => {
  const countPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [collection, setCollection] = useState(
    cloneDeep(RecipesData.slice(0, countPerPage))
  )
  const updatePage = (p: any) => {
    setCurrentPage(p)
    const to = countPerPage * p
    const from = to - countPerPage
    setCollection(cloneDeep(RecipesData.slice(from, to)))
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CookAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div className={classNames(className)}>
      <Banner
        title="All Online Cooks"
        subTitle="Explore recipes from across the world. Looking to make some homemade pasta? We have plenty of Italian recipes! Looking to challenge yourself and cook something new from another country? Check out a new cuisine below."
        lottieAnimation={
          <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        }
      />
      <SearchBar />
      <div>
        {[10, 2].map((c, i) => (
          <SocialCard
            key={i}
            type="primary"
            profileImage="/images/profile-img.png"
            bgImage="/images/mock/post1.png"
            title="Jessica Jones"
            date="05/28/22"
            icon={{
              facebook: <FacebookIcon />,
              youtube: <YoutubeIcon />,
              twitter: <TwitterIcon />,
              instagram: <InstagramIcon />,
            }}
            footerValue={{
              views: "2.5k",
              recipies: "35",
              saves: "230",
            }}
          />
        ))}
      </div>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={RecipesData.length}
        showPrevNextJumpers={true}
        nextIcon="Next"
        prevIcon="Previous"
      />
      {/* <Footer /> */}
    </div>
  )
}

export const MyNewScreen2 = styled(NewScreen2)``
