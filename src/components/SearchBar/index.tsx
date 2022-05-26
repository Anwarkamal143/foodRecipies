import { DropDown, Input, PopOver } from "@components"
import { DownArrowIcon, FilterIcon, SearchIconAlt } from "@icons"
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
  const [check, setCheck] = useState(false)
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
        <span className="switcher-holder">
          Include Sub-Categories
          <SwitchBox
            status={false}
            value={check}
            onChange={() => {
              setCheck(!check)
            }}
          />
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

export default styled(SearchBar)`
  &.recipesFiltersForm {
    padding: 0 !important;
    width: auto;
    flex-grow: 1;
    flex-basis: 0;
  }

  .switcher-holder {
    font-size: 10px;
    line-height: 12px;
    color: #61616c;
    margin: 0 20px 0 0;
  }

  .toggle-switch {
    margin: 0 0 0 5px;

    input[type="checkbox"] {
      &:checked {
        + .switcher {
          background: #e0464d;

          &:before {
            left: 25px;
          }
        }
      }
    }

    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }

    .switcher {
      width: 40px;
      height: 16px;
      border-radius: 14px;
      background: #d6d8e2;
      display: inline-block;
      vertical-align: middle;
      position: relative;

      &:before {
        width: 14px;
        height: 14px;
        background: #fff;
        border-radius: 100%;
        content: "";
        position: absolute;
        left: 1px;
        top: 1px;
        transition: all 0.4s ease;
      }
    }

    .txt {
      display: none;
    }
  }
`
