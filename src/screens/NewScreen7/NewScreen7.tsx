import { Banner } from "@components"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
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
          lottieAnimation={<img src="/images/banner-image.png" />}
        />
        <SearchBar
          sortBy={[
            { name: "Recently Saved" },
            { name: "Alphabetical" },
            { name: "Most Popular" },
          ]}
          placeholder="Search My Saved Products..."
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

    @media (max-width: 767px) {
      padding-left: 0;
      padding-right: 0;
    }
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
    justify-content: center;

    @media (max-width: 1279px) {
      margin: 0 -8px;
    }

    .card-item {
      margin: 0 12px 38px;
      width: 211px;

      @media (max-width: 1279px) {
        margin: 0 8px 38px;
      }

      @media (max-width: 767px) {
        width: 147px;
        margin: 0 8px 25px;
      }
    }
  }

  .rc-pagination {
    padding-top: 0;
  }
`
