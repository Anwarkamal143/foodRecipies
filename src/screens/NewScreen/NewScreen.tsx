import { Banner, SocialCard } from "@components"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "@icons"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
import Lottie from "react-lottie"
import Footer from "src/pages/NewPage/footer/footer"
import SearchBar from "src/pages/NewPage/SearchBar"
import styled from "styled-components"

interface Props {
  className?: string
}

const NewScreen = ({ className }: Props) => {
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
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 pb-80">
        <Banner
          title="All Online Cooks"
          subTitle="Explore recipes from across the world. Looking to make some homemade pasta? We have plenty of Italian recipes! Looking to challenge yourself and cook something new from another country? Check out a new cuisine below."
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
                bgImage="/images/img-cook.jpg"
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
      </div>
      <Footer />
    </div>
  )
}

export const MyNewScreen = styled(NewScreen)`
  .pb-80 {
    padding-bottom: 80px;
  }

  .pageFiltersSearch {
    padding-left: 4rem;
    padding-right: 4rem;

    @media (max-width: 1279px) {
      padding-left: 20px;
      padding-right: 20px;
    }

    @media (max-width: 767px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .cards-frame {
    padding: 0 8.3rem;

    @media (max-width: 1279px) {
      padding: 0 40px;
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
      }
    }
  }

  .rc-pagination {
    padding-top: 0;
  }
`