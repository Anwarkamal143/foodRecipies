import { ArrowRight, CrossIcon, SearchIcon } from "@icons"
import React, { useState } from "react"
import styled from "styled-components"
import { Input } from "../Input"
import { Select } from "../Select"
import Button from "./../Button/Button"

type Props = {
  className?: string
  header?: boolean
  filterOption?: boolean
  title?: string
  onSearch?: (text?: string) => void
  onClose?: () => void
  value?: string
  activeFocus?: any
}

const Header = (props: Props) => {
  const {
    className,
    filterOption = false,
    title = "Smart Search",
    onSearch,
    onClose,
    header = true,
    value,
    activeFocus,
  } = props
  const [searchText, setSearchText] = useState("")
  const [filter, setFilter] = useState(false)
  const handleSearch = (searchTextt: string) => {
    onSearch?.(searchTextt)
  }

  return (
    <div className={className}>
      {header && (
        <div className="searchHeaderHeading">
          <h3>{title}</h3>
          <div className="searchHeaderClose" onClick={onClose}>
            <CrossIcon />
          </div>
        </div>
      )}

      <div className="searchHeaderForm">
        <Input
          value={value}
          className="search_input"
          placeholder="Smart Search Recipe & Cooks…"
          onChange={e => {
            handleSearch(e.target.value)
          }}
          type="text"
          materialDesign
          activeFocus={activeFocus}
          // onBlur={e => {
          //   activeFocus?.(false)
          // }}
         
        />
        {value && (
          <CrossIcon
            className="clearsearchbtn"
            onClick={() => {
              handleSearch("")
            }}
          />
        )}
        <span className={value ? "active_search" : "searchIcon"}>
          <SearchIcon />
        </span>
        {filterOption && (
          <div className="filterButtons">
            <Button
              shape="circle"
              className="buttonFilters"
              size="small"
              onClick={() => setFilter(!filter)}
            >
              <img src="/images/icon-filters.png" alt="Filters" />
            </Button>
            {filter && (
              <div className="searchSiltersDropdown">
                <div className="option-type">
                  <label>Recipe Type</label>
                  <Select
                    options={[{ value: "All Cooks", label: "All Cooks" }]}
                  />
                </div>
                <div className="option-type">
                  <label>Diet Restrictions</label>
                  <Select
                    options={[{ value: "All Cooks", label: "All Cooks" }]}
                  />
                </div>
                <div className="option-type">
                  <label>Ingredient Search</label>
                  <div className="field-wrap">
                    <Input
                      value={searchText}
                      className="search_input"
                      placeholder="Smart Search Recipe & Cooks…"
                      onChange={e => {
                        handleSearch(e.target.value)
                      }}
                      materialDesign
                    />
                    <SearchIcon />
                  </div>
                </div>
                <Button
                  shape="circle"
                  className="buttonFilterApply"
                  size="small"
                  onClick={() => setFilter(false)}
                >
                  Apply
                </Button>
              </div>
            )}
            <span className="buttonFilters"></span>
            <button className="buttonSearch">
              <span className="text">Smart Search</span>{" "}
              <ArrowRight className="iconArrow" />{" "}
              <SearchIcon className="iconSearch" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export const SearchHeader = styled(Header)`
  .searchHeaderHeading {
    overflow: hidden;
    text-align: center;
    position: relative;
    margin: 0 0 25px;

    @media (max-width: 767px) {
      text-align: left;
    }

    h3 {
      font-size: 16px;
      line-height: 20px;
      color: #e0464d;
    }

    .searchHeaderClose {
      position: absolute;
      right: 25px;
      top: 5px;
      transition: all 0.4s ease;
      cursor: pointer;

      @media (max-width: 767px) {
        right: 0;
      }

      &:hover {
        color: #e0464d;
        transform: rotate(180deg);

        path {
          fill: #e0464d;
        }
      }
    }
  }

  .searchHeaderForm {
    position: relative;

    label {
      display: none;
    }

    .form-control {
      width: 100%;
      height: 34px;
      font-size: 12px;
      line-height: 18px;
      padding: 7px 70px 7px 18px;
      color: #8d8d96;
      border: 1px solid #ff6067;
      border-radius: 20px;
    }

    .input-active {
      .form-control {
        border-color: #ff6067;
      }
    }

    .clearsearchbtn {
      position: absolute;
      right: 50px;
      top: 50%;
      transform: translateY(-50%);
      width: 9px;
      height: 9px;
      pointer-events: none;

      path {
        fill: #bdbdbd;
      }
    }

    .searchIcon,
    .active_search {
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ff6067;
      border-radius: 0 20px 20px 0;
      transition: all 0.4s ease;
      cursor: pointer;

      &:hover {
        background: #000;
      }

      svg {
        width: 14px;
        height: 14px;

        path {
          fill: #fff;
        }
      }
    }
  }

  .filterButtons {
    display: none;
  }
`
