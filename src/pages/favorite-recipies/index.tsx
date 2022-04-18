import HeartIconAnimtaed from "@assets/icons/HeartIconAnimtaed"
import { DropDown, Icon } from "@components"
import { DownArrowIcon, FilterIcon, Tag, TimeDuraion } from "@icons"
import { FavData } from "data"
import React from "react"
import PostSliderForm from "src/screens/MyFeeds/components/PostsFilters/PostSliderForm"
import Button from "./../../components/Button/Button"
import { PopOver } from "./../../components/PopOver"
import { FilterSection } from "./../../screens/MyFeeds/myfeeds.styled"
type Props = {}

const Favorite = (props: Props) => {
  return (
    <div>
      <FilterSection>
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
      {FavData.map(e => {
        return (
          <div key={e.id}>
            <div>
              <Icon className="tagsIcon">
                <span>
                  <Tag /> Vegan
                </span>
              </Icon>
              <Icon className="heartIcon">
                <HeartIconAnimtaed />
              </Icon>
              <image src={e.image} alt="image" />
              <span>{e.title}</span>
              <span>{e.fvrtBy}</span>
            </div>
            <div>
              <span>
                <TimeDuraion />
                {e.time}
              </span>
              <span>
                <TimeDuraion />
                {e.state}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Favorite
