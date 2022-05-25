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
        title="Your Favorite Cooks"
        subTitle="Online Cook is the only platform where you can follow and stay up-to-date with your favorite cooks. Explore their recipes, collections, products, and check out their social media.  View Suggested Cooks + "
        lottieAnimation={
          <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        }
      />
      <SearchBar />
      <div className="cards-frame">
        <div className="cards-row">
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
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export const MyNewScreen2 = styled(NewScreen2)`
  .banner-area {
    &:after {
      left: 0;
      right: 0;
    }
  }

  .pageFiltersSearch {
    padding-left: 2rem;
    padding-right: 2rem;

    @media (max-width: 1279px) {
      padding-left: 20px;
      padding-right: 20px;
    }

    @media (max-width: 1023px) {
      padding-left: 0;
      padding-right: 0;
    }

    @media (max-width: 767px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .cards-frame {
    padding: 0 3.5rem;

    @media (max-width: 1279px) {
      padding: 0 30px;
    }

    @media (max-width: 1023px) {
      padding: 0 15px;
    }

    @media (max-width: 767px) {
      padding: 0 10px;
    }
  }

  .cards-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;

    @media (max-width: 1279px) {
      margin: 0 -8px;
    }

    .card-primary {
      padding: 0 12px;
      margin: 0 0 38px;
      width: 25%;

      @media (max-width: 1279px) {
        padding: 0 8px;
      }

      @media (max-width: 1023px) {
        width: 33.333%;
      }

      @media (max-width: 767px) {
        width: 50%;
        margin: 0 0 25px;
        padding: 0 9px;
      }
    }
  }

  .rc-pagination {
    padding-top: 0;
  }
`
