import { DropDown, Input, PopOver } from "@components"
import { FilterIcon } from "@heroicons/react/outline"
import { DownArrowIcon, SearchIconAlt } from "@icons"
import classNames from "classnames"
import { useRef, useState } from "react"
import { useOnClickOutside } from "src/hooks/useClickOutside"
import PostSliderForm from "src/screens/MyFeeds/components/PostsFilters/PostSliderForm"
import { FilterSection } from "src/screens/MyFeeds/myfeeds.styled"
import styled from "styled-components"
import SwitchBox from "../SwitchBox"
import Button from "./../../components/Button/Button"
type Props = {
  className?: string
  options?: {
    showSearchBar?: boolean
    showSwitchBox?: boolean
    showFilter?: boolean
    showSortBy?: boolean
  }
}

const SearchBar = (props: Props) => {
  const {
    className,
    options = {
      showSearchBar: true,
      showSwitchBox: true,
      showFilter: true,
      showSortBy: true,
    },
  } = props
  const [searchText, setSearchText] = useState<any>("")
  const [isActiveFocus, setIsActiveFocus] = useState(false)
  const activeFocus = (e: any) => {
    setIsActiveFocus(e)
  }
  const ref = useRef()
  const [isModalOpen, setModalOpen] = useState(false)
  useOnClickOutside(ref, e => {
    setModalOpen(false)
  })

  return (
    <FilterSection className={classNames(className, "recipesFiltersForm")}>
      <div className="recipesFiltersbox">
        {options?.showSearchBar && (
          <Input
            type={"text"}
            icon={<SearchIconAlt />}
            placeholder="Search My Saved Recipes ..."
          />
        )}
        {options?.showFilter && (
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
        )}
      </div>
      {options?.showSwitchBox && (
        <span>
          Include Sub-Categories
          <SwitchBox status={false} />
        </span>
      )}

      <span className="sortBy sortByFilter">
        {options?.showSortBy && (
          <span className="sortByFilterlbl">Sort by</span>
        )}

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
  )
}

export default styled(SearchBar)``
