import { Banner } from "@components"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import { IngredientData } from "data"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
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
        title={<span>Your Favorite Recipes</span>}
        subTitle={
          <span>
            Online Cook was built from the ground-up to help you save, view, and
            discover recipes from your favorite cooks. Filter and sort your
            saved recipes or explore new ones via your{" "}
            <strong>Food Feed +</strong>
          </span>
        }
        lottieAnimation={<img src="/images/banner-image.png" />}
      />
      <SearchBar
        sortBy={[
          { name: "Recently Saved" },
          { name: "Alphabetical" },
          { name: "Most Saves" },
          { name: "Trending" },
        ]}
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
      justify-content: center;
    }

    .recipesSectionCards {
      width: 185px;
      margin: 0 7px 25px;

      @media (max-width: 767px) {
        width: 147px;
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
