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
  placeholder?: string
  sortBy?: any[]
  options?: {
    showSearchBar?: boolean
    showSwitchBox?: boolean
    showFilter?: boolean
    showSortBy?: boolean
  }
}

const SearchBar = (props: Props) => {
  const {
    sortBy = [{ name: "New" }, { name: "Most Popular" }],
    className,
    placeholder = "Search My Saved Recipes ...",
    options = {
      showSearchBar: true,
      showSwitchBox: true,
      showFilter: true,
      showSortBy: true,
    },
  } = props
  const [check, setCheck] = useState(false)
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
            placeholder={placeholder}
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
          items={sortBy}
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
    position: relative;
    z-index: 9;

    .form-control {
      font-size: 12px;
    }
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
  .sortByFilter {
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
      width: auto;
      display: flex !important;
      margin: 0;
    }

    .sortByFilterlbl {
      font-size: 10px;
      line-height: 1.5;
      color: #61616c;
      margin: 0 10px 0 0;

      @media (max-width: 767px) {
        font-size: 7px;
      }
    }

    .button.button-sm.buttonFilter {
      font-size: 10px;
      line-height: 1.5;
      color: #61616c;

      @media (max-width: 767px) {
        font-size: 7px;
        min-width: 85px;
        padding: 3px 6px;
      }
    }

    .sortByFilterDrop {
      margin-top: 5px !important;
      overflow: hidden;
      width: 182px;
      background: #fff;
      border: 1px solid #e5e8ef;
      box-sizing: border-box;
      box-shadow: 0px 10px 40px #8f8f8f;
      border-radius: 15px;
      padding: 15px 10px;

      @media (max-width: 1023px) {
        width: 100%;
      }

      @media (max-width: 767px) {
        padding: 5px;
        border-radius: 7px;
        min-width: 110px;
      }

      .item {
        padding: 5px 10px;
        font-size: 10px;
        line-height: 20px;
        color: #62626c;
        cursor: pointer;
        transition: all 0.4s ease;
        display: flex;
        align-items: center;
        border-radius: 5px;
        position: relative;

        &:after {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          width: 9px;
          height: 9px;
          font-weight: 400;
          content: "";
          opacity: 0;
          transition: all 0.25s ease-in-out;
          background-image: url("data:image/svg+xml,%3Csvg width='9' height='9' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.03333 0.911331L4.62244 2.50045L3.02958 4.09331' stroke='%230067ec' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M4.62156 2.49956H0.378924' stroke='%230067ec' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
        }

        &:hover {
          background: #eff6ff;
          border-radius: 5px;

          &:after {
            opacity: 0.7;
            right: 8px;
          }

          .img-arrow {
            opacity: 1;
            visibility: visible;
            margin: 0;
          }
        }
      }
    }
  }
`
