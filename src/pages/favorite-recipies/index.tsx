import { DropDown, ProfileSteps } from "@components"
import { DownArrowIcon, FilterIcon, SearchIconAlt } from "@icons"
import { PageLayoutWrapper } from "@layouts"
import { FavData } from "data"
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
  return (
    <div className={`savedRecipesPage ${className}`}>
      <PageLayoutWrapper className="savedRecipesWrapper" variant={"regular"}>
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
              <RecipesCard data={FavData} />
            </div>
          </div>
        </div>
      </PageLayoutWrapper>
    </div>
  )
}

export default styled(Favorite)`
  width: 100%;
`
