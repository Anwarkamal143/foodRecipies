import { Banner, SocialCard } from "@components"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "@icons"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
import SearchBar from "src/components/SearchBar"
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
        title={<span>Your Favorite Cooks</span>}
        subTitle={
          <span>
            Online Cook is the only platform where you can follow and stay
            up-to-date with your favorite cooks. Explore their recipes,
            collections, products, and check out their social media.
            <strong>View Suggested Cooks +</strong>
          </span>
        }
        lottieAnimation={<img src="/images/banner-image1.png" />}
      />
      <SearchBar
        sortBy={[
          { name: "Featured" },
          { name: "Most Recipes" },
          { name: "Most Follows" },
          { name: " Most Saves" },
          { name: "Recently Joined" },
          { name: "Alphabetical" },
        ]}
        placeholder="Search My Followed Cooks..."
        options={{
          showSearchBar: true,
          showSwitchBox: false,
          showFilter: false,
          showSortBy: true,
        }}
      />
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

  .recipesFiltersForm {
    padding: 40px 2rem !important;

    @media (max-width: 1279px) {
      padding: 40px 20px !important;
    }

    @media (max-width: 767px) {
      padding: 20px 10px !important;
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
      padding: 0 10px 30px;
    }
  }

  .cards-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -12px;

    @media (max-width: 1279px) {
      margin: 0 -8px;
    }

    .card-primary {
      margin: 0 12px 38px;
      width: 228px;

      @media (max-width: 1279px) {
        margin: 0 8px 38px;
      }

      @media (max-width: 767px) {
        width: 153px;
        margin: 0 8px 25px;
      }
    }
  }

  .rc-pagination {
    padding-top: 0;
  }
`
