import { Banner } from "@components"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
import Lottie from "react-lottie"
import SearchBar from "src/components/SearchBar"
import styled from "styled-components"
import Card from "./components/Card"

interface Props {
  className?: string
}

const NewScreen7 = ({ className }: Props) => {
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
          title="Your Saved Products"
          subTitle="Save products from your favorite cooks to purchase them later - whether it be a cookbook or a special salt brand. No saved products yet? Check out your followed cooks or browse all cooks"
          lottieAnimation={
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          }
        />
        <SearchBar
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
              <Card
                className="card-item"
                key={i}
                tag="Exclusive"
                type="primary"
                cardImg="/images/cardImg.jpg"
                category="Global Goods Partners"
                title="Damn Delicious: 100 Super Easy, Super Fast Recipes"
                price="79.99"
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
    </div>
  )
}

export const MyNewScreen7 = styled(NewScreen7)`
  .pb-80 {
    padding-bottom: 80px;
  }

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
    padding: 0 2rem;

    @media (max-width: 1279px) {
      padding: 0;
    }
  }

  .cards-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;

    @media (max-width: 1279px) {
      margin: 0 -8px;
    }

    .card-item {
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
