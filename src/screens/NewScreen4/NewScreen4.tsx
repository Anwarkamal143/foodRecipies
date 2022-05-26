import { Banner } from "@components"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import { IngredientData } from "data"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
import Lottie from "react-lottie"
import SearchBar from "src/components/SearchBar"
import { Content } from "src/components/SliderContent"
import styled from "styled-components"
interface Props {
  className?: string
}

const NewScreen4 = ({ className }: Props) => {
  const countPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [ingredientData, setIngredientData] = useState<any>(
    IngredientData?.[0]?.data
  )

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
      <SearchBar
        options={{
          showSearchBar: true,
          showSwitchBox: false,
          showFilter: true,
          showSortBy: true,
        }}
      />
      <div className="cards-frame">
        <div className="cards-row">{Content(ingredientData)}</div>
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
  )
}

export const MyNewScreen4 = styled(NewScreen4)`
  .banner-area:after {
    left: 0;
    right: 0;
  }

  .recipesFiltersForm {
    padding: 30px 2rem !important;

    @media (max-width: 1279px) {
      padding: 30px 20px !important;
    }

    @media (max-width: 767px) {
      padding: 20px 10px !important;
    }
  }

  .cards-frame {
    padding: 0 3.5rem;

    @media (max-width: 1279px) {
      padding: 0 40px;
    }

    @media (max-width: 767px) {
      padding: 0 10px 40px;
    }

    .cards-row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .recipesSectionCards {
      width: 20%;
      padding: 0 7px;
      margin: 0 0 25px;

      @media (max-width: 1439px) {
        width: 25%;
      }

      @media (max-width: 1023px) {
        width: 50%;
      }
    }

    .recipeItem {
      width: 100%;
      margin: 0;
    }
  }

  .rc-pagination {
    padding: 0;
  }
`
