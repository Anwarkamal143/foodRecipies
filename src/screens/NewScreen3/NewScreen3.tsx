import { Banner, Button, DropDown, SocialCard } from "@components"
import { DownArrowIcon } from "@icons"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
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
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 pb-80">
        <Banner
          title="Recipes By Ingredient"
          subTitle="Explore recipes from across the world. Looking to make some homemade pasta? We have plenty of Italian recipes! Looking to challenge yourself and cook something new from another country? Check out a new cuisine below."
          lottieAnimation={<img src="/images/banner-image.png" />}
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
              items={[
                { name: "Most Popular" },
                { name: "Most Recipes" },
                { name: "Alphabetical" },
              ]}
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
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const MyNewScreen3 = styled(NewScreen3)`
  .pb-80 {
    padding-bottom: 80px;
  }

  .cards-frame {
    padding: 0 4.5rem;

    @media (max-width: 1279px) {
      padding: 0 40px;
    }

    @media (max-width: 767px) {
      padding: 0 10px 30px;
    }
  }

  .five-columns {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -18px;
    justify-content: center;

    @media (max-width: 767px) {
      margin: 0 -9px;
    }

    .card-secondary {
      margin: 0 18px 30px;
      width: 188px;

      @media (max-width: 767px) {
        width: 147px;
        margin: 0 9px 20px;
      }
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

  .rc-pagination {
    padding-top: 0;
  }
`
