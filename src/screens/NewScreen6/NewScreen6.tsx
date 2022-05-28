import { Banner, SocialCard } from "@components"
import CookAnimation from "@lottie-animation/cook.json"
import { RecipesData } from "@redux/data"
import classNames from "classnames"
import cloneDeep from "lodash/cloneDeep"
import Pagination from "rc-pagination"
import { useState } from "react"
import SearchBar from "src/components/SearchBar"
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
          title={<span> Recipes By Ingredient</span>}
          subTitle={
            <span>
              Browse recipes from your favorite cooks organized by type. Want to
              start your day off right? Check out popular{" "}
              <strong>breakfast recipes</strong> or end the night with some
              incredible <strong>dessert</strong>. Not sure what you want?
              Browse recipes via your <strong>Food Feed +</strong>
            </span>
          }
          lottieAnimation={<img src="/images/banner-image.png" />}
        />
        <div>
          <header className="food-sectionHeader">
            <ul className="organizedByList">
              <li>
                <strong className="title">Organized By:</strong>
              </li>
              <li>
                <a href="#">Recipes By Cuisine</a>
              </li>
            </ul>
            <SearchBar
              sortBy={[
                { name: "Recently Saved" },
                { name: "Alphabetical" },
                { name: "Most Saves" },
                { name: "Trending" },
              ]}
              options={{
                showSearchBar: false,
                showSwitchBox: true,
                showFilter: false,
                showSortBy: true,
              }}
            />
          </header>
        </div>

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

  .food-sectionHeader {
    @media (max-width: 767px) {
      flex-wrap: wrap;
    }

    .recipesFiltersForm {
      width: auto !important;
      justify-content: flex-end;

      @media (max-width: 767px) {
        width: 100% !important;
        padding: 20px 0 0 !important;
        justify-content: space-between;
        flex-grow: inherit;
        flex-basis: inherit;
      }

      .sortByFilter {
        @media (max-width: 767px) {
          width: auto;
          display: flex !important;
          margin: 0;
        }
      }

      .sortByFilterlbl {
        margin: 0 10px 0 0;
        width: auto;
      }
    }

    .recipesFiltersbox {
      display: none;
    }
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

  .rc-pagination {
    padding-top: 0;
  }
`
