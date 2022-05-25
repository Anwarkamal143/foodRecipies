import { Banner, Button, DropDown } from "@components"
import { DownArrowIcon } from "@icons"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import { IngredientData } from "data"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
import Lottie from "react-lottie"
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
      <header className="food-sectionHeader">
        <ul className="organizedByList">
          <li>
            <strong className="title">Organized By:</strong>
          </li>
          <li>
            <a href="#">Recipes By Cuisine</a>
          </li>
        </ul>
        <span className="sortBy sortByFilter">
          <span className="sortByFilterlbl">Sort by</span>
          <DropDown
            button={selected => (
              <Button
                shape="circle"
                iconRight={<DownArrowIcon />}
                className="buttonFilter"
                size="small"
              >
                {selected}
              </Button>
            )}
            items={[{ name: "Relevance" }, { name: "Relevance" }]}
            renderItem={({ item, isActive, onClick }) => {
              return (
                <div
                  className={`${isActive} item`}
                  onClick={() => onClick(item.name)}
                >
                  {item.name}
                </div>
              )
            }}
          />
        </span>
      </header>
      <div>{Content(ingredientData)}</div>
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
  )
}

export const MyNewScreen4 = styled(NewScreen4)``
