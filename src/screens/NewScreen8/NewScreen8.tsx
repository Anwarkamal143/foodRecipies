import { Banner } from "@components"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
import Lottie from "react-lottie"
import SearchBar from "src/components/SearchBar"
import Footer from "src/pages/NewPage/footer/footer"
import styled from "styled-components"
import Card from "../NewScreen7/components/Card"

interface Props {
  className?: string
}

const NewScreen8 = ({ className }: Props) => {
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
          title="Recipes By Ingredient"
          subTitle="Explore recipes from across the world. Looking to make some homemade pasta? We have plenty of Italian recipes! Looking to challenge yourself and cook something new from another country? Check out a new cuisine below."
          lottieAnimation={
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          }
        />
        <header className="food-sectionHeader">
          <ul className="organizedByList">
            <li>
              <strong className="title">Organized By:</strong>
            </li>
            <li>
              <a href="#">Recipes By Cuisine</a>
            </li>
          </ul>
          <SearchBar
            options={{
              showSearchBar: true,
              showSwitchBox: false,
              showFilter: true,
              showSortBy: true,
            }}
          />
        </header>
        <div className="cards-frame">
          <div className="cards-row">
            {[10, 2].map((c, i) => (
              <Card
                className="card-item"
                key={i}
                type="secondary"
                cardImg="/images/cardImg.jpg"
                profImg="/images/profile-img.png"
                title="GoPro HERO 10 Black: The Million Dollar Challenge"
                category="Nick Digiovanni"
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

export const MyNewScreen8 = styled(NewScreen8)`
  .pb-80 {
    padding-bottom: 80px;
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
