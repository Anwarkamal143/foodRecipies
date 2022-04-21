import { DropDown } from "@components"
import { DownArrowIcon, FilterIcon, SearchIcon } from "@icons"
import { PageLayoutWrapper } from "@layouts"
import { FavData } from "data"
import React from "react"
import PostSliderForm from "src/screens/MyFeeds/components/PostsFilters/PostSliderForm"
import RecipesCard from '../../components/RecipiesCard'
import Button from "./../../components/Button/Button"
import { Input } from './../../components/Input/Input'
import { PopOver } from "./../../components/PopOver"
import { FilterSection } from "./../../screens/MyFeeds/myfeeds.styled"

type Props = {}

const Favorite = (props: Props) => {
  return (
    <PageLayoutWrapper variant={'regular'}>

      <FilterSection>
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
          <PostSliderForm />
        </PopOver>
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
      <RecipesCard data={FavData} />
    </PageLayoutWrapper>
  )
}

export default Favorite
