import { DropDown, ProfileSteps } from "@components"
import { DownArrowIcon, FilterIcon, SearchIconAlt } from "@icons"
import { getPageLayout } from "@layouts"
import { FavData } from "data"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import React from "react"
import styled from "styled-components"
import RecipesCard from "../../components/RecipiesCard"
import Button from "./../../components/Button/Button"
import { Input } from "./../../components/Input/Input"
import { PopOver } from "./../../components/PopOver"
import { FilterSection } from "./../../screens/MyFeeds/myfeeds.styled"
import FavoriteFilerForm from "./favoritePageFilter"

type Props = {
  className?: string
}

const Favorite = ({ className }: Props) => {
  const countPerPage = 20
  const [currentPage, setCurrentPage] = React.useState(1)
  const [collection, setCollection] = React.useState(
    cloneDeep(FavData.slice(0, countPerPage))
  )
  const updatePage = (p: any) => {
    setCurrentPage(p)
    const to = countPerPage * p
    const from = to - countPerPage
    setCollection(cloneDeep(FavData.slice(from, to)))
  }
  return (
    <div className={`savedRecipesPage ${className}`}>
      {/* <PageLayoutWrapper className="savedRecipesWrapper" variant={"regular"}> */}
        <div className="recipesContainer">
          <ProfileSteps className="profile-header" />
          <FilterSection className="recipesFiltersForm">
            <div className="recipesFiltersbox">
              <Input
                type={"text"}
                icon={<SearchIconAlt />}
                placeholder="Search My Saved Recipes ..."
              />
              <PopOver
                button={
                  <Button
                    shape="circle"
                    iconLeft={<FilterIcon />}
                    iconRight={<DownArrowIcon />}
                    className="custom-button buttonFilter"
                    size="small"
                  >
                    Filter
                  </Button>
                }
              >
                <FavoriteFilerForm />
              </PopOver>
            </div>
            {/* <Filters></Filters> */}

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
                items={[{ name: "New" }, { name: "Most Popular" }]}
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
          </FilterSection>
          <div className="recipesSection">
            <div className="recipesSectionHolder">
              <RecipesCard data={collection} />
            </div>
          </div>
          <Pagination
            pageSize={countPerPage}
            onChange={updatePage}
            current={currentPage}
            total={FavData.length}
            showPrevNextJumpers={true}
            nextIcon="Next"
            prevIcon="Previous"
          />
        </div>
      {/* </PageLayoutWrapper> */}
    </div>
  )
}

Favorite.layout  ={
  layout: getPageLayout,
  props: {
className:"savedRecipesWrapper", variant:"regular",
sidebar:false
  }
}
export default styled(Favorite)`
  width: 100%;
`

