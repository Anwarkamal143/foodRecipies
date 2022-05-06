import { DropDown } from "@components"
import {
  AngleRight,
  Bell,
  Calander,
  DairyFree,
  GlutenFree,
  NutFree,
  Vegan,
  Vegetarian,
} from "@icons"
import React, { useRef, useState } from "react"
import { SearchHeader } from "src/components/AppSearch/Header"
import { useOnClickOutside } from "src/hooks/useClickOutside"
import { SearchedSections } from "./../../components/AppSearch/SearchedSections"
import Button from "./../../components/Button/Button"
type Props = {}

const SearchBar = (props: Props) => {
  const [searchText, setSearchText] = useState<any>("")
  const [isActiveFocus, setIsActiveFocus] = useState(false)
  const activeFocus = (e: any) => {
    setIsActiveFocus(e)
  }
  const ref = useRef()
  const [isModalOpen, setModalOpen] = useState(false)
  useOnClickOutside(ref, e => {
    setModalOpen(false)
    console.log(e, "sdd")
  })
  console.log(isModalOpen, "isModalOpen")

  return (
    <div
      className="pageFiltersSearch"
      ref={ref as any}
      onClick={() => {
        setModalOpen(true)
      }}
    >
      <div className="search">
        <SearchHeader
          onSearch={(s?: string) => setSearchText(s)}
          header={false}
          filterOption={true}
          value={searchText}
          activeFocus={activeFocus}
        />
        {isModalOpen && searchText && (
          <SearchedSections
            isSearchingEnable={!!searchText}
            onClickClear={() => setSearchText("")}
          />
        )}
      </div>
      <div className="quickFind">
        <span className="lbl">Quick Find:</span>
        <DropDown
          defaultValue="By Diet"
          button={selected => (
            <Button
              shape="circle"
              iconLeft={<Calander />}
              className="buttonFilter"
              size="small"
              title="By Diet"
            >
              {selected}
            </Button>
          )}
          items={[
            { name: "Gluten-Free", icon: <GlutenFree /> },
            { name: "Vegan", icon: <Vegan /> },
            { name: "Vegetarian", icon: <Vegetarian /> },
            { name: "Nut-Free", icon: <NutFree /> },
            { name: "Dairy-Free", icon: <DairyFree /> },
            {
              option: "See all Diet Options",
            },
          ]}
          renderItem={({ item, isActive, onClick }) => {
            return (
              <div
                className={`${isActive} item`}
                onClick={() => {
                  onClick(item.name)
                }}
              >
                {item.icon}
                {item.name}
                {item.option && (
                  <span className="img-arrow">
                    {item.option}
                    <AngleRight />
                  </span>
                )}
              </div>
            )
          }}
        />
        <DropDown
          defaultValue="By Cuisine"
          button={selected => (
            <Button
              shape="circle"
              iconLeft={<Bell />}
              className="buttonFilter"
              size="small"
              title="By Cuisine"
            >
              {selected}
            </Button>
          )}
          items={[
            {
              name: "Italian",
              icon: <img src="/images/italy.png" alt="side-dishes" />,
            },
            {
              name: "American",
              icon: <img src="/images/american.png" alt="side-dishes" />,
            },
            {
              name: "Mexican",
              icon: <img src="/images/mexican.png" alt="side-dishes" />,
            },
            {
              name: "Asian",
              icon: <img src="/images/asian.png" alt="side-dishes" />,
            },
            {
              name: "Indian",
              icon: <img src="/images/india.png" alt="side-dishes" />,
            },
            {
              name: "Indian",
              icon: <img src="/images/india.png" alt="side-dishes" />,
            },
            {
              option: "See all Cuisine",
            },
          ]}
          renderItem={({ item, isActive, onClick }) => {
            return (
              <div
                className={`${isActive} item`}
                onClick={() => onClick(item.name)}
              >
                {item.icon}
                {item.name}
                {item.option && (
                  <span className="img-arrow">
                    {item.option}
                    <AngleRight />
                  </span>
                )}
              </div>
            )
          }}
        />
      </div>
    </div>
  )
}

export default SearchBar
