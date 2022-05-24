import { Banner, Button, DropDown, SocialCard } from "@components"
import { DownArrowIcon } from "@icons"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
import Lottie from "react-lottie"
import Footer from "src/pages/NewPage/footer/footer"
import styled from "styled-components"

interface Props {
  className?: string
}

const NewScreen3 = ({ className }: Props) => {
  const countPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [collection, setCollection] = useState(
    cloneDeep(RecipesData.slice(0, countPerPage))
  )
  const updatePage = (p: any) => {
    setCurrentPage(p)
    const to = countPerPage * p
    const from = to - countPerPage
    setCollection(cloneDeep(RecipesData.slice(from, to)))
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CookAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div className={classNames(className)}>
      <Banner
        title="All Online Cooks"
        subTitle="Explore recipes from across the world. Looking to make some homemade pasta? We have plenty of Italian recipes! Looking to challenge yourself and cook something new from another country? Check out a new cuisine below."
        lottieAnimation={
          <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        }
      />
      <header className="sectionDetailsHeader">
        <ul className="organizedByList">
          <li>
            <strong className="title">Organized By:</strong>
          </li>
          <li>
            <a href="#">Recipes By Cuisine</a>
          </li>
        </ul>
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
            items={[{ name: "Relevance" }, { name: "Relevance" }]}
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
      </header>
      <div>
        {[10, 2].map((c, i) => (
          <SocialCard
            key={i}
            type="secondary"
            profileImage="/images/chicken.png"
            options={{ hasFlag: false, hasImage: true }}
            title="Cook"
            subTitle="1.5k Recipes"
          />
        ))}
      </div>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={RecipesData.length}
        showPrevNextJumpers={true}
        nextIcon="Next"
        prevIcon="Previous"
      />
      <Footer />
    </div>
  )
}

export const MyNewScreen3 = styled(NewScreen3)``
