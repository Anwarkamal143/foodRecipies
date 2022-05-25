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

const NewScreen6 = ({ className }: Props) => {
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
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 pb-80">
        <Banner
          title="Recipes By Type"
          subTitle="Browse recipes from your favorite cooks organized by type. Want to start your day off right? Check out popular breakfast recipes or end the night with some incredible dessert. Not sure what you want? Browse recipes via your Food Feed +"
          lottieAnimation={
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          }
        />
        <header className="food-sectionHeader">
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
        <div className="cards-frame">
          <div className="five-columns">
            {[10, 2].map((c, i) => (
              <SocialCard
                key={i}
                type="secondary"
                profileImage="/images/juice.jpg"
                options={{ hasFlag: false, hasImage: true }}
                title="Drinks"
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
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const MyNewScreen6 = styled(NewScreen6)`
  .pb-80 {
    padding-bottom: 80px;
  }

  .cards-frame {
    padding: 0 4.5rem;

    @media (max-width: 1279px) {
      padding: 0 40px;
    }

    @media (max-width: 767px) {
      padding: 0 10px;
    }
  }

  .five-columns {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -18px;

    @media (max-width: 767px) {
      margin: 0 -9px;
    }

    .card-secondary {
      padding: 0 18px;
      margin: 0 0 30px;
      width: 20%;

      @media (max-width: 1279px) {
        width: 25%;
      }

      @media (max-width: 1023px) {
        width: 33.333%;
      }

      @media (max-width: 767px) {
        width: 50%;
        margin: 0 0 20px;
        padding: 0 9px;
      }
    }
  }

  .rc-pagination {
    padding-top: 0;
  }
`
