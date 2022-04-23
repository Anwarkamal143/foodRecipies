import { CircleDefaultImage, CircularProgresWithChildren, DropDown } from "@components"
import { DownArrowIcon, FilterIcon, SearchIcon } from "@icons"
import { PageLayoutWrapper } from "@layouts"
import { FavData } from "data"
import React from "react"
import { LeftSide } from "src/components/common/UserProfile/userprofile.styled"
import styled from "styled-components"
import RecipesCard from '../../components/RecipiesCard'
import Button from "./../../components/Button/Button"
import { Input } from './../../components/Input/Input'
import { PopOver } from "./../../components/PopOver"
import { FilterSection } from "./../../screens/MyFeeds/myfeeds.styled"
import FavoriteFilerForm from './favoritePageFilter'
type Props = {
  className?: string
}

const Favorite = ({ className }: Props) => {
  return (
    <div className={`recipesPage ${className}`}>
      <PageLayoutWrapper className='recipesPageWrapper' variant={'regular'}>
        <LeftSide className="userProfileProgresBox">
          <CircularProgresWithChildren
            maxValue={100}
            parentClass="circleprogress"
            strokeWidth={3}
            className="circleimages"
            value={15}
          >
            <div className="cursor-hand">
              <CircleDefaultImage
                className="circleimg"
                src="/images/profile-img.png"
                alt="default profile imag"
              />
            </div>
          </CircularProgresWithChildren>
          <div className="userProfileTextbox">
            <h2 className="userProfileTitle">
              Welcome Back, <span> </span>
            </h2>
            <span className="userProfilesubTitle">Founder Cook Profile</span>
          </div>
        </LeftSide>
        <div className="recipesContainer">
          <FilterSection className="recipesFiltersForm">
            <div className="recipesFiltersbox">
              <Input
                type={'text'}
                icon={<SearchIcon />}
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
