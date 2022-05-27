import { Banner, SocialCard } from "@components"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
import Lottie from "react-lottie"
import SearchBar from "src/components/SearchBar"
import Footer from "src/pages/NewPage/footer/footer"
import styled from "styled-components"

interface Props {
  className?: string
}

const NewScreen1 = ({ className }: Props) => {
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
          title="Recipes By Cuisine"
          subTitle="Explore recipes from across the world. Looking to make some homemade pasta? We have plenty of Italian recipes! Looking to challenge yourself and cook something new from another country? Check out a new cuisine below."
          lottieAnimation={
            <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
          }
        />
        <header className="sectionHeader">
          <ul className="organizedByList">
            <li>
              <strong className="title">Organized By:</strong>
            </li>
            <li>
              <a href="#">Recipes By Cuisine</a>
            </li>
          </ul>
          <SearchBar
            options={{
              showSearchBar: false,
              showSwitchBox: false,
              showFilter: false,
              showSortBy: true,
            }}
          />
        </header>
        <div className="cards-frame">
          <div className="five-columns">
            {[10, 2].map((c, i) => (
              <SocialCard
                key={i}
                type="secondary"
                bgImage="/images/mock/post1.png"
                date="05/28/22"
                options={{ hasFlag: true }}
                countryFlag={"IT"}
                title="Pakistan"
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

export const MyNewScreen1 = styled(NewScreen1)`
  .pb-80 {
    padding-bottom: 80px;
  }

  .sectionHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    margin: -1px 2.5rem 40px;
    padding: 20px 0;

    @media (max-width: 1279px) {
      margin: -1px 0 40px;
    }

    @media (max-width: 767px) {
      border: 0;
      margin: 0;
      padding: 0 0 22px;
    }
  }

  .organizedByList {
    display: flex;
    align-items: center;

    .title {
      display: block;
      font-size: 14px;
      line-height: 1.5;
      color: #b1b1b1;
      text-transform: uppercase;

      @media (max-width: 767px) {
        font-size: 8px;
      }
    }

    li {
      margin: 0 14px 0 0;

      @media (max-width: 767px) {
        margin: 0 8px 0 0;
      }

      a {
        padding: 4px 15px;
        font-size: 10px;
        line-height: 1.5;
        color: #3e3e3e;
        display: block;
        border-radius: 4px;
        background: #fde0e3;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
        transition: all 0.25s ease-in-out;

        @media (max-width: 767px) {
          font-size: 7px;
          padding: 2px 10px;
        }

        &:hover {
          background: #ffb7be;
        }
      }
    }
  }

  .recipesFiltersForm {
    justify-content: flex-end;
    width: auto;

    .sortByFilter {
      .sortByFilterlbl {
        width: auto;
      }
    }
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
